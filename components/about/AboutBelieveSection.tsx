"use client";

import Image from "next/image";

const BelieveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
    <path d="M29.873 0L23.8984 6.37288L40.6273 23.3008L47.0001 17.3263L29.873 0Z" fill="#EFBE84"/>
    <path d="M17.3263 0.199097L23.5 6.17367V40.6271L17.3263 46.8008L0 29.2754L6.17373 23.3008L0 16.7288L17.3263 0.199097Z" fill="#EFBE84"/>
    <path d="M47 29.6737L40.6271 23.5L23.5 40.8263L29.6737 46.8008L47 29.6737Z" fill="#EFBE84"/>
    <rect x="11.9492" y="19.9153" width="11.5508" height="6.77119" fill="black"/>
  </svg>
);

export const AboutBelieveSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-white">
      <div className="relative w-full">
        {/* Bottom Pattern Background */}
        <div className="relative mt-auto h-[335px] w-full bg-black overflow-hidden">
          <div className="relative h-full w-full max-w-[1452px] mx-auto">
            <Image
              src="/about/xauc_bg.png"
              alt="Background pattern"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* We Believe Content */}
          <div className="relative -mt-[335px] h-full flex flex-col justify-center items-start px-4 md:pl-[137px]">
            {/* We Believe Section */}
            <div className="flex items-center gap-[12px] mb-8">
              <div className="relative shrink-0 h-[47px] w-[47px]">
                <BelieveIcon />
              </div>
              <div className="relative shrink-0 flex h-[60.47px] items-center justify-center">
                <div className="flex-none rotate-[0.252deg]">
                  <div className="relative font-['IBM_Plex_Mono',sans-serif] text-[34.004px] leading-[55.864px] tracking-[-0.34px] text-[#efbe84] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
                    <p className="leading-[55.864px]">我们相信</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Belief Text */}
            <div className="flex items-center justify-start">
              <div className="flex-none rotate-[0.252deg]">
                <div className="relative whitespace-pre-wrap font-['IBM_Plex_Mono',sans-serif] text-[34.004px] leading-[55.864px] tracking-[-0.34px] text-white" style={{ fontVariationSettings: "'wght' 400" }}>
                  <p className="mb-0">信任不应依赖中介，而应被加密与透明验证</p>
                  <p>XAUC 以合规和技术为底层，让黄金成为数字经济时代的基础资产。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

