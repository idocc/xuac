"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const reserveItems = [
  {
    id: "usd",
    label: "美元市值",
    value: "$1,628,053,00",
    numericValue: 162805300, // 提取的数字值
    progress: 64, // 进度条百分比
    accent: "from-[#efbe84] to-[#a7a7a7]",
    barColor: "bg-gradient-to-b from-[#efbe84] to-[#a7a7a7]",
    letter: "$",
    image: "/images/home/1.png",
  },
  {
    id: "bars",
    label: "金条数量",
    value: "113",
    numericValue: 113,
    progress: 56,
    accent: "from-white to-[#a7a7a7]",
    barColor: "bg-gradient-to-b from-white to-[#a7a7a7]",
    letter: "山",
    image: "/images/home/2.png",
  },
  {
    id: "weight",
    label: "黄金总重量",
    value: "113",
    numericValue: 113,
    progress: 50,
    accent: "from-white to-[#a7a7a7]",
    barColor: "bg-gradient-to-b from-white to-[#a7a7a7]",
    letter: "G",
    image: "/images/home/3.png",
  },
] as const;

// 格式化数字，保留原始格式
const formatNumber = (value: number, originalValue: string): string => {
  // 如果原始值包含 $ 符号，保留它
  if (originalValue.startsWith("$")) {
    // 移除 $ 和逗号，然后格式化
    const numStr = value.toLocaleString("en-US");
    return `$${numStr}`;
  }
  return value.toLocaleString("en-US");
};

// 单个 Reserve Item 组件，带动画
const ReserveItem = ({
  item,
  index,
}: {
  item: (typeof reserveItems)[number];
  index: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 动画持续时间 2 秒
    const startTime = Date.now();

    // EaseOutCubic 缓动函数
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setDisplayValue(item.numericValue * easedProgress);
      setProgress(item.progress * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // 确保最终值准确
        setDisplayValue(item.numericValue);
        setProgress(item.progress);
      }
    };

    const rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, item.numericValue, item.progress]);

  return (
    <div
      ref={ref}
      className="flex h-[145px] items-center justify-center gap-10"
    >
      {/* 左侧圆形图标：145x145，左右对齐到进度条左边 */}
      <div className="relative flex h-[145px] w-[145px] flex-shrink-0 items-center justify-center rounded-full bg-[#111] overflow-hidden">
        <Image
          src={item.image}
          alt={item.label}
          fill
          className="object-cover"
        />
      </div>

      {/* 右侧数据条形图：整体高度 134px，垂直居中于圆形 */}
      <div className="flex h-[134px] flex-1 flex-col justify-between pl-6">
        {/* 条形进度条：左侧强调色加一串细条（按设计 PC 高度 82px，单条宽度 6px，无圆角） */}
        <div className="flex items-end gap-[6px] overflow-hidden">
          {/* 左侧粗竖条，与 Figma 中 6px 宽竖线类似 */}
          <div
            className={`h-[134px] w-[6px] bg-gradient-to-b ${item.accent}`}
          />

          <div className="space-y-3">
            <div>
              <div className="text-sm">{item.label}</div>
              <div className="text-[32px] font-semibold tracking-[0.02em]">
                {formatNumber(Math.floor(displayValue), item.value)}
              </div>
            </div>

            <div className="flex flex-1 gap-1 items-end justify-between">
              {Array.from({ length: 100 }).map((_, i) => {
                // 根据动画进度判断是否激活，使用更平滑的过渡
                const isActive = i < progress;

                return (
                  <div
                    key={i}
                    className={`h-[56px] w-[6px] transition-colors duration-150 ease-out ${
                      isActive ? item.barColor : "bg-[#3f3f3f]"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReserveSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* 按 PC 设计尺寸实现，不做自适应 */}
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 py-16">
        {/* 标题与说明 */}
        <div className="flex items-end justify-between gap-8">
          <h2 className="text-[52px] font-semibold leading-tight tracking-[-0.06em]">
            我们的实时储备
          </h2>
          <p className="text-[24px] leading-relaxed text-white/40 font-bold">
            *数据源自金库记录与链上信息的汇总与校验，定期更新。
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-8">
          {reserveItems.map((item, index) => (
            <ReserveItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
