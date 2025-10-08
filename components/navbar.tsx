"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Logo, ArrowRightIcon } from "@/components/icons";

// 自定义语言切换开关组件
const LanguageSwitch = () => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(false);

  // 读取当前语言设置
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const localeCookie = cookies.find((row) => row.startsWith("locale="));
    const currentLocale = localeCookie ? localeCookie.split("=")[1] : "zh";
    setIsEnglish(currentLocale === "en");
  }, []);

  const changeLanguage = (locale: string) => {
    // 保存到 cookie
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
    setIsEnglish(locale === "en");
    // 刷新页面以应用新语言
    router.refresh();
  };

  return (
    <div className="relative inline-flex items-center">
      <div
        className="relative w-[92px] h-[48px] text-[16px] rounded-full cursor-pointer transition-all duration-300 ease-in-out"
        style={{ backgroundColor: "#FFFFFF1F" }}
        onClick={() => changeLanguage(isEnglish ? "zh" : "en")}
      >
        {/* 背景标签 */}
        <span
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 font-medium transition-all duration-300 z-10 ${
            !isEnglish ? "text-white/60" : "text-white/90"
          }`}
        >
          CN
        </span>

        <span
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 z-10 ${
            isEnglish ? "text-white/60" : "text-white/90"
          }`}
        >
          EN
        </span>

        {/* 滑动按钮 */}
        <div
          className={`absolute top-[4px] w-[40px] h-[40px] bg-gradient-to-br from-white to-gray-100 z-[11] rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${
            isEnglish ? "translate-x-[48px]" : "translate-x-[4px]"
          }`}
        >
          <span className=" text-gray-700 leading-none font-semibold">
            {isEnglish ? "EN" : "CN"}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const pathname = usePathname();
  const tHome = useTranslations("HomePage");
  const tNav = useTranslations("Navbar");

  // 导航项配置
  const navItems = [
    {
      label: tNav("home"),
      href: "/",
    },
    {
      label: tNav("products"),
      href: "/product",
    },
    {
      label: tNav("process"),
      href: "/process",
    },
    {
      label: tNav("security"),
      href: "/security",
    },
    {
      label: tNav("global"),
      href: "/global",
    },
    {
      label: tNav("about"),
      href: "/about",
    },
    {
      label: tNav("news"),
      href: "/new",
    },
  ];

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      height="72px"
      className="bg-black backdrop-blur-2xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo size={20} />
            <p className="font-bold text-[#fff]">{tHome("hero.title")}</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "text-[16px] text-[#fff] transition-all duration-200",
                    isActive && "font-bold"
                  )}
                  href={item.href}
                >
                  <span  className="font-sora">{item.label}</span>
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="end">
        <LanguageSwitch />
        <div
          className="text-white w-[190px] justify-center ml-[10px] text-[16px] font-bold px-[18px] py-[10px] flex items-center gap-2 cursor-pointer"
          style={{
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.40)",
          }}
        >
          <span>{tHome("hero.exchangeNow")}</span>
          <ArrowRightIcon />
        </div>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle className="text-[#fff]" />
      </NavbarContent>

      <NavbarMenu className="bg-black">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarMenuItem
                key={`${item.href}-${index}`}
                className="text-center"
              >
                <NextLink
                  href={item.href}
                  className={clsx(
                    "text-[#fff] text-[16px] transition-all duration-200",
                    isActive && "font-bold"
                  )}
                >
                  <span>{item.label}</span>
                </NextLink>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
