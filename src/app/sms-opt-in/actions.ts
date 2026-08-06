"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SMS_CONSENT_TEXT } from "@/lib/smsConsent";

export async function submitSmsOptIn(formData: FormData) {
  const rawPhone = (formData.get("phone") as string | null)?.trim() ?? "";
  const consented = formData.get("consent") === "on";

  if (!consented) {
    redirect(
      `/sms-opt-in?error=${encodeURIComponent("Please check the consent box to sign up.")}`,
    );
  }

  const digits = rawPhone.replace(/[^\d+]/g, "");
  if (!/^\+?[1-9]\d{7,14}$/.test(digits)) {
    redirect(`/sms-opt-in?error=${encodeURIComponent("Please enter a valid phone number.")}`);
  }

  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();

  const { error } = await supabase.from("sms_optins").insert({
    phone_number: digits,
    user_id: userData.user?.id ?? null,
    consent_text: SMS_CONSENT_TEXT,
  });

  if (error) {
    redirect(`/sms-opt-in?error=${encodeURIComponent("Something went wrong. Please try again.")}`);
  }

  redirect(
    `/sms-opt-in?message=${encodeURIComponent("You're on the list — we'll text you once alerts go live.")}`,
  );
}
