"use client";

import { Logo } from "./icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import inIcon from "@/assets/footer/in.svg";
import whatsapp from "@/assets/footer/whatsapp.svg";
import x from "@/assets/footer/x.svg";

export const Footer = () => {
  const socialMediaItems = [
    {
      icon: whatsapp,
      alt: "whatsapp",
      href: "/",
      name: "whatsapp"
    },
    {
      icon: x,
      alt: "x",
      href: "/",
      name: "x"
    },
    {
      icon: inIcon,
      alt: "linkedin",
      href: "/",
      name: "linkedin"
    }
  ];

  return (
    <div className="bg-black px-[108px] py-[40px]">
      <div className="flex items-center gap-2">
        <Logo size={60}></Logo>
        <span className="text-[55px] font-bold">全天汇</span>
      </div>
      <div className="space-x-[50px] mt-[50px]">
        {siteConfig.navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="text-[16px] text-[#fff]"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="border-[#333] pb-[30px] border-b w-full">
        <ul className="space-x-[50px] flex mt-[50px] pl-[15px]">
          {socialMediaItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="block">
                <img src={item.icon.src} alt={item.alt} className="w-[23px]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-start text-[#8C8C8E] text-[18px] mt-[48px]">
        <div>
          <div>Disclaimer</div>
          <div>© 2025 OnePort All rights reserved</div>
        </div>
        <div className="w-[616px]">
          All product images and simulations presented are for informational and
          demonstrative purposes only. Not all features may be available to all
          customers.
        </div>
      </div>
      <div className="h-[200px] relative">
        <img
          src="/images/footer_abc.webp"
          className="h-[120px] absolute bottom-[-40px] right-[-108px]"
          alt=""
        />
      </div>
    </div>
  );
};
