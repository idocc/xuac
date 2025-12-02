"use client";

import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactCategoriesSection } from "@/components/contact/ContactCategoriesSection";
import { ContactSecuritySection } from "@/components/contact/ContactSecuritySection";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHeroSection />
      <ContactCategoriesSection />
      <ContactSecuritySection />
    </div>
  );
}

