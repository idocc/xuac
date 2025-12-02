"use client";

export const AboutProductsSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1300px] px-4">
        {/* Section Header */}
        <div className="flex items-center gap-[50px] mb-16">
          <div className="relative shrink-0 font-['IBM_Plex_Mono',sans-serif] not-italic text-[98px] leading-[165.862px] tracking-[-0.98px] text-black text-center whitespace-nowrap">
            <p className="leading-[165.862px]">01</p>
          </div>
          <div className="h-[4px] w-[1120px] shrink-0 bg-black"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pl-[200px]">
          {/* Title */}
          <div className="flex flex-col font-bold justify-center whitespace-nowrap font-['IBM_Plex_Mono',sans-serif] text-[57.86px] leading-[95px] tracking-[-0.5786px] text-black" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="mb-0">核心产品</p>
            <p>与系统</p>
          </div>

          {/* Products List */}
          <div className="flex flex-1 flex-col gap-[83px]">
            {/* XAUC Token */}
            <div className="relative w-full shrink-0 flex flex-col items-start gap-[20px]">
              <div className="relative flex h-[45px] w-[596px] items-center gap-[24px] shrink-0">
                <div className="relative shrink-0 font-['IBM_Plex_Mono',sans-serif] not-italic text-[40px] leading-[45px] text-black text-center whitespace-nowrap">
                  <p className="leading-[45px] font-bold">XAUC Token</p>
                </div>
              </div>
              <div className="relative w-full shrink-0 font-['IBM_Plex_Mono',sans-serif] h-[69px] justify-center text-[16px] leading-[27px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
                <p className="leading-[27px]">基于完善的实物黄金托管体系运作，所有黄金均由具备资质的专业机构负责采购、检验与存储。黄金被保管在高安全级别的金库中，并定期接受第三方审计，确保每枚代币都对应真实可验证的黄金资产，为用户提供稳健、安全的价值支撑。</p>
              </div>
            </div>

            {/* Global Regulatory Framework */}
            <div className="relative w-full shrink-0 flex flex-col items-start gap-[20px]">
              <div className="relative flex items-center gap-[24px] shrink-0">
                <div className="relative shrink-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-[0]">
                  <div className="col-[1] row-[1] relative ml-[120px] mt-[13.5px] translate-x-[-50%] translate-y-[-50%] font-['IBM_Plex_Mono',sans-serif] text-[40px] leading-[27px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                    <p className="leading-[27px] font-bold">全球监管框架</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full shrink-0 font-['IBM_Plex_Mono',sans-serif] h-[69px] justify-center text-[16px] leading-[27px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
                <p className="leading-[27px]">XAUC Token 在全球化监管框架下运行，严格遵循不同司法辖区的金融与数字资产监管要求。通过合规架构的搭建与持续更新，确保发行、流通与托管流程透明可靠，使产品在国际环境中具备合法性、安全性与可信度。</p>
              </div>
            </div>

            {/* Real-time Reserve Verification */}
            <div className="relative w-full shrink-0 flex flex-col items-start gap-[20px]">
              <div className="relative flex items-center gap-[24px] shrink-0">
                <div className="relative shrink-0 font-['IBM_Plex_Mono',sans-serif] text-[40px] leading-[45px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
                  <p className="leading-[45px] font-bold">储备实时验证</p>
                </div>
              </div>
              <div className="relative w-full shrink-0 font-['IBM_Plex_Mono',sans-serif] h-[69px] justify-center text-[16px] leading-[27px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
                <p className="leading-[27px]">XAUC Token 提供储备实时验证机制，用户可随时查阅黄金储备的数量、位置与审计报告。所有数据以透明方式公开，确保代币流通量与黄金储备量精确对应，让每位持有人都能清晰了解资产背书情况，增强信任与安全感。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

