"use client";

import { TransparencyHeroSection } from "@/components/transparency/TransparencyHeroSection";
import { TransparencyTabsSection } from "@/components/transparency/TransparencyTabsSection";
import { TransparencyDataTable } from "@/components/transparency/TransparencyDataTable";
import { TransparencyNotesSection } from "@/components/transparency/TransparencyNotesSection";

export default function TransparencyPage() {
  return (
    <div className="bg-white">
      <TransparencyHeroSection />
      <TransparencyTabsSection />
      <TransparencyDataTable />
      <TransparencyNotesSection />
    </div>
  );
}

