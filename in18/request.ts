import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // 尝试从 cookie 获取语言设置，如果没有则使用默认语言 'en'
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale');
  const locale = localeCookie?.value || "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
