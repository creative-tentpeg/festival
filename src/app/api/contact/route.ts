import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") || "").toString();
    const email = (formData.get("email") || "").toString();
    const subject = (formData.get("subject") || "").toString();
    const message = (formData.get("message") || "").toString();

    if (!name || !email || !message) {
      return NextResponse.redirect("/contact?error=missing_fields");
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.redirect("/contact?error=email_not_configured");
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Cabarrus Festivals <no-reply@cabarrusfestivals.com>",
      to: "info@cabarruscelticfestival.com",
      replyTo: email,
      subject: subject || "New contact form message",
      text: [
        `New contact form submission from ${name} <${email}>`,
        "",
        `Subject: ${subject || "(no subject)"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.redirect("/contact?success=1");
  } catch (error) {
    console.error("Error sending contact email via Resend:", error);
    return NextResponse.redirect("/contact?error=internal_error");
  }
}

