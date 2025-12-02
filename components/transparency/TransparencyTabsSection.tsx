"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

type Tab = "current" | "reserves" | "crosschain";

export const TransparencyTabsSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("current");

  const tabs = [
    { id: "current" as Tab, label: "当前余额" },
    { id: "reserves" as Tab, label: "储备与报告" },
    { id: "crosschain" as Tab, label: "跨链与桥接" },
  ];

  return (
    <section className="relative w-full bg-white py-16">
      <div className="mx-auto w-full max-w-[1098px] px-4">
        {/* Icon */}
        <div className="mx-auto mb-10 h-[129px] w-[126px]">
          <Image
            src="/images/transparency/image245.png"
            alt=""
            className="h-full w-full object-cover object-center"
            width={126}
            height={129}
          />
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-[19px] font-bold">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center justify-center gap-2.5 px-2.5 py-2.5 transition-all",
                activeTab === tab.id
                  ? "border-b-4 border-black"
                  : "border-b-4 border-transparent hover:border-black/30"
              )}
            >
              <span
                className={clsx(
                  "font-['IBM_Plex_Mono',monospace] text-[24px] md:text-[32px] leading-[79px] tracking-[-0.32px] whitespace-nowrap",
                  activeTab === tab.id ? "text-black" : "text-black"
                )}
                style={{ fontVariationSettings: "'wght' 700" }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="mx-auto max-w-full">
          <p className="font-['IBM_Plex_Mono',monospace] text-[24px] leading-[43px] tracking-[-0.24px] text-black text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
            本页展示 XAUC 在各支持网络上的发行与流通情况，仅用于信息披露与透明度目的。
            <br />
            部分旧网络可能不再新增发行或赎回，对应数据仅作为历史记录保留。
            <br />
            数据可能存在轻微延迟，请以链上信息及官方公告为准。
          </p>
        </div>
      </div>
    </section>
  );
};

