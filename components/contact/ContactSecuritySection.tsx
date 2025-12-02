"use client";

import Image from "next/image";
import Link from "next/link";

export const ContactSecuritySection = () => {
  return (
    <section className="relative w-full bg-[#0e0e11] overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1168px] px-4 md:px-[48px] py-[45px]">
        {/* Main content container */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-7 text-white w-full lg:w-auto lg:max-w-[600px]">
            {/* Title */}
            <div className="font-['IBM_Plex_Mono',monospace] text-[32px] leading-[133px] tracking-[-0.32px]" style={{ fontVariationSettings: "'wght' 700" }}>
              安全与合规承诺
            </div>
            
            {/* Description */}
            <div className="font-['IBM_Plex_Mono',monospace] text-[24px] leading-[40px] tracking-[-0.24px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
              XAUC 致力于维持最高等级的储备安全与链上透明度标准。
              <br />
              所有托管均遵循国际黄金监管规范，储备审计与链上证明同步公开。
            </div>

            {/* Additional info */}
            <div className="font-['IBM_Plex_Mono',monospace] text-[12px] leading-[23px] tracking-[-0.12px] whitespace-pre-wrap mt-4" style={{ fontVariationSettings: "'wght' 400" }}>
              <p>合规备案国家与监管机构列表</p>
              <p>最新审计报告链接</p>
              <p>法律咨询邮箱：legal@xauc.io</p>
              <p>透明、可信、可验证的数字黄金标准</p>
            </div>
          </div>

          {/* Right side - Coin image */}
          <div className="relative w-full lg:w-[307px] h-[261px] flex-shrink-0 flex items-center justify-center">
            <div className="w-[131px] h-[261px] relative">
              <img 
                src="https://www.figma.com/api/mcp/asset/6f0b584c-74c1-43e2-8fb8-25ae028d15d5" 
                alt="XAUC coin" 
                className="w-full h-full object-contain block"
              />
            </div>
          </div>
        </div>

        {/* Bottom section with white background */}
        <div className="relative mt-[392px] bg-white h-[247px] w-full max-w-[1168px] -mx-4 md:-mx-[48px] px-[51px] py-[65px] flex flex-col gap-7">
          {/* Title */}
          <div className="font-['IBM_Plex_Mono',monospace] text-[32px] h-[43px] leading-[133px] text-[#0f0f0f] tracking-[-0.32px] flex items-center" style={{ fontVariationSettings: "'wght' 700" }}>
            安全与合规承诺
          </div>
          
          {/* CTA Button */}
          <Link
            href="#"
            className="bg-black border border-white rounded-[12px] px-4 py-[10px] w-fit flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <span className="font-['Outfit',sans-serif] text-[16px] text-white leading-[24px]">
              购买XAUC
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

