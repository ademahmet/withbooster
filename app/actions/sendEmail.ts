"use server";

import { Resend } from "resend";

interface FormState {
  ok: boolean;
  message: string;
}

const initialState: FormState = {
  ok: false,
  message: "",
};

export { initialState };

export async function sendEmail(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Please complete all fields before submitting.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "contact@withbooster.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY environment variable is missing");
    return {
      ok: false,
      message: "Email service is not configured.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: ["contact@withbooster.com"],
      replyTo: [email],
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return {
      ok: true,
      message: "Thanks for reaching out! We'll reply shortly.",
    };
  } catch (error) {
    console.error("Resend send error", error);
    return {
      ok: false,
      message: "We couldn't send your message. Please try again later.",
    };
  }
}

