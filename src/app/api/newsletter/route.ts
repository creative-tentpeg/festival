import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const redirectTo = (path: string) =>
    NextResponse.redirect(new URL(path, req.url));

  try {
    const formData = await req.formData();
    const email = (formData.get("email") || "").toString();
    const toEmail =
      process.env.NEWSLETTER_TO_EMAIL || "info@cabarrusfestivals.com";

    if (!email) {
      return redirectTo("/?newsletter_error=missing_email");
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return redirectTo("/?newsletter_error=email_not_configured");
    }

    const resend = new Resend(apiKey);

    // Save subscriber as a Resend contact (upsert behavior).
    const createContact = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (createContact.error) {
      const updateContact = await resend.contacts.update({
        email,
        unsubscribed: false,
      });

      if (updateContact.error) {
        console.error("Resend contact upsert failed:", {
          createError: createContact.error,
          updateError: updateContact.error,
          email,
        });
        return redirectTo("/?newsletter_error=contact_save_failed");
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
      return redirectTo("/?newsletter_error=send_failed");
    }

    return redirectTo("/?newsletter_success=1");
  } catch (error) {
    console.error("Error handling newsletter subscription via Resend:", error);
    return redirectTo("/?newsletter_error=internal_error");
  }
}
