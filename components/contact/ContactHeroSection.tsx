"use client";

import Image from "next/image";

export const ContactHeroSection = () => {
  return (
    <section className="relative min-h-[574px] w-full overflow-hidden bg-black">
      {/* Background decorative element */}
      <div className="absolute left-1/2 top-[272px] h-[194px] w-full max-w-[1300px] -translate-x-1/2 overflow-hidden">
        <Image 
          src="/contact/t1.png" 
          alt="" 
          width={1300}
          height={194}
          objectFit="contanier"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] flex flex-col items-center justify-center min-h-[574px] px-4 pt-[120px]">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-0 text-white w-full max-w-[848px]">
          {/* Subtitle */}
          <div className="font-['IBM_Plex_Mono',monospace] text-[24px] h-[39px] leading-[133px] text-center tracking-[-0.24px] mb-0 flex items-center justify-center" style={{ fontVariationSettings: "'wght' 400" }}>
            立即开始
          </div>
          
          {/* Main Title */}
          <div className="font-bold text-[48px] md:text-[68px] h-[85px] leading-[133px] text-center tracking-[-0.68px] mb-0 flex items-center justify-center" style={{ fontVariationSettings: "'wght' 700" }}>
            需要帮助？联系 XAUC 团队
          </div>
        </div>
      </div>
    </section>
  );
};

