"use client";

const binaryPattern =
  "https://www.figma.com/api/mcp/asset/7a6e368d-b112-4b5a-a098-922e67332989";

export const AboutStatsSection = () => {
  return (
    <section className="relative min-h-[418px] w-full overflow-hidden bg-[#e2e2e2]">
      {/* Top Black Section with Pattern */}
      <div className="relative h-[418px] w-full bg-black overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="relative w-full h-full mix-blend-difference opacity-20 overflow-hidden">
            <img
              src={binaryPattern}
              alt=""
              className="block left-[-1.81%] top-[-109.31%] h-[223.72%] w-[102.36%] max-w-none"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="relative flex items-center justify-center h-full px-4 md:pl-[120px] gap-[78px] z-10">
          <div className="flex flex-col items-start gap-[16px] pb-[16px]">
            <div className="flex items-end gap-[8px] text-[#efbe84]">
              <div className="font-['IBM_Plex_Mono',sans-serif] text-[68px] font-bold flex ">
                10+
              </div>
              <div
                className="font-['IBM_Plex_Mono',sans-serif] text-[16px] leading-[29px] tracking-[-0.16px]"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                年
              </div>
            </div>
            <div
              className="font-['IBM_Plex_Mono',sans-serif] text-[16px] leading-[29px] tracking-[-0.16px] text-[#d1d1d1]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              链上资产合规与黄金托管经验
            </div>
          </div>

          {/* 100+ Partners */}
          <div className="flex flex-col items-start gap-[16px] pb-[16px]">
            <div className="flex items-end gap-[10px] text-[#efbe84]">
              <div className="font-['IBM_Plex_Mono',sans-serif] text-[68px] font-bold flex ">
                100+
              </div>
              <div
                className="font-['IBM_Plex_Mono',sans-serif] text-[16px] leading-[29px] tracking-[-0.16px]"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                合作机构
              </div>
            </div>
            <div
              className="font-['IBM_Plex_Mono',sans-serif] text-[16px] leading-[29px] tracking-[-0.16px] text-[#d1d1d1]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              全球钱包、交易所与机构共同参与
            </div>
          </div>

          {/* 6+ Regions */}
          <div className="flex flex-col items-start gap-[16px] pb-[16px]">
            <div className="flex items-end gap-[10px] text-[#efbe84]">
              <div className="font-['IBM_Plex_Mono',sans-serif] text-[68px] font-bold flex ">
                6+
              </div>
              <div
                className="font-['IBM_Plex_Mono',sans-serif] text-[16px] leading-[29px] tracking-[-0.16px]"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                托管地区
              </div>
            </div>
            <div
              className="font-['IBM_Plex_Mono',sans-serif] text-[16px] leading-[29px] tracking-[-0.16px] text-[#d1d1d1]"
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              分布式黄金储备网络
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
