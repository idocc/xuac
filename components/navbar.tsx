"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tokenLogo =
  "https://www.figma.com/api/mcp/asset/a5dffe18-041d-48fe-8113-4982ce68ce0f";

const navItems = [
  { label: "关于我们", href: "/about" },
  { label: "法律与合规", href: "/legal" },
  { label: "媒体资源", href: "/media" },
  { label: "透明度", href: "/transparency" },
  { label: "金币储备报告", href: "/reports" },
  { label: "联系我们", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed top-[50px] z-50 flex w-full justify-center">
      <nav className="pointer-events-auto mx-4 flex w-full max-w-[1168px] flex-col gap-4 rounded-[12px] border border-[#3f3f3f] bg-[#050505] px-4 py-3 text-white shadow-[0_15px_60px_rgba(0,0,0,0.45)] md:flex-row md:items-center md:gap-6">
        <NextLink
          href="/"
          className="flex items-center gap-3 text-[#efbe84]"
          aria-label="XAUC"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-[#151515]">
            <img
              src={tokenLogo}
              alt="XAUC token logo"
              className="h-6 w-6 object-contain"
            />
          </span>
          <span className="font-semibold tracking-wide">XAUC</span>
        </NextLink>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[15px] font-light text-white/80">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={clsx(
                  "transition-colors",
                  isActive ? "text-[#efbe84]" : "hover:text-white"
                )}
              >
                {item.label}
              </NextLink>
            );
          })}
        </div>

        <button
          className="rounded-[12px] bg-[#efbe84] px-5 py-2 text-[16px] font-medium text-[#151515] transition-colors hover:bg-[#f5d6a6]"
          type="button"
        >
          购买XAUC
        </button>
      </nav>
    </header>
  );
};
