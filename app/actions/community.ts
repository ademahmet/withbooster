"use server";

import { revalidatePath } from "next/cache";

import { getSupabaseClient } from "@/lib/supabase-server";

export async function createCommunityMember(formData: FormData) {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const companyName = String(formData.get("companyName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!fullName || !email) {
    return {
      ok: false,
      message: "Full name and email are required.",
    };
  }

  const supabase = getSupabaseClient();

  const { error } = await supabase.from("community_members").insert({
    full_name: fullName,
    company_name: companyName,
    email,
  });

  if (error) {
    console.error("Supabase insert error", error);
    return {
      ok: false,
      message: "We couldn't save your submission. Please try again soon.",
    };
  }

  revalidatePath("/");

  return {
    ok: true,
    message: "Thanks for joining the community!",
  };
}

