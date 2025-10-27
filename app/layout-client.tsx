"use client";

import { useState, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import PreloadResources from "@/components/PreloadResources";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [locale, setLocale] = useState("zh");
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // 从 localStorage 读取语言设置，默认为 "zh"
    const storedLang = typeof window !== "undefined" 
      ? localStorage.getItem("lang") || "zh"
      : "zh";
    
    setLocale(storedLang);

    // 动态加载对应语言的消息文件
    import(`../messages/${storedLang}.json`)
      .then((module) => {
        setMessages(module.default);
      })
      .catch(() => {
        // 如果加载失败，回退到中文
        import(`../messages/zh.json`).then((module) => {
          setMessages(module.default);
          setLocale("zh");
        });
      });
  }, []);

  if (!messages) {
    return null; // 或者显示加载状态
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {!isLoaded && <PreloadResources onLoadComplete={() => setIsLoaded(true)} />}
      {children}
    </NextIntlClientProvider>
  );
}

