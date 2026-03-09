import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = (formData.get("email") || "").toString();

    if (!email) {
      return NextResponse.redirect(
        new URL("/?newsletter_error=missing_email", req.url),
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.redirect(
        new URL("/?newsletter_error=email_not_configured", req.url),
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Cabarrus Festivals <no-reply@cabarrusfestivals.com>",
      to: "info@cabarruscelticfestival.com",
      subject: "New newsletter subscription",
      text: `New newsletter subscription: ${email}`,
    });

    return NextResponse.redirect(
      new URL("/?newsletter_success=1", req.url),
    );
  } catch (error) {
    console.error("Error handling newsletter subscription via Resend:", error);
    return NextResponse.redirect(
      new URL("/?newsletter_error=internal_error", req.url),
    );
  }
}

