"use client";

import Image from "next/image";


export const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-black">
      <div className="relative w-full min-h-[1024px]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/about/bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Top Left White Block */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-black z-20"></div>

        {/* Gold Coins Overlay */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
          <div className="relative h-[600px] w-full max-w-[800px] opacity-90">
            <Image
              src="/about/coin.png"
              alt="Gold Coins"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
          </div>

        {/* Hero Text - Centered over everything */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="flex w-full max-w-[642px] flex-col items-center px-4">
            <div className="relative w-full shrink-0 whitespace-pre-wrap text-center font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] text-[48px] md:text-[78px] leading-[1.7] tracking-[-0.78px] text-white drop-shadow-2xl font-bold" style={{ fontVariationSettings: "'wght' 800" }}>
                <p className="mb-0">选择XAUC</p>
                <p>选择未来</p>
            </div>
          </div>
        </div>

        {/* Bottom Right White Block */}
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-black z-20"></div>
      </div>
    </section>
  );
};

