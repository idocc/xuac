"use client";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { AboutProductsSection } from "@/components/about/AboutProductsSection";
import { AboutScenariosSection } from "@/components/about/AboutScenariosSection";
import { AboutStatsSection } from "@/components/about/AboutStatsSection";
import { AboutReserveSection } from "@/components/about/AboutReserveSection";

export default function AboutPage() {
  return (
    <div className="bg-[#030303]">
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutProductsSection />
      <AboutScenariosSection />
      <AboutStatsSection />
      <AboutReserveSection />
    </div>
  );
}

