"use client";

import Image from "next/image";

const believeIcon =
  "https://www.figma.com/api/mcp/asset/a490c461-ff88-4d47-8d89-360869df0ba2";
const bottomPattern =
  "https://www.figma.com/api/mcp/asset/ca50eead-cca4-444e-aa05-bca0f246e06c";

export const AboutIntroSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1300px] px-4">
        {/* Introduction Text */}
        <div
          className="mb-16 flex flex-col justify-center whitespace-pre-wrap font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] text-[20px] md:text-[28px] leading-[1.64] tracking-[-0.28px] text-[rgba(0,0,0,0.45)]"
          style={{ fontVariationSettings: "'wght' 400" }}
        >
          <p>
            <span className="text-black">
              在
              XAUC，我们让黄金重新焕发生命力。它不再只是储存在金库中的金属，而是一种可验证、可编程、可自由流动的全球价值单位。
            </span>
            XAUC将传统黄金的稳定性，与区块链的速度和透明度相结合，让任何人——无论是个人投资者、金融机构，还是去中心化生态——都能在链上安全地持有、转账与结算真实黄金。
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-black">
          <div className="relative shrink-0 font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] h-[55px] w-[171px] flex items-center justify-start not-italic text-[24px] md:text-[32px] tracking-[-0.32px]">
            <p>01</p>
          </div>
          <div
            className="relative shrink-0 font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] flex-1 justify-center text-[40px] md:text-[64px] tracking-[-0.64px]"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            <p>我们的使命</p>
          </div>
          <div
            className="relative shrink-0 font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] flex-1 justify-center text-[16px] leading-[34px] tracking-[-0.16px]"
            style={{ fontVariationSettings: "'wght' 400" }}
          >
            <p>
              让每个人都能便捷、透明、合规地在链上持有并使用真实黄金，把黄金的稳健，与区块链的速度与可组合性结合起来。
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-black">
          <div className="relative shrink-0 font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] h-[55px] w-[171px] flex items-center justify-start not-italic text-[24px] md:text-[32px] tracking-[-0.32px]">
            <p>02</p>
          </div>
          <div
            className="relative shrink-0 font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] flex-1 justify-center text-[40px] md:text-[64px] tracking-[-0.64px]"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            <p>我们做什么</p>
          </div>
          <div
            className="relative shrink-0 font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] flex-1 justify-center text-[16px] leading-[34px] tracking-[-0.16px]"
            style={{ fontVariationSettings: "'wght' 400" }}
          >
            <p>
              XAUC 是以实物黄金全额储备、按伦敦金价 1:1
              锚定的合规型稳定资产。每一枚 XAUC
              背后，都有等值黄金托管在受监管金库中，持有人可通过合规渠道兑回黄金或法币。
            </p>
          </div>
        </div>
      </div>

      {/* We Believe Section with Background */}
      <div className="relative mt-20 w-full flex justify-start items-center overflow-hidden min-h-[335px] bg-black">
        <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <img
            src={bottomPattern}
            alt=""
            className="block h-full w-full max-w-none"
          />
        </div>

        {/* We Believe Content */}
        <div className="relative z-20 mx-auto w-full max-w-[1300px] px-4 py-12">
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
                <div
                  className="relative font-['IBM_Plex_Mono',sans-serif] text-[34.004px] leading-[55.864px] tracking-[-0.34px] text-[#efbe84] whitespace-pre-wrap"
                  style={{ fontVariationSettings: "'wght' 400" }}
                >
                  <p className="leading-[55.864px]">我们相信</p>
                </div>
              </div>
            </div>
          </div>

          {/* Belief Text */}
          <div className="flex items-center justify-start">
            <div className="flex-none rotate-[0.252deg]">
              <div
                className="relative whitespace-pre-wrap font-['IBM_Plex_Mono',sans-serif] text-[34.004px] leading-[55.864px] tracking-[-0.34px] text-white"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                <p className="mb-0">信任不应依赖中介，而应被加密与透明验证</p>
                <p>
                  XAUC 以合规和技术为底层，让黄金成为数字经济时代的基础资产。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
