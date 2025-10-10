"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloadResourcesProps {
  onLoadComplete?: () => void;
}

export default function PreloadResources({ onLoadComplete }: PreloadResourcesProps) {
 
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  // 关键资源列表
  const criticalResources = [
    "/allbg.mp4",
    "/images/top_img.webp",
    "/images/user_ava.png",
    "/images/music_icon.png",
    "/images/icon1.png",
    "/images/icon2.png",
    "/images/icon3.png",
    "/images/blur/1.png",
    "/images/blur/2.png",
    "/images/blur/3.png",
    "/images/blur/4.png",
    "/images/blur/5.png",
    "/images/blur/6.png",
    "/images/blur/7.png",
    "/images/blur/8.png",
    "/images/global/earth.webp",
    "/images/footer_abc.webp",
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalResources = criticalResources.length;
    let mounted = true;

    // 预加载图片
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // 即使失败也继续
        img.src = src;
      });
    };

    // 预加载视频
    const preloadVideo = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = () => resolve();
        video.onerror = () => resolve(); // 即使失败也继续
        video.src = src;
        video.load();
      });
    };

    // 开始预加载
    const loadResources = async () => {
      for (const resource of criticalResources) {
        if (!mounted) break;

        try {
          if (resource.endsWith(".mp4")) {
            await preloadVideo(resource);
          } else {
            await preloadImage(resource);
          }
        } catch (error) {
          console.warn(`Failed to preload: ${resource}`);
        }

        loadedCount++;
        const currentProgress = Math.round((loadedCount / totalResources) * 100);
        
        if (mounted) {
          setProgress(currentProgress);

          // 更新加载文本
          if (currentProgress < 30) {
            setLoadingText("Loading resources...");
          } else if (currentProgress < 60) {
            setLoadingText("Preparing experience...");
          } else if (currentProgress < 90) {
            setLoadingText("Almost ready...");
          } else {
            setLoadingText("Welcome!");
          }
        }
      }

      // 加载完成后等待一小段时间再消失
      if (mounted) {
        setTimeout(() => {
          if (mounted) {
            setIsComplete(true);
            setTimeout(() => {
              if (mounted) {
                onLoadComplete?.();
              }
            }, 500);
          }
        }, 300);
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center px-4">
            {/* Logo 动画 */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:text-6xl text-4xl font-bold text-white mb-4">
                <span className="text-[#BDEE63]">24</span>exc
              </div>
            </motion.div>

            {/* 进度条容器 */}
            <div className="w-[280px] lg:w-[400px] mx-auto">
              {/* 进度条背景 */}
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#BDEE63] to-[#9FCC4F]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
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
                <span className="text-[#BDEE63] font-bold tabular-nums">
                  {progress}%
                </span>
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

            {/* 加载提示 */}
            <motion.p
              className="text-gray-500 text-xs mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Preparing the best crypto exchange experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

