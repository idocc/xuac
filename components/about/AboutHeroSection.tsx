"use client";

import Image from "next/image";


export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-white">
      <div className="relative w-full min-h-[1024px]">
        {/* Top Left Black Block */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-black"></div>

        {/* Hero Image and Text Container */}
        <div className="relative w-full min-h-[1024px] flex items-center justify-center">
          <div className="relative h-[1030px] w-full max-w-[1096px] opacity-[0.82]">
            <Image
              src={'/images/about/coin.png'}
              alt=""
              className="h-full w-full object-cover object-center"
              width={1096}
              height={1030}
            />
          </div>

          {/* Hero Text - Centered over image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex w-full max-w-[642px] flex-col items-center px-4">
              <div className="relative w-full shrink-0 whitespace-pre-wrap text-center font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] text-[48px] md:text-[78px] leading-[1.7] tracking-[-0.78px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
                <p className="mb-0">选择XAUC</p>
                <p>选择未来</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Black Block */}
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-black"></div>
      </div>
    </section>
  );
};

