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
    const email = (formData.get("email") || "").toString().trim().toLowerCase();
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
    let contactSaved = false;

    const created = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (!created.error) {
      contactSaved = true;
    } else {
      const existing = await resend.contacts.get({ email });

      if (!existing.error) {
        const updated = await resend.contacts.update({
          email,
          unsubscribed: false,
        });
        contactSaved = !updated.error;
      }

      if (!contactSaved) {
        console.error("Resend contact save failed:", {
          email,
          createError: created.error,
          getError: existing.error,
        });
        return handleError(
          "contact_save_failed",
          "Could not save contact in Resend. Check API key permissions for Contacts.",
          "/?newsletter_error=contact_save_failed",
          500,
        );
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

    if (wantsJson) return jsonSuccess(contactSaved);

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
