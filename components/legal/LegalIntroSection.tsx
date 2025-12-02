"use client";

import Image from "next/image";

export const LegalIntroSection = () => {
  return (
    <section className="relative w-full bg-[#f0f1f5] py-[49px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[139px]">
        <div className="flex flex-col md:flex-row items-center gap-[58px]">
          {/* Left decorative quote marks */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[77.793px] h-[158.397px]">
              <Image
                src="/falv/t2.png"
                alt=""
                className="h-full w-full object-contain object-center"
                width={78}
                height={158}
              />
            </div>
          </div>

          {/* Center text */}
          <div className="flex-1">
            <p className="font-['IBM_Plex_Mono',monospace] text-[24px] md:text-[32px] leading-[50px] tracking-[-0.32px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
              这里汇总了与 XAUC 相关的主要法律文件与合规政策。
              <br />
              在使用 XAUC 产品与服务前，请阅读并理解相应条款。
            </p>
          </div>

          {/* Right decorative square */}
          <div className="flex-shrink-0">
            <div className="w-[77.793px] h-[78.105px] bg-black rotate-180"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

