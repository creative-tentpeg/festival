import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const wantsJson =
    req.headers.get("accept")?.includes("application/json") ?? false;

  const redirectTo = (path: string) =>
    new NextResponse(null, {
      status: 303,
      headers: { Location: path },
    });

  const jsonError = (status: number, code: string, message: string) =>
    NextResponse.json({ ok: false, code, message }, { status });

  const handleError = (
    code: string,
    message: string,
    path: string,
    status = 400,
  ) => (wantsJson ? jsonError(status, code, message) : redirectTo(path));

  const jsonSuccess = (contactSaved: boolean) =>
    NextResponse.json({
      ok: true,
      contactSaved,
      message: contactSaved
        ? "Subscribed successfully."
        : "Subscribed, but contact sync is pending.",
    });

  try {
    const formData = await req.formData();
    const email = (formData.get("email") || "").toString();
    const toEmail =
      process.env.NEWSLETTER_TO_EMAIL || "info@cabarrusfestivals.com";

    if (!email) {
      return handleError(
        "missing_email",
        "Please enter your email.",
        "/?newsletter_error=missing_email",
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return handleError(
        "email_not_configured",
        "Email service is not configured.",
        "/?newsletter_error=email_not_configured",
        500,
      );
    }

    const resend = new Resend(apiKey);
    let contactSaved = true;

    // Save subscriber as a Resend contact (upsert behavior).
    const createContact = await resend.contacts.create({
      ...(audienceId ? { audienceId } : {}),
      email,
      unsubscribed: false,
    });

    if (createContact.error) {
      const updateContact = await resend.contacts.update({
        ...(audienceId ? { audienceId } : {}),
        email,
        unsubscribed: false,
      });

      if (updateContact.error) {
        console.error("Resend contact upsert failed:", {
          createError: createContact.error,
          updateError: updateContact.error,
          email,
        });
        contactSaved = false;
      }
    }

    const { error } = await resend.emails.send({
      from: "Cabarrus Festivals <no-reply@cabarrusfestivals.com>",
      to: toEmail,
      subject: "New newsletter subscription",
      text: `New newsletter subscription: ${email}`,
    });

    if (error) {
      console.error("Resend returned an error for newsletter:", error);
      return handleError(
        "send_failed",
        "Could not send subscription notification.",
        "/?newsletter_error=send_failed",
        500,
      );
    }

    if (wantsJson) {
      return jsonSuccess(contactSaved);
    }

    return redirectTo("/?newsletter_success=1");
  } catch (error) {
    console.error("Error handling newsletter subscription via Resend:", error);
    return handleError(
      "internal_error",
      "Unexpected error while subscribing.",
      "/?newsletter_error=internal_error",
      500,
    );
  }
}
