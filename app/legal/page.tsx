"use client";

import { useState } from "react";
import { LegalHeroSection } from "@/components/legal/LegalHeroSection";
import { LegalIntroSection } from "@/components/legal/LegalIntroSection";
import { LegalTabsSection } from "@/components/legal/LegalTabsSection";
import { LegalContentSection } from "@/components/legal/LegalContentSection";

export type Tab = "terms" | "reserves" | "risk" | "privacy" | "aml";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<Tab>("terms");

  return (
    <div className="bg-white">
      <LegalHeroSection />
      <LegalIntroSection />
      <LegalTabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <LegalContentSection activeTab={activeTab} />
    </div>
  );
}

