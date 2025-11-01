"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { initialState, sendEmail } from "@/app/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmail, initialState);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
      action={formAction}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <Label htmlFor="contact-name">Full Name</Label>
          <Input id="contact-name" name="name" placeholder="Jane Smith" required />
        </div>
        <div className="space-y-3">
          <Label htmlFor="contact-email">Email Address</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </div>
      </div>
      <div className="space-y-3">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell us about your goals and how we can help."
          required
        />
      </div>
      {state.message && (
        <p className={state.ok ? "text-center text-sm text-[#8bf5b0]" : "text-center text-sm text-[#ff9b9b]"}>{state.message}</p>
      )}
      <div className="flex justify-center">
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="min-w-[200px] px-8" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

