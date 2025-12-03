"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Chevron icon component (right-pointing double chevron)
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="76"
    viewBox="0 0 58 76"
    fill="none"
    className={className}
  >
    <path
      d="M0.743652 21.1214L58.7437 1.04443V19.6342L0.743652 38.9675V21.1214Z"
      fill="black"
      stroke="black"
      strokeWidth="1.48718"
    />
    <path
      d="M58.7437 59.0447L0.743652 38.9678V57.5575L58.7437 76.8909V59.0447Z"
      fill="black"
      stroke="black"
      strokeWidth="1.48718"
    />
  </svg>
);

export const SecuritySection = () => {
  const t = useTranslations("SecuritySection");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  // List of items with their content
  const items = [
    {
      title: t("item1.title"),
      content: t("description"), // Use default description for item1
    },
    {
      title: t("item2.title"),
      content: t("item2.hoverContent"),
    },
    {
      title: t("item3.title"),
      content: t("item3.hoverContent"),
    },
  ];

  return (
    <section className="bg-white text-black border-t border-black">
      <div className="mx-auto max-w-[1300px] flex">
        <div className="border-r border-black">
          <div className="text-[68px] font-bold whitespace-nowrap py-[30px]">
            {t("title")}
          </div>

          <div className="flex-shrink-0 w-[771px] flex flex-col">
            <div className="w-full h-[584px]">
              <div className="relative w-full h-full overflow-hidden bg-[#000]">
                <Image
                  src="/images/security/main-logo.png"
                  alt="Security and Compliance"
                  fill
                  className="object-contain"
                  style={{
                    objectPosition: "left center",
                  }}
                />
              </div>
            </div>
            {/* Description text - switches based on selected item */}
            <div className="w-full flex justify-center items-center h-[200px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[24px] leading-[34px] tracking-[-0.24px] whitespace-pre-wrap"
                >
                  {items[selectedIndex].content}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex items-center pb-[38px]">
          <div className="flex-shrink-0 w-[520px] h-[584px] flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`flex-1 flex items-center gap-[41px] pr-2 cursor-pointer transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-[#efbe84]"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-[35px] font-bold text-center whitespace-pre-wrap">
                    {item.title}
                  </h3>
                </div>
                <div
                  className={`shrink-0 w-[58px] h-[75.846px] flex items-center justify-center transition-transform duration-300 ${
                    selectedIndex === index
                      ? "rotate-180 scale-y-[-1]"
                      : ""
                  }`}
                >
                  <ChevronIcon className="w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
