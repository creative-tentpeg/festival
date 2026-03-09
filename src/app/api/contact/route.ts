import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") || "").toString();
    const email = (formData.get("email") || "").toString();
    const subject = (formData.get("subject") || "").toString();
    const message = (formData.get("message") || "").toString();

    if (!name || !email || !message) {
      return NextResponse.redirect(
        new URL("/contact?error=missing_fields", req.url),
      );
    }

    await resend.emails.send({
      from: "Cabarrus Festivals <no-reply@cabarrusfestivals.com>",
      to: "info@cabarruscelticfestival.com",
      reply_to: email,
      subject: subject || "New contact form message",
      text: [
        `New contact form submission from ${name} <${email}>`,
        "",
        `Subject: ${subject || "(no subject)"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.redirect(new URL("/contact?success=1", req.url));
  } catch (error) {
    console.error("Error sending contact email via Resend:", error);
    return NextResponse.redirect(
      new URL("/contact?error=internal_error", req.url),
    );
  }
}

