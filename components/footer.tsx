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
      href: "https://www.whatsapp.com",
      name: "whatsapp"
    },
    {
      icon: x,
      alt: "x",
      href: "https://x.com",
      name: "x"
    },
    {
      icon: inIcon,
      alt: "ins",
      href: "https://www.instagram.com",
      name: "instagram"
    }
  ];

  return (
    <div className="bg-black lg:px-[108px] px-[12px] lg:py-[40px] py-[30px]">
      <div className="flex items-center gap-2">
        <Logo size={40}></Logo>
        <span className="lg:text-[55px] text-[36px] font-bold">{tFooter('brandName')}</span>
      </div>
      <div className="lg:space-x-[50px] lg:mt-[50px] mt-[10px] space-y-[20px]">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="text-[16px] text-[#fff] block lg:inline-block"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="border-[#333] pb-[30px] lg:mt-[50px] mt-[30px] border-b w-full">
        <ul className="lg:space-x-[50px] space-x-[20px] flex lg:pl-[15px]">
          {socialMediaItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                <img src={item.icon.src} alt={item.alt} className="w-[23px]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:flex justify-between items-start text-[#8C8C8E] text-[18px] mt-[48px]">
        <div>
          <div>{tFooter('disclaimer')}</div>
          <div>{tFooter('copyright')}</div>
        </div>
        <div className="lg:w-[616px]">
          {tFooter('description')}
        </div>
      </div>
      <div className="h-[200px]  relative lg:block hidden">
        <img
          src="/images/footer_abc.webp"
          className="h-[120px] absolute bottom-[-40px] right-[-108px]"
          alt=""
        />
      </div>
    </div>
  );
};
