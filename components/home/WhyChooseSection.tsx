"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItem = {
  id: number;
  number: string;
  title: string;
  description: string;
};

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    number: "01",
    title: "真金实托",
    description: "多地受监管金库分布式托管，法律与合规框架完备。",
  },
  {
    id: 2,
    number: "02",
    title: "链上发行，原生可组合",
    description:
      "通过智能合约在区块链上发行，与 DeFi 协议无缝集成，实现原生可组合性。",
  },
  {
    id: 3,
    number: "03",
    title: "1:1 兑换机制",
    description:
      "每枚 XAUC 按伦敦金价 1:1 锚定，支持随时兑换为实物黄金或法币。",
  },
  {
    id: 4,
    number: "04",
    title: "透明证明",
    description:
      "通过 Proof Dashboard 实时展示储备状况，实现完全透明的黄金储备证明。",
  },
];

const introText =
  "XAUC 是一款以实物黄金为支撑的链上稳定资产，结合传统金融的安全与 Web3 的可组合性。每枚 XAUC 均由受监管金库托管、按伦敦金价 1:1 发行，并支持个人与机构随时兑回黄金或法币。通过 Proof Dashboard 实现储备透明化，XAUC 让黄金在区块链上真正实现可验证、可流通、可编程的价值载体。";

// Chevron icon component (double chevron pointing right)
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="78"
    viewBox="0 0 60 78"
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

// Arrow icon component
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="83"
    height="56"
    viewBox="0 0 83 56"
    fill="none"
    className={className}
  >
    <path
      d="M1.0321 29.3146L81.5321 1.44922V27.2505L1.0321 54.0838V29.3146Z"
      fill="black"
      stroke="black"
      strokeWidth="2.0641"
    />
  </svg>
);

export const WhyChooseSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // First item (01) expanded by default

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-white text-black pt-[83px] pb-20">
      <div className="mx-auto max-w-[1300px]">
        {/* Title */}
        <h2
          className="text-left text-[68px] font-bold tracking-[-0.68px] mb-[50px]"
          style={{
            fontFamily:
              '"IBM Plex Mono", "Noto Sans SC", "Noto Sans JP", sans-serif',
          }}
        >
          为什么选择 XAUC?
        </h2>

        {/* Intro section with icons and text */}
        <div className="flex items-center gap-[46px] mb-[72px] justify-center">
          <div className="flex">
            <div className="shrink-0 relative w-[60px] h-[78px] rotate-180">
              <ChevronIcon className="w-full h-full" />
            </div>
            <div className="shrink-0 relative w-[60px] h-[78px] rotate-180">
              <ChevronIcon className="w-full h-full" />
            </div>
          </div>
          <p
            className="text-[16px] leading-[34px] tracking-[-0.16px] w-[752px] font-normal"
            style={{
              fontFamily:
                '"IBM Plex Mono", "Noto Sans SC", "Noto Sans JP", sans-serif',
            }}
          >
            {introText}
          </p>
        </div>

        {/* Accordion items */}
        <div className="space-y-0">
          {accordionItems.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={item.id} className="relative">
                {/* Horizontal line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-black" />

                {/* Accordion item */}
                <div className="relative">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between cursor-pointer transition-all duration-300"
                    style={{
                      minHeight: isExpanded ? "196px" : "149px",
                      height: "auto",
                    }}
                  >
                    {/* Number */}
                    <div
                      className="text-[74.441px] font-bold tracking-[-0.7444px] leading-[158.186px] shrink-0 not-italic"
                      style={{
                        fontFamily: '"IBM Plex Mono", sans-serif',
                      }}
                    >
                      {item.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col items-start justify-center px-[200px]">
                      <h3 className="text-[68px] font-bold tracking-[-0.68px] text-left">
                        {item.title}
                      </h3>
                      <AnimatePresence>
                        {isExpanded && item.description && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-[24px] leading-[38px] tracking-[-0.24px] text-left overflow-hidden font-normal"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow icon */}
                    <div className="shrink-0 w-[83px] h-[56px] flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: isExpanded ? 0 : 180,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          transformOrigin: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="78"
                          viewBox="0 0 60 78"
                          fill="none"
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
                      </motion.div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
