"use server";

import { Resend } from "resend";

interface ContactResponse {
  ok: boolean;
  message: string;
}

export async function sendContactMessage(formData: FormData): Promise<ContactResponse> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!fullName || !email || !message) {
    return {
      ok: false,
      message: "Please complete all fields before submitting.",
    };
  }

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return {
      ok: false,
      message: "Email service is not configured.",
    };
  }

  const resend = new Resend(resendKey);

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "contact@withbooster.com",
      to: ["contact@withbooster.com"],
      replyTo: [email],
      subject: `New website inquiry from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\n${message}`,
    });

    return {
      ok: true,
      message: "Thanks for reaching out! We'll be in touch shortly.",
    };
  } catch (error) {
    console.error("Resend error", error);
    return {
      ok: false,
      message: "We couldn't send your message. Please try again later.",
    };
  }
}

