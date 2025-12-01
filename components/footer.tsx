"use client";

import { Logo } from "./icons";
import Link from "next/link";
import telegram from "@/assets/footer/tgLogo.png";
import x from "@/assets/footer/xLogo.png";
import discord from "@/assets/footer/DiscordLogo.png";
import reddit from "@/assets/footer/RedditLogo.png";
import instagram from "@/assets/footer/InstagramLogo.png";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const tFooter = useTranslations('Footer');

  const navItems = [
    {
      id: 'aboutUs',
      label: tFooter('aboutUs'),
      href: "#",
    },
    {
      id: 'legalCompliance',
      label: tFooter('legalCompliance'),
      href: "#",
    },
    {
      id: 'mediaKit',
      label: tFooter('mediaKit'),
      href: "#",
    },
    {
      id: 'transparency',
      label: tFooter('transparency'),
      href: "#",
    },
    {
      id: 'goldReserveReport',
      label: tFooter('goldReserveReport'),
      href: "#",
    },
  ];

  const socialMediaItems = [
    {
      icon: telegram,
      alt: "telegram",
      href: "https://t.me",
      name: "telegram",
      size: 39
    },
    {
      icon: x,
      alt: "x",
      href: "https://x.com",
      name: "x",
      size: 39
    },
    {
      icon: discord,
      alt: "discord",
      href: "https://discord.com",
      name: "discord",
      size: 44
    },
    {
      icon: reddit,
      alt: "reddit",
      href: "https://reddit.com",
      name: "reddit",
      size: 44
    },
    {
      icon: instagram,
      alt: "instagram",
      href: "https://www.instagram.com",
      name: "instagram",
      size: 44
    }
  ];

  return (
    <div className="bg-[#0e0e11] px-[12px] lg:px-[108px] py-[40px] lg:py-[80px] flex flex-col gap-[40px] lg:gap-[80px] items-center w-full">
      {/* Top Section: Logo and Navigation */}
      <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between w-full gap-[40px] lg:gap-0">
        {/* Logo Section */}
        <div className="flex gap-[24px] items-center h-auto lg:h-[80px]">
          <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] shrink-0 flex items-center justify-center">
            <Logo size={56} className="lg:w-[72px] lg:h-[72px] w-[56px] h-[56px]" />
          </div>
          <p className="font-['IBM_Plex_Mono',sans-serif] font-bold leading-[40px] lg:leading-[56px] text-[#efbe84] text-[28px] lg:text-[36px] tracking-[-0.36px]">
            {tFooter('brandName')}
          </p>
        </div>

        {/* Navigation and Social Media Section */}
        <div className="flex flex-col gap-[32px] lg:gap-[48px] items-start lg:items-end w-full lg:w-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-[20px] lg:gap-[54px] h-auto lg:h-[76px] items-center justify-start lg:justify-end w-full lg:w-auto">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white text-[18px] lg:text-[24px] leading-none tracking-[-0.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-[24px] lg:gap-[48px] items-start justify-start lg:justify-end w-full lg:w-auto">
            <div className="flex gap-[32px] lg:gap-[69px] items-start">
              {socialMediaItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity shrink-0"
                >
                  <img
                    src={item.icon.src}
                    alt={item.alt}
                    width={item.size}
                    height={item.size}
                    className="block object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Disclaimer and Copyright */}
      <div className="border-t border-[#333333] pt-[32px] lg:pt-[48px] pb-0 px-0 flex flex-col lg:flex-row items-start lg:items-end justify-between w-full gap-[24px] lg:gap-0">
        <div className="flex flex-col gap-[8px] items-start">
          <p className="text-[#8c8c8e] text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px]">
            {tFooter('disclaimer')}
          </p>
        </div>
        <div className="text-center lg:text-right flex flex-wrap gap-[10px] items-center justify-start lg:justify-center w-full lg:w-auto">
          <p className="text-[#8c8c8e] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] text-left lg:text-right w-full lg:w-[616px] whitespace-pre-wrap">
            {tFooter('copyright')}
          </p>
        </div>
      </div>
    </div>
  );
};
