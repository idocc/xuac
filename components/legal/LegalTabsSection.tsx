"use client";

import clsx from "clsx";
import { Tab } from "@/app/legal/page";

interface LegalTabsSectionProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const LegalTabsSection = ({ activeTab, setActiveTab }: LegalTabsSectionProps) => {

  const tabs = [
    { id: "terms" as Tab, label: "XAUC 代币条款与条件" },
    { id: "reserves" as Tab, label: "黄金储备与赎回规则说明" },
    { id: "risk" as Tab, label: "风险披露声明" },
    { id: "privacy" as Tab, label: "隐私政策" },
    { id: "aml" as Tab, label: "反洗钱与制裁合规政策" },
  ];

  return (
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Tabs */}
        <div className="flex flex-nowrap items-center gap-[19px] overflow-x-auto my-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center justify-center gap-[10px] px-[24px] py-[10px] transition-all whitespace-nowrap",
                activeTab === tab.id
                  ? "border-b-4 border-black"
                  : "border-b-4 border-transparent hover:border-black/30"
              )}
            >
              <span
                className={clsx(
                  "font-['IBM_Plex_Mono',monospace] text-[24px] md:text-[32px] leading-[79px] tracking-[-0.32px]",
                  activeTab === tab.id 
                    ? "font-bold text-black" 
                    : "font-normal text-[rgba(0,0,0,0.6)]"
                )}
                style={{ 
                  fontVariationSettings: activeTab === tab.id ? "'wght' 700" : "'wght' 400" 
                }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

