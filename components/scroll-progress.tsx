"use client";

import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 获取页面总高度和当前滚动位置
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      
      // 计算滚动百分比
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", handleScroll);
    
    // 初始化时计算一次
    handleScroll();

    // 清理事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-[72px] transition-all duration-100 ease-out pointer-events-none"
      style={{
        width: `${scrollProgress}%`,
        backgroundColor: "#fff",
        mixBlendMode: "difference",
      }}
    />
  );
};


