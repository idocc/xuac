"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloadResourcesProps {
  onLoadComplete?: () => void;
}

export default function PreloadResources({ onLoadComplete }: PreloadResourcesProps) {
 
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const headline = "XAUC · On-chain Gold,\nRedeemable & Compliant...";
  const totalBars = 90;

  // 关键资源列表 - 按优先级排序
  const criticalResources = [
    // 首页关键图片
    "/images/home/bg.png",
    "/images/hero/out.png",
    "/images/hero/coin.png",
    "/images/home/gold.png",
    "/images/home/1.png",
    "/images/home/2.png",
    "/images/home/3.png",
    "/images/query/gold-bars.png",
    "/images/security/main-logo.png",
    
    // 关于页
    "/about/bg.png",
    "/about/coin.png",
    "/images/about/bottom_1.png",
    "/images/about/bottom_2.png",
    "/images/about/bottom_3.png",
    "/images/about/bottom_4.png",
    
    // 联系页
    "/contact/t1.png",
    "/contact/arrow.png",
    "/contact/coin.png",
    
    // 透明度页
    "/toumingdu/t1.png",
    "/toumingdu/t3.png",
    "/images/transparency/image245.png",
    
    // 法律页
    "/falv/t1.png",
    "/falv/t2.png",
    
    // 报告页
    "/report/1.png",
    "/report/2.png",
    "/report/3.png",
    "/report/t1.png",
    "/report/t2.png",
    
    // 媒体页
    "/meida/t1.png",
    "/meida/black_xauc.png",
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

  const highlightedBars = useMemo(() => {
    return Math.round((progress / 100) * totalBars);
  }, [progress, totalBars]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full w-full px-6 py-10 text-[#efbe84]">
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-full max-w-[1200px]">
                <div className="mb-10 flex flex-wrap gap-[6px]">
                  {Array.from({ length: totalBars }).map((_, index) => {
                    const isActive = index < highlightedBars;
                    return (
                      <span
                        key={index}
                        className="h-[82px] w-[6px] rounded-[1px] transition-colors duration-200"
                        style={{
                          backgroundColor: isActive ? "#efbe84" : "#2d2d2d",
                        }}
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4 text-left font-[IBM_Plex_Mono,sans-serif] text-[28px] leading-[1.4] tracking-wide md:flex-row md:items-center md:justify-between md:text-[52px]">
                  <div className="flex-1 whitespace-pre-line">{headline}</div>
                  <div className="text-right text-[32px] font-semibold tabular-nums md:text-[52px]">
                    {progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

