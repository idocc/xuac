"use client";

import Image from "next/image";

export const TransparencyHeroSection = () => {
  return (
    <section className="relative min-h-[574px] w-full overflow-hidden bg-black">
        <div className="relative mx-auto w-full max-w-[1440px] min-h-[574px] flex items-center">
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[148px] pb-16 pt-40">
          {/* Hero Title */}
          <div className="flex flex-col gap-5 mb-8 md:mb-0">
            <div className="font-bold font-['IBM_Plex_Mono',monospace] text-[48px] md:text-[68px] leading-[1.16] tracking-[-0.68px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
              透明度
            </div>
          </div>

          {/* Background Graphics */}
          <div className="relative w-full md:w-[506px] h-[340px] flex-shrink-0">
            <Image
              src="/toumingdu/t1.png"
              alt=""
              className="h-full w-full object-cover object-center pointer-events-none"
              width={766}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

