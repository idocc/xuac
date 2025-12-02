"use client";

const iconPerson = "https://www.figma.com/api/mcp/asset/6f24ea4a-edb5-4e6f-8bd6-270d1b4325b0";
const iconFinance = "https://www.figma.com/api/mcp/asset/0fe47016-b6f3-414e-9677-c41cc1d69bed";
const iconDefi = "https://www.figma.com/api/mcp/asset/56ff6f68-bf9c-4da7-953d-48b97e5a93ac";
const iconInnovation = "https://www.figma.com/api/mcp/asset/e8dcfdc1-d725-4320-a4b9-20b9b7fe5e9e";

export const AboutScenariosSection = () => {
  return (
    <section className="relative min-h-[1024px] w-full overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1300px] px-4">
        {/* Section Header */}
        <div className="flex items-center gap-[50px] mb-16">
          <div className="relative shrink-0 font-['IBM_Plex_Mono',sans-serif] not-italic text-[98px] leading-[165.862px] tracking-[-0.98px] text-black text-center whitespace-nowrap">
            <p className="leading-[165.862px]">02</p>
          </div>
          <div className="h-[4px] w-full max-w-[928px] shrink-0 bg-black"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pl-[200px]">
          {/* Title */}
          <div className="flex flex-col justify-center whitespace-nowrap font-['IBM_Plex_Mono',sans-serif] text-[57.86px] leading-[95px] tracking-[-0.5786px] text-black" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[95px] font-bold">适用场景</p>
          </div>

          {/* Scenarios Grid */}
          <div className="flex flex-1 flex-col items-start gap-[111px]">
            {/* Row 1 */}
            <div className="relative w-full shrink-0 flex items-center gap-[16px]">
              {/* Personal & Institutions */}
              <div className="relative w-[346px] shrink-0 flex flex-col items-start gap-[20px]">
                <div className="relative h-[58.5px] w-[62.769px] shrink-0 overflow-hidden">
                  <img
                    src={iconPerson}
                    alt=""
                    className="block left-0 top-[-11.97%] h-[116.24%] w-full max-w-none"
                  />
                </div>
                <div className="relative shrink-0 font-['Wix_Madefor_Display',sans-serif] font-bold text-[32px] leading-[45px] text-black text-center whitespace-nowrap">
                  <p className="leading-[45px]">个人与机构</p>
                </div>
                <div className="relative w-[248px] shrink-0 font-['Wix_Madefor_Display',sans-serif] font-normal text-[24px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="mb-0 leading-[45px]">抗通胀配置、</p>
                  <p className="leading-[45px]">财富储备、价值存储</p>
                </div>
              </div>

              {/* Financial & Crypto Institutions */}
              <div className="relative w-[346px] shrink-0 flex flex-col items-start gap-[20px]">
                <div className="relative h-[68px] w-[69.478px] shrink-0">
                  <img
                    src={iconFinance}
                    alt=""
                    className="block h-full w-full max-w-none object-cover object-[50%_50%] pointer-events-none"
                  />
                </div>
                <div className="relative min-w-full shrink-0 w-[min-content] font-['Wix_Madefor_Display',sans-serif] font-bold text-[32px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="leading-[45px]">金融与加密机构</p>
                </div>
                <div className="relative w-[248px] shrink-0 font-['Wix_Madefor_Display',sans-serif] font-normal text-[24px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="leading-[45px]">跨境结算、钱包与交易所资产管理</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative w-full shrink-0 flex items-center gap-[16px]">
              {/* DeFi Applications */}
              <div className="relative w-[346px] shrink-0 flex flex-col items-start gap-[20px]">
                <div className="relative h-[63.5px] w-[65.106px] shrink-0 overflow-hidden">
                  <img
                    src={iconDefi}
                    alt=""
                    className="block left-0 top-[-2.36%] h-[107.09%] w-full max-w-none"
                  />
                </div>
                <div className="relative min-w-full shrink-0 w-[min-content] font-['Wix_Madefor_Display',sans-serif] font-bold text-[32px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="leading-[45px]">DeFi 应用</p>
                </div>
                <div className="relative w-[248px] shrink-0 font-['Wix_Madefor_Display',sans-serif] font-normal text-[24px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="leading-[45px]">抵押、借贷、收益与衍生品基础资产</p>
                </div>
              </div>

              {/* Financial Innovation */}
              <div className="relative w-[346px] shrink-0 flex flex-col items-start gap-[20px]">
                <div className="relative h-[68px] w-[63px] shrink-0">
                  <img
                    src={iconInnovation}
                    alt=""
                    className="block h-full w-full max-w-none object-cover object-[50%_50%] pointer-events-none"
                  />
                </div>
                <div className="relative min-w-full shrink-0 w-[min-content] font-['Wix_Madefor_Display',sans-serif] font-bold text-[32px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="leading-[45px]">金融创新</p>
                </div>
                <div className="relative w-[248px] shrink-0 font-['Wix_Madefor_Display',sans-serif] font-normal text-[24px] leading-[45px] text-black whitespace-pre-wrap">
                  <p className="leading-[45px]">让黄金参与智能合约与可编程支付</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

