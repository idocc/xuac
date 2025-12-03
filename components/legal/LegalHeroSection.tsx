"use client";

import Image from "next/image";

export const LegalHeroSection = () => {
  return (
    <section className="relative min-h-[581px] w-full overflow-hidden bg-black">
      <div className="relative mx-auto w-full max-w-[1440px] min-h-[581px] flex items-center">
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[136px] pb-16 pt-[246px]">
          {/* Hero Title */}
          <div className="flex flex-col gap-5 mb-8 md:mb-0 w-full md:w-[450px]">
            <div className="font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.68px] text-white" style={{ fontVariationSettings: "'wght' 800" }}>
              法律与合规文件
            </div>
          </div>

          {/* Background Graphics */}
          <div className="relative w-full md:w-[531px] h-[230px] flex-shrink-0">
            <Image
              src="/falv/t1.png"
              alt="Legal Documents"
              className="h-full w-full object-contain object-center"
              width={531}
              height={230}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

