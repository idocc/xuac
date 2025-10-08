"use client";

import { Logo } from "./icons";
import Link from "next/link";
import inIcon from "@/assets/footer/in.svg";
import whatsapp from "@/assets/footer/whatsapp.svg";
import x from "@/assets/footer/x.svg";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const tNav = useTranslations('Navbar');
  const tFooter = useTranslations('Footer');
  const tHome = useTranslations('HomePage');

  const navItems = [
    {
      label: tNav('home'),
      href: "/",
    },
    {
      label: tNav('products'),
      href: "/product",
    },
    {
      label: tNav('process'),
      href: "/process",
    },
    {
      label: tNav('security'),
      href: "/security",
    },
    {
      label: tNav('global'),
      href: "/global",
    },
    {
      label: tNav('about'),
      href: "/about",
    },
    {
      label: tNav('news'),
      href: "/new",
    },
  ];

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
        <span className="text-[55px] font-bold">{tFooter('brandName')}</span>
      </div>
      <div className="space-x-[50px] mt-[50px]">
        {navItems.map((item) => (
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
          <div>{tFooter('disclaimer')}</div>
          <div>{tFooter('copyright')}</div>
        </div>
        <div className="w-[616px]">
          {tFooter('description')}
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
