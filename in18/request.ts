import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // 静态导出模式：使用默认语言
  // 注意：在静态导出模式下，实际的语言切换在客户端 layout-client.tsx 中通过 localStorage 实现
  const locale = "zh"; // 默认语言

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
