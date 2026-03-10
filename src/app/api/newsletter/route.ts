import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const newsletterSegmentId = "96add8c2-7e18-4242-b67c-01bfb80d0fd3";
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
    const contactsApiKey = process.env.RESEND_CONTACTS_API_KEY || apiKey;

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
    const contactsResend = new Resend(contactsApiKey);
    let contactSaved = false;
    let contactAlreadyExists = false;

    const created = await contactsResend.contacts.create({
      email,
      segments: [{ id: newsletterSegmentId }],
    });

    if (!created.error) {
      contactSaved = true;
    } else {
      // If contact already exists, we still need to ensure segment membership.
      const createErrorText = `${created.error.name || ""} ${created.error.message || ""}`.toLowerCase();
      if (
        createErrorText.includes("already") &&
        createErrorText.includes("exist")
      ) {
        contactAlreadyExists = true;
      }
    }

    if (!contactSaved || contactAlreadyExists) {
      const existing = await contactsResend.contacts.get({ email });

      if (!existing.error) {
        const updated = await contactsResend.contacts.update({
          email,
          unsubscribed: false,
        });
        if (!updated.error) {
          const addToSegment = await contactsResend.contacts.segments.add({
            email,
            segmentId: newsletterSegmentId,
          });

          if (
            addToSegment.error &&
            !`${addToSegment.error.name || ""} ${addToSegment.error.message || ""}`
              .toLowerCase()
              .includes("already")
          ) {
            console.error("Resend segment add failed for existing contact:", {
              email,
              segmentId: newsletterSegmentId,
              segmentError: addToSegment.error,
            });
          }

          contactSaved = true;
        }
      }
    }

    if (!contactSaved) {
      console.error("Resend contact save failed:", {
        email,
        createError: created.error,
        usingSeparateContactsKey: Boolean(process.env.RESEND_CONTACTS_API_KEY),
      });
      return handleError(
        "contact_save_failed",
        "Could not save contact in Resend. Use a full-access key in RESEND_CONTACTS_API_KEY.",
        "/?newsletter_error=contact_save_failed",
        500,
      );
    }

    const { error } = await resend.emails.send({
      from: "Cabarrus Festivals <no-reply@cabarrusfestivals.com>",
      to: toEmail,
      subject: "New Newsletter Signup - Cabarrus Festivals",
      html: `
        <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="background:#022154;padding:24px 28px;">
                <img src="https://cabarrusfestivals.com/images/cabarrus-white-logo.png" alt="Cabarrus Festivals" width="84" height="84" style="display:block;height:auto;border:0;" />
                <h1 style="margin:14px 0 0 0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">New Newsletter Signup</h1>
                <p style="margin:8px 0 0 0;font-size:14px;line-height:1.5;color:#dbe6ff;">A new subscriber joined your mailing list.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <p style="margin:0 0 10px 0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;">Subscriber Email</p>
                <p style="margin:0 0 22px 0;font-size:20px;line-height:1.4;color:#111827;font-weight:700;word-break:break-word;">${email}</p>

                <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;">Submitted At</p>
                <p style="margin:0;font-size:14px;line-height:1.5;color:#374151;">${new Date().toUTCString()}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;border-top:1px solid #e5e7eb;background:#fafafa;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#6b7280;">Cabarrus Festivals · 57 Union St S., Concord, NC 28025</p>
              </td>
            </tr>
          </table>
        </div>
      `,
      text: `New Newsletter Signup - Cabarrus Festivals\n\nSubscriber: ${email}\nSubmitted at: ${new Date().toUTCString()}`,
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
