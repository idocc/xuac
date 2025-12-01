import { HeroSection } from "@/components/home/HeroSection";
import { ValueSection } from "@/components/home/ValueSection";
import { ReserveSection } from "@/components/home/ReserveSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { QuerySection } from "@/components/home/QuerySection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { BackgroundBorderSection } from "@/components/home/BackgroundBorderSection";

export default function Home() {
  return (
    <div className="bg-[#030303]">
      <HeroSection />
      <ValueSection />
      <ReserveSection />
      <WhyChooseSection />
      <QuerySection />
      <SecuritySection />
      <RoadmapSection />
      <BackgroundBorderSection />
    </div>
  );
}