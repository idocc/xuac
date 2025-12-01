"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type BlockCopy = {
  title: string;
  full: string[];
};

const blocks: BlockCopy[] = [
  {
    title: "XAUC",
    full: [
      "每 1 枚 XAUC,均由等值实物黄金全额支持,并按伦敦金价 1:1 锚定。",
      "无论个人或机构，持有人都可通过合规渠道将 XAUC 兑换为对应数量的黄金或法币。",
      "XAUC 让黄金以数字化形式进入全球流通网络，安全、透明、可信。",
    ],
  },
  {
    title: "链上黄金",
    full: [
      "通过链上智能合约，黄金的所有权被数字化、可验证并可编程。",
      "黄金不再静止于金库，而是能够在全球网络中实现快速、自由的转移。",
      "链上黄金带来了更高的透明度、流动性与可组合性，为金融创新提供基础。",
    ],
  },
  {
    title: "可兑回",
    full: [
      "每一枚 XAUC 都可按规则兑换成等值的实物黄金或法币，流程清晰且合规可审计。",
      "个人与机构均可依托成熟的托管与结算体系完成赎回，确保资产真实可得。",
      "可兑回机制是 XAUC 黄金储备透明与安全的核心保障。",
    ],
  },
  {
    title: "合规",
    full: [
      "每一份黄金的流动与代币的发行，都遵循相关司法辖区的监管要求。",
      "托管、审计、KYC/AML 等环节均在严格的法律框架下运行，确保资产安全与合法性。",
      "合规体系让 XAUC 在全球范围内具备可信赖的运营基础。",
    ],
  },
];

export const ValueSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // 滚动到视窗一半高度时触发展示动画（只触发一次）
  useEffect(() => {
    if (!sectionRef.current || hasEntered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.disconnect();
          }
        });
      },
      {
        // 原来是 0.5（需要版块进入一半视口才触发）
        // 调小阈值，让内容刚出现时就开始动效
        threshold: 0.5,
      },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasEntered]);

  // 使用 flex-grow 来模拟原来的列宽占比，并添加平滑过渡
  const desktopDefaultFlex = [4, 3, 2, 1] as const;
  // 点击后，让激活列更宽一点，其余列相对更窄
  const desktopExpandedFlex = [
    [6, 1.5, 1.5, 1.5],
    [1.5, 6, 1.5, 1.5],
    [1.5, 1.5, 6, 1.5],
    [1.5, 1.5, 1.5, 6],
  ] as const;

  const getFlexGrow = (index: number) => {
    if (activeIndex === null) return desktopDefaultFlex[index];
    return desktopExpandedFlex[activeIndex][index];
  };

  const getTextClampClass = (index: number) =>
    activeIndex === index ? "" : " line-clamp-4";

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-white text-[#050505]"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col">
        <div className="overflow-hidden bg-white">
          <div className="flex flex-row items-stretch h-[1024px] overflow-hidden">
            {/* 左侧边缘竖线：先入场 */}
            <div
              className="w-[1px] bg-black self-stretch value-line"
              style={
                hasEntered
                  ? {
                      animation: "value-line-grow 0.6s ease-out forwards",
                      animationDelay: "0s",
                    }
                  : undefined
              }
            />
            <div
              className="flex min-w-0 flex-col pt-[194px] cursor-pointer"
              onClick={() =>
                setActiveIndex((prev) => (prev === 0 ? null : 0))
              }
              style={{
                flexGrow: getFlexGrow(0),
                flexBasis: 0,
                transition: "flex-grow 300ms ease",
              }}
            >
              {/* SVG 第二阶段入场 */}
              <motion.div
                className="flex h-[194px] items-center justify-center bg-white"
                initial={{ opacity: 0, y: -24 }}
                animate={
                  hasEntered
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -24 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 559 194"
                  preserveAspectRatio="none"
                  className={
                    hasEntered
                      ? "hero-svg-word hero-svg-word-1 h-full w-full"
                      : "h-full w-full"
                  }
                >
                  <path
                    d="M186.333 74.3667L201.861 77.6L357.139 77.4707L372.667 74.3667V0H559V77.6H388.195L372.667 80.8333V113.167L388.195 116.4H559V194H372.667V119.633L357.139 116.4H202.482L186.333 119.633V194H0V116.4H170.805L186.333 113.037V80.8333L170.805 77.6H0.621019L0 0H186.333V74.3667Z"
                  />
                </svg>
              </motion.div>
              {/* 文本第三阶段入场：从左侧滑入 */}
              <motion.div
                className="px-8 pb-12 pt-[219px] text-black"
                initial={{ opacity: 0, x: -32 }}
                animate={
                  hasEntered
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -32 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              >
                <p className="text-2xl px-[5px]">{blocks[0].title}</p>
                <p
                  className={`mt-6 text-xl leading-8 text-[#141414]/90 whitespace-pre-line${getTextClampClass(
                    0,
                  )}`}
                >
                  {blocks[0].full.join("\n\n")}
                </p>
              </motion.div>
            </div>

            {/* 列 2：链上黄金 */}
            {/* 列 1 / 列 2 之间竖线 */}
            <div
              className="w-[1px] bg-black self-stretch value-line"
              style={
                hasEntered
                  ? {
                      animation: "value-line-grow 0.6s ease-out forwards",
                      animationDelay: "0.08s",
                    }
                  : undefined
              }
            />
            <div
              className="flex min-w-0 flex-col pt-[194px] cursor-pointer"
              onClick={() =>
                setActiveIndex((prev) => (prev === 1 ? null : 1))
              }
              style={{
                flexGrow: getFlexGrow(1),
                flexBasis: 0,
                transition: "flex-grow 300ms ease",
              }}
            >
              <motion.div
                className="flex h-[194px] px-[2px] items-center justify-center bg-white"
                initial={{ opacity: 0, y: -24 }}
                animate={
                  hasEntered
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -24 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 194"
                  preserveAspectRatio="none"
                  className={
                    hasEntered
                      ? "hero-svg-word hero-svg-word-2 h-full w-full"
                      : "h-full w-full"
                  }
                >
                  <path d="M0 194V0H352V194H234.667V116.4H117.333V194H0ZM117.333 77.6H234.667V38.8H117.333V77.6Z" />
                </svg>
              </motion.div>
              <motion.div
                className="px-8 pb-12 pt-[219px] text-black"
                initial={{ opacity: 0, x: -32 }}
                animate={
                  hasEntered
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -32 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              >
                <p
                  className="text-2xl font-medium"
                  style={{
                    fontFamily: '"IBM Plex Mono","Noto Sans SC",monospace',
                  }}
                >
                  {blocks[1].title}
                </p>
                <p
                  className={`mt-6 text-xl leading-8 text-[#141414]/85 whitespace-pre-line${getTextClampClass(
                    1,
                  )}`}
                >
                  {blocks[1].full.join("\n\n")}
                </p>
              </motion.div>
            </div>

            {/* 列 3：可兑回 */}
            {/* 列 2 / 列 3 之间竖线 */}
            <div
              className="w-[1px] bg-black self-stretch value-line"
              style={
                hasEntered
                  ? {
                      animation: "value-line-grow 0.6s ease-out forwards",
                      animationDelay: "0.16s",
                    }
                  : undefined
              }
            />
            <div
              className="flex min-w-0 flex-col pt-[194px] cursor-pointer"
              onClick={() =>
                setActiveIndex((prev) => (prev === 2 ? null : 2))
              }
              style={{
                flexGrow: getFlexGrow(2),
                flexBasis: 0,
                transition: "flex-grow 300ms ease",
              }}
            >
              <motion.div
                className="flex h-[194px] px-[2px] items-center justify-center bg-white"
                initial={{ opacity: 0, y: -24 }}
                animate={
                  hasEntered
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -24 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 222 194"
                  preserveAspectRatio="none"
                  className={
                    hasEntered
                      ? "hero-svg-word hero-svg-word-3 h-full w-full"
                      : "h-full w-full"
                  }
                >
                  <path d="M148 0H222V194H0V0H73.9999V155.2H148V0Z" />
                </svg>
              </motion.div>
              <motion.div
                className="px-8 pb-12 pt-[219px] text-black"
                initial={{ opacity: 0, x: -32 }}
                animate={
                  hasEntered
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -32 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
              >
                <p
                  className="text-2xl font-medium tracking-[-0.04em] px-[5px]"
                  style={{
                    fontFamily: '"IBM Plex Mono","Noto Sans SC",monospace',
                  }}
                >
                  {blocks[2].title}
                </p>
                <p
                  className={`mt-6 text-xl leading-8 text-[#141414]/85 whitespace-pre-line${getTextClampClass(
                    2,
                  )}`}
                >
                  {blocks[2].full.join("\n\n")}
                </p>
              </motion.div>
            </div>

            {/* 列 4：合规 */}
            {/* 列 3 / 列 4 之间竖线 */}
            <div
              className="w-[1px] bg-black self-stretch value-line"
              style={
                hasEntered
                  ? {
                      animation: "value-line-grow 0.6s ease-out forwards",
                      animationDelay: "0.24s",
                    }
                  : undefined
              }
            />
            <div
              className="flex min-w-0 flex-col pt-[194px] cursor-pointer"
              onClick={() =>
                setActiveIndex((prev) => (prev === 3 ? null : 3))
              }
              style={{
                flexGrow: getFlexGrow(3),
                flexBasis: 0,
                transition: "flex-grow 300ms ease",
              }}
            >
              <motion.div
                className="flex h-[194px] items-center justify-center bg-white"
                initial={{ opacity: 0, y: -24 }}
                animate={
                  hasEntered
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -24 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 140 194"
                  preserveAspectRatio="none"
                  className={
                    hasEntered
                      ? "hero-svg-word hero-svg-word-4 h-full w-full"
                      : "h-full w-full"
                  }
                >
                  <path d="M140 155.2V194H0V0H140V38.8H46.6666V155.2H140Z" />
                </svg>
              </motion.div>
              <motion.div
                className="px-8 pb-12 pt-[219px] text-black"
                initial={{ opacity: 0, x: -32 }}
                animate={
                  hasEntered
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -32 }
                }
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              >
                <p
                  className="text-2xl font-medium tracking-[-0.04em] px-[5px]"
                  style={{
                    fontFamily: '"IBM Plex Mono","Noto Sans SC",monospace',
                  }}
                >
                  {blocks[3].title}
                </p>
                <p
                  className={`mt-6 text-xl leading-8 text-[#141414]/85 whitespace-pre-line${getTextClampClass(
                    3,
                  )}`}
                >
                  {blocks[3].full.join("\n\n")}
                </p>
              </motion.div>
            </div>
            {/* 右侧边缘竖线 */}
            <div
              className="w-[1px] bg-black self-stretch value-line"
              style={
                hasEntered
                  ? {
                      animation: "value-line-grow 0.6s ease-out forwards",
                      animationDelay: "0.32s",
                    }
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
