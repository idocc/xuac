"use client";

const believeIcon = "https://www.figma.com/api/mcp/asset/a490c461-ff88-4d47-8d89-360869df0ba2";
const bottomPattern = "https://www.figma.com/api/mcp/asset/ca50eead-cca4-444e-aa05-bca0f246e06c";

export const AboutBelieveSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-white">
      <div className="relative w-full">
        {/* Bottom Pattern Background */}
        <div className="relative mt-auto h-[335px] w-full bg-black overflow-hidden">
          <div className="relative h-full w-full max-w-[1452px] mx-auto">
            <img
              src={bottomPattern}
              alt=""
              className="block h-full w-full max-w-none"
            />
          </div>

          {/* We Believe Content */}
          <div className="relative -mt-[335px] h-full flex flex-col justify-center items-start px-4 md:pl-[137px]">
            {/* We Believe Section */}
            <div className="flex items-center gap-[12px] mb-8">
              <div className="relative shrink-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-[0]">
                <div className="col-[1] row-[1] relative ml-0 mt-0 h-[46.801px] w-[47px]">
                  <img
                    src={believeIcon}
                    alt=""
                    className="block h-full w-full max-w-none"
                  />
                </div>
                <div className="col-[1] row-[1] ml-[11.95px] mt-[19.92px] h-[6.771px] w-[11.551px] bg-black"></div>
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

