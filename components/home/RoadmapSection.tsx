"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export const RoadmapSection = () => {
  const t = useTranslations("RoadmapSection");
  const [activeIndex, setActiveIndex] = useState<number>(0); // 默认第一个卡片有背景色
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const phases = [
    {
      number: t("phases.phase1.number"),
      title: t("phases.phase1.title"),
      description: t("phases.phase1.description"),
      isActive: true, // Phase 01 has the gradient background
    },
    {
      number: t("phases.phase2.number"),
      title: t("phases.phase2.title"),
      description: t("phases.phase2.description"),
      isActive: false,
    },
    {
      number: t("phases.phase3.number"),
      title: t("phases.phase3.title"),
      description: t("phases.phase3.description"),
      isActive: false,
    },
  ];

  return (
    <section className="bg-[#030303] text-white py-20">
      <div className="mx-auto max-w-[1300px]">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-[68px] font-bold">
            {t("title")}
          </h2>
        </div>

        {/* Phases Section */}
        <div className="flex justify-center gap-8 mb-16">
          {phases.map((phase, index) => {
            // 如果有hover，显示hover的卡片背景色；否则显示activeIndex的卡片背景色
            const hasBackground = hoveredIndex !== null 
              ? hoveredIndex === index 
              : activeIndex === index;
            // hover时立即改变颜色，否则根据activeIndex决定数字颜色
            const isActive = hoveredIndex !== null 
              ? hoveredIndex === index 
              : activeIndex === index;
            
            return (
            <div
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center"
              style={{
                width: "392px",
                height: "315px",
                background: hasBackground
                  ? "linear-gradient(180deg, #000 0%, #EFBE84 186.98%), #2A2520"
                  : "transparent",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setActiveIndex(index); // hover完成后，背景色停留在当前卡片
              }}
            >
              <div
                className={`text-[80px] font-bold mb-4 ${
                  isActive ? "text-[#d4a574]" : "text-white"
                }`}
              >
                {phase.number}
              </div>
              <div className="text-[28px] font-bold text-white mb-2">
                {phase.title}
              </div>
              <div className="text-[18px] text-gray-400 whitespace-pre-wrap">
                {phase.description}
              </div>
            </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="relative pt-8 pb-8">
          <div className="flex items-center justify-between relative w-full">
            {/* Left gold bar */}
            <div className="bg-[#efbe84] h-[65px] w-[6px] shrink-0" />

            {/* Progress bar container */}
            <div className="relative flex-1 mx-4 h-[65px] flex items-center">
              {/* Dashed progress bar - many small vertical lines with individual coloring */}
              <div className="flex gap-[5px] items-center w-full">
                {Array.from({ length: 114 }).map((_, i) => {
                  // Calculate progress: first ~54 bars should be colored (279.747px / 5.21px per bar ≈ 54)
                  const totalBarWidth = 6;
                  const gapWidth = 5;
                  const progressWidth = 392;
                  const completedBars = Math.floor(progressWidth / (totalBarWidth + gapWidth));
                  const isCompleted = i < completedBars;
                  
                  return (
                    <div
                      key={i}
                      className={`h-[13px] w-[6px] shrink-0 ${
                        isCompleted
                          ? "bg-gradient-to-b from-[#efbe84] to-[#a7a7a7]"
                          : "bg-[#d9d9d9]"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Timeline markers positioned along the bar - evenly distributed */}
              <div className="absolute inset-0 flex items-center justify-around px-[20px]">
                {/* 2025 Q4 */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-[#101010] flex gap-[17px] items-center p-[12px]">
                    <span className="text-[28px] font-semibold text-white leading-[40.999px] whitespace-nowrap">
                      {t("timeline.q4_2025")}
                    </span>
                    <div className="bg-[#efbe84] w-[37px] h-[37px] shrink-0" />
                  </div>
                </div>

                {/* 2026 */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-[#101010] flex gap-[17px] items-center p-[12px]">
                    <span className="text-[28px] font-semibold text-white/50 leading-[40.999px] whitespace-nowrap">
                      {t("timeline.2026")}
                    </span>
                    <div className="bg-[#999999] w-[37px] h-[37px] shrink-0" />
                  </div>
                </div>

                {/* 2026+ */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-[#101010] flex gap-[17px] items-center p-[12px]">
                    <span className="text-[28px] font-semibold text-white/50 leading-[40.999px] whitespace-nowrap">
                      {t("timeline.2026_plus")}
                    </span>
                    <div className="bg-[#999999] w-[37px] h-[37px] shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right gray bar */}
            <div className="bg-[#5d5d5d] h-[65px] w-[6px] shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

