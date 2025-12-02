"use client";

import Image from "next/image";

// Image paths
const IMAGES = {
  reserve: "/images/about/bottom_1.png",
  transparency: "/images/about/bottom_2.png",
  compliance: "/images/about/bottom_3.png",
  logo: "/images/about/bottom_4.png",
} as const;

// Constants
const ICON_SIZES = {
  reserve: 70,
  transparency: 64,
  compliance: 74,
} as const;

// Common styles
const cardBaseStyles =
  "relative shrink-0 p-[24px] flex flex-col items-start gap-[10px]";
const contentBaseStyles =
  "relative w-full shrink-0 flex flex-col items-start gap-[42px]";
const textBaseStyles =
  "relative w-full shrink-0 font-['Wix_Madefor_Display',sans-serif] font-normal text-[19.2px] leading-[27px] whitespace-pre-wrap";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconSize: number;
  titleStyle: string;
  cardStyle: string;
  textColor: string;
  iconWrapperClassName?: string;
  withBlend?: boolean;
}

const FeatureCard = ({
  title,
  description,
  iconSrc,
  iconSize,
  titleStyle,
  cardStyle,
  textColor,
  iconWrapperClassName,
}: FeatureCardProps) => (
  <div className={`${cardBaseStyles} ${cardStyle}`}>
    <div className={contentBaseStyles}>
      <div className={`${textBaseStyles} ${textColor}`}>
        <p className="leading-[27px]">{description}</p>
      </div>
      <div className="relative w-full shrink-0 flex items-center justify-between">
        <p className={titleStyle}>{title}</p>
        <div
          className={`relative shrink-0 ${iconWrapperClassName || `size-[${iconSize}px]`}`}
        >
          <Image
            src={iconSrc}
            alt=""
            width={iconSize}
            height={iconSize}
            className=""
          />
        </div>
      </div>
    </div>
  </div>
);

export const AboutReserveSection = () => {
  return (
    <section className="relative w-full flex justify-center items-center h-[1024px] overflow-hidden bg-[#e2e2e2]">
      <div className="flex w-[1162px] flex-col items-start gap-[24px]">
        {/* Top Row */}
        <div className="relative w-full shrink-0 flex items-center gap-[20px]">
          {/* Real Reserves Card */}
          <FeatureCard
            title="真实储备"
            description={`每一枚 XAUC 背后，都有等值实物黄金存放在受监管金库中，且与发行量一一对应、单独托管。\n 储备定期接受第三方审计与盘点，避免重复质押或挪用，让用户清楚知道：自己在链上持有的，不只是一个代币，而是一份确切存在的黄金所有权。`}
            iconSrc={IMAGES.reserve}
            iconSize={ICON_SIZES.reserve}
            titleStyle="text-[32px] font-bold text-[#c2c2c2]"
            cardStyle="w-[573px] bg-black"
            textColor="text-[#c2c2c2]"
            iconWrapperClassName="size-[70px]"
            withBlend
          />

          {/* Public Transparency Card */}
          <FeatureCard
            title="公开透明"
            description="XAUC 的储备、流通与兑回情况，都会通过链上数据与 Proof Dashboard 向外公开。用户可以实时查看总发行量、金库储备、主要地址分布等关键指标，也可通过开放接口做独立核查。不靠宣传来建立信任，而是靠数据与可验证性，让透明本身成为一种承诺。"
            iconSrc={IMAGES.transparency}
            iconSize={ICON_SIZES.transparency}
            titleStyle="text-[32px] text-[#999] font-bold"
            cardStyle="w-[569px] bg-white"
            textColor="text-black"
            iconWrapperClassName="size-[64px]"
          />
        </div>

        {/* Bottom Row */}
        <div className="relative w-full shrink-0 flex items-start gap-[20px]">
          {/* Compliant & Redeemable Card */}
          <div
            className={`${cardBaseStyles} w-[573px] h-[317px]`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(239, 190, 132, 1) 0%, rgba(239, 190, 132, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)",
            }}
          >
            <div className="relative flex-1 flex flex-col items-start gap-[42px] min-h-0 min-w-0 w-full">
              <div className={`${textBaseStyles} text-black`}>
                <p className="leading-[27px]">
                  XAUC
                  严格遵守所在司法辖区的监管要求，通过合规流程支持兑回黄金或法币。用户在完成身份验证后，可以按照公开规则发起赎回申请，由合作托管与结算机构执行。无论你是个人还是机构，都能在清晰的费用与时效框架内，把链上的
                  XAUC 变回现实世界中的黄金或资金。
                </p>
              </div>
              <div className="relative w-full shrink-0 flex items-center justify-between">
                <p className="text-[48px] text-black font-bold">合规可兑回</p>
                <div className="relative shrink-0 flex items-center gap-[10.882px] px-[4.353px] py-0">
                  <div className="relative shrink-0 size-[74px]">
                    <Image
                      src={IMAGES.compliance}
                      alt=""
                      width={ICON_SIZES.compliance}
                      height={ICON_SIZES.compliance}
                      className="block h-full w-full max-w-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* XAUC Logo Card */}
          <div className="relative w-[569px] shrink-0 bg-black flex flex-col items-start gap-[10px]">
            <Image
              src={IMAGES.logo}
              alt="XAUC Logo"
              width={569}
              height={317}
              className="block h-full w-full max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
