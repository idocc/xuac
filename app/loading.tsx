"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    // 模拟加载进度
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // 更新加载文本
    const textInterval = setInterval(() => {
      if (progress < 30) {
        setLoadingText("Loading resources...");
      } else if (progress < 60) {
        setLoadingText("Preparing experience...");
      } else if (progress < 90) {
        setLoadingText("Almost ready...");
      } else {
        setLoadingText("Welcome!");
      }
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        {/* Logo 动画 */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl font-bold text-white mb-4">
            <span className="text-[#BDEE63]">ALL</span>DAY
          </div>
        </motion.div>

        {/* 进度条容器 */}
        <div className="w-[300px] lg:w-[400px] mx-auto">
          {/* 进度条背景 */}
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-[#BDEE63] to-[#9FCC4F]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* 百分比和加载文本 */}
          <div className="flex justify-between items-center text-sm">
            <motion.span
              className="text-gray-400"
              key={loadingText}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {loadingText}
            </motion.span>
            <span className="text-[#BDEE63] font-bold">{progress}%</span>
          </div>
        </div>

        {/* 装饰性的脉冲圆点 */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#BDEE63] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

