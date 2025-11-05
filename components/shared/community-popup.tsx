"use client";

import { FormEvent, useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSupabaseClient } from "@/lib/supabaseClient";

interface CommunityPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommunityPopup({ open, onOpenChange }: CommunityPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const fullName = (form.fullName as HTMLInputElement)?.value.trim();
    const company = (form.company as HTMLInputElement)?.value.trim();
    const email = (form.email as HTMLInputElement)?.value.trim();

    if (!fullName || !email) {
      setStatus("error");
      setMessage("Please provide your full name and email.");
      return;
    }

    let supabase;
    try {
      supabase = getSupabaseClient();
    } catch (error) {
      setStatus("error");
      setMessage("Supabase is not configured. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setMessage(null);

    try {
      const { error } = await supabase.from("community_members").insert({
        full_name: fullName,
        company,
        email,
      });

      if (error) {
        throw error;
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks for joining! We'll be in touch soon.");
    } catch (error) {
      setStatus("error");
      setMessage("We couldn't submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join Our Community</DialogTitle>
        </DialogHeader>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="community-full-name">Full Name</Label>
              <Input id="community-full-name" name="fullName" placeholder="Jane Smith" required />
            </div>
            <div className="space-y-3">
              <Label htmlFor="community-company">Company</Label>
              <Input
                id="community-company"
                name="company"
                placeholder="Your company (optional)"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="community-email">Email</Label>
              <Input
                id="community-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>
          </div>
          {message && (
            <p
              className={
                status === "success"
                  ? "text-center text-sm text-green-600 font-medium"
                  : "text-center text-sm text-red-600 font-medium"
              }
            >
              {message}
            </p>
          )}
          <div className="flex justify-center pt-2">
            <Button type="submit" className="min-w-[200px] px-8" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Join Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

