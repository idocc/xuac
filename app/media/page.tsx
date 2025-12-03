import React from "react";
import Image from "next/image";

const MEDIA_CONTAINER_WIDTH = "w-full max-w-[1168px]";

type LogoResourceCardProps = {
  title: string;
  description?: string;
  variant?: "light" | "dark";
  iconVariant?: "gold" | "black" | "white";
  showText?: boolean;
  showGoldLabel?: boolean;
};

const GoldLogoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
  >
    <g clipPath="url(#clip0_155_284)">
      <path
        d="M26.55 53.1C41.2632 53.1 53.1 41.2632 53.1 26.55C53.1 11.8368 41.2632 0 26.55 0C11.8368 0 0 11.8368 0 26.55C0 41.2632 11.8368 53.1 26.55 53.1Z"
        fill="#EFBE84"
      />
      <path
        d="M33.851 30.7537C33.851 26.8819 31.5279 25.5544 26.8816 25.0013C23.5629 24.5587 22.8991 23.6738 22.8991 22.1249C22.8991 20.576 24.0055 19.5806 26.2179 19.5806C28.2091 19.5806 29.3155 20.2444 29.8685 21.9037C29.9792 22.2356 30.3111 22.4568 30.643 22.4568H32.4128C32.8554 22.4568 33.1873 22.1249 33.1873 21.6826V21.5719C32.7447 19.138 30.7534 17.2575 28.2091 17.0363V14.3813C28.2091 13.9387 27.8773 13.6069 27.3242 13.4962H25.6648C25.2223 13.4962 24.8904 13.828 24.7797 14.3813V16.9256C21.4609 17.3682 19.3592 19.5806 19.3592 22.3463C19.3592 25.997 21.5716 27.4349 26.2179 27.9882C29.3155 28.5412 30.3111 29.205 30.3111 30.9751C30.3111 32.7452 28.7622 33.962 26.6605 33.962C23.784 33.962 22.7884 32.7449 22.4565 31.0855C22.3461 30.6432 22.0142 30.4218 21.6823 30.4218H19.8015C19.3592 30.4218 19.0273 30.7537 19.0273 31.1962V31.307C19.4697 34.0724 21.2398 36.0637 24.8904 36.617V39.272C24.8904 39.7143 25.2223 40.0462 25.7753 40.1569H27.4347C27.8773 40.1569 28.2091 39.825 28.3198 39.272V36.617C31.6386 36.0637 33.851 33.7405 33.851 30.7537Z"
        fill="#F7F7F9"
      />
      <path
        d="M20.9086 42.3693C12.2799 39.272 7.85478 29.6476 11.0631 21.1293C12.7225 16.483 16.3731 12.9431 20.9086 11.2837C21.3512 11.0626 21.5724 10.7307 21.5724 10.1774V8.62875C21.5724 8.18616 21.3512 7.85428 20.9086 7.74384C20.7979 7.74384 20.5767 7.74383 20.466 7.85428C9.95675 11.173 4.20416 22.3463 7.52291 32.8556C9.51416 39.0505 14.2711 43.8075 20.466 45.7987C20.9086 46.0199 21.3512 45.7987 21.4617 45.3562C21.5724 45.2457 21.5724 45.135 21.5724 44.9138V43.3649C21.5724 43.033 21.2405 42.5907 20.9086 42.3693ZM32.635 7.85428C32.1924 7.63312 31.7498 7.85428 31.6393 8.29687C31.5286 8.40759 31.5286 8.51803 31.5286 8.73946V10.2881C31.5286 10.7307 31.8605 11.173 32.1924 11.3945C40.8211 14.4918 45.2462 24.1162 42.0379 32.6345C40.3785 37.2807 36.7279 40.8206 32.1924 42.48C31.7498 42.7012 31.5286 43.033 31.5286 43.5863V45.135C31.5286 45.5776 31.7498 45.9095 32.1924 46.0199C32.3031 46.0199 32.5242 46.0199 32.635 45.9095C43.1442 42.5907 48.8968 31.4174 45.5781 20.9081C43.5868 14.6025 38.7192 9.84553 32.635 7.85428Z"
        fill="#F7F7F9"
      />
    </g>
    <defs>
      <clipPath id="clip0_155_284">
        <rect width="53.1" height="53.1" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BlackLogoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
  >
    <g clipPath="url(#clip0_216_680)">
      <path
        d="M26.55 53.1C41.2632 53.1 53.1 41.2632 53.1 26.55C53.1 11.8368 41.2632 0 26.55 0C11.8368 0 0 11.8368 0 26.55C0 41.2632 11.8368 53.1 26.55 53.1Z"
        fill="black"
      />
      <path
        d="M33.851 30.7536C33.851 26.8818 31.5279 25.5543 26.8816 25.0013C23.5629 24.5587 22.8991 23.6738 22.8991 22.1248C22.8991 20.5759 24.0055 19.5806 26.2179 19.5806C28.2091 19.5806 29.3155 20.2443 29.8685 21.9037C29.9792 22.2356 30.3111 22.4567 30.643 22.4567H32.4128C32.8554 22.4567 33.1873 22.1248 33.1873 21.6825V21.5718C32.7447 19.138 30.7534 17.2574 28.2091 17.0363V14.3813C28.2091 13.9387 27.8773 13.6068 27.3242 13.4961H25.6648C25.2223 13.4961 24.8904 13.828 24.7797 14.3813V16.9256C21.4609 17.3681 19.3592 19.5806 19.3592 22.3463C19.3592 25.9969 21.5716 27.4348 26.2179 27.9881C29.3155 28.5412 30.3111 29.2049 30.3111 30.975C30.3111 32.7451 28.7622 33.9619 26.6605 33.9619C23.784 33.9619 22.7884 32.7448 22.4565 31.0855C22.3461 30.6431 22.0142 30.4217 21.6823 30.4217H19.8015C19.3592 30.4217 19.0273 30.7536 19.0273 31.1962V31.3069C19.4697 34.0723 21.2398 36.0636 24.8904 36.6169V39.2719C24.8904 39.7142 25.2223 40.0461 25.7753 40.1568H27.4347C27.8773 40.1568 28.2091 39.8249 28.3198 39.2719V36.6169C31.6386 36.0636 33.851 33.7405 33.851 30.7536Z"
        fill="#F7F7F9"
      />
      <path
        d="M20.9086 42.3693C12.2799 39.272 7.85478 29.6476 11.0631 21.1293C12.7225 16.4831 16.3731 12.9432 20.9086 11.2838C21.3512 11.0626 21.5724 10.7308 21.5724 10.1775V8.62881C21.5724 8.18622 21.3512 7.85434 20.9086 7.7439C20.7979 7.7439 20.5767 7.7439 20.466 7.85434C9.95675 11.1731 4.20416 22.3464 7.52291 32.8557C9.51416 39.0506 14.2711 43.8076 20.466 45.7988C20.9086 46.02 21.3512 45.7988 21.4617 45.3562C21.5724 45.2458 21.5724 45.1351 21.5724 44.9139V43.365C21.5724 43.0331 21.2405 42.5908 20.9086 42.3693ZM32.635 7.85434C32.1924 7.63318 31.7498 7.85434 31.6393 8.29693C31.5286 8.40765 31.5286 8.51809 31.5286 8.73952V10.2882C31.5286 10.7308 31.8605 11.1731 32.1924 11.3945C40.8211 14.4918 45.2462 24.1162 42.0379 32.6345C40.3785 37.2808 36.7279 40.8207 32.1924 42.4801C31.7498 42.7012 31.5286 43.0331 31.5286 43.5864V45.1351C31.5286 45.5776 31.7498 45.9095 32.1924 46.02C32.3031 46.02 32.5242 46.02 32.635 45.9095C43.1442 42.5908 48.8968 31.4175 45.5781 20.9082C43.5868 14.6026 38.7192 9.84559 32.635 7.85434Z"
        fill="#F7F7F9"
      />
    </g>
    <defs>
      <clipPath id="clip0_216_680">
        <rect width="53.1" height="53.1" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WhiteLogoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
  >
    <path
      d="M26.55 53.1C41.2632 53.1 53.1 41.2632 53.1 26.55C53.1 11.8368 41.2632 0 26.55 0C11.8368 0 0 11.8368 0 26.55C0 41.2632 11.8368 53.1 26.55 53.1Z"
      fill="white"
    />
    <path
      d="M33.851 30.7536C33.851 26.8818 31.5279 25.5543 26.8816 25.0013C23.5629 24.5587 22.8991 23.6738 22.8991 22.1248C22.8991 20.5759 24.0055 19.5806 26.2179 19.5806C28.2091 19.5806 29.3155 20.2443 29.8685 21.9037C29.9792 22.2356 30.3111 22.4567 30.643 22.4567H32.4128C32.8554 22.4567 33.1873 22.1248 33.1873 21.6825V21.5718C32.7447 19.138 30.7534 17.2574 28.2091 17.0363V14.3813C28.2091 13.9387 27.8773 13.6068 27.3242 13.4961H25.6648C25.2223 13.4961 24.8904 13.828 24.7797 14.3813V16.9256C21.4609 17.3681 19.3592 19.5806 19.3592 22.3463C19.3592 25.9969 21.5716 27.4348 26.2179 27.9881C29.3155 28.5412 30.3111 29.2049 30.3111 30.975C30.3111 32.7451 28.7622 33.9619 26.6605 33.9619C23.784 33.9619 22.7884 32.7448 22.4565 31.0855C22.3461 30.6431 22.0142 30.4217 21.6823 30.4217H19.8015C19.3592 30.4217 19.0273 30.7536 19.0273 31.1962V31.3069C19.4697 34.0723 21.2398 36.0636 24.8904 36.6169V39.2719C24.8904 39.7142 25.2223 40.0461 25.7753 40.1568H27.4347C27.8773 40.1568 28.2091 39.8249 28.3198 39.2719V36.6169C31.6386 36.0636 33.851 33.7405 33.851 30.7536Z"
      fill="black"
    />
    <path
      d="M20.9086 42.3693C12.2799 39.272 7.85478 29.6476 11.0631 21.1293C12.7225 16.4831 16.3731 12.9432 20.9086 11.2838C21.3512 11.0626 21.5724 10.7308 21.5724 10.1775V8.62881C21.5724 8.18622 21.3512 7.85434 20.9086 7.7439C20.7979 7.7439 20.5767 7.7439 20.466 7.85434C9.95675 11.1731 4.20416 22.3464 7.52291 32.8557C9.51416 39.0506 14.2711 43.8076 20.466 45.7988C20.9086 46.02 21.3512 45.7988 21.4617 45.3562C21.5724 45.2458 21.5724 45.1351 21.5724 44.9139V43.365C21.5724 43.0331 21.2405 42.5908 20.9086 42.3693ZM32.635 7.85434C32.1924 7.63318 31.7498 7.85434 31.6393 8.29693C31.5286 8.40765 31.5286 8.51809 31.5286 8.73952V10.2882C31.5286 10.7308 31.8605 11.1731 32.1924 11.3945C40.8211 14.4918 45.2462 24.1162 42.0379 32.6345C40.3785 37.2808 36.7279 40.8207 32.1924 42.4801C31.7498 42.7012 31.5286 43.0331 31.5286 43.5864V45.1351C31.5286 45.5776 31.7498 45.9095 32.1924 46.02C32.3031 46.02 32.5242 46.02 32.635 45.9095C43.1442 42.5908 48.8968 31.4175 45.5781 20.9082C43.5868 14.6026 38.7192 9.84559 32.635 7.85434Z"
      fill="black"
    />
  </svg>
);

const AssetTag = ({ label }: { label: string }) => (
  <button
    type="button"
    className="inline-flex h-[28px] items-center justify-center rounded-[4px] border border-[#bdccd7] px-2 text-[13px] font-normal text-[#bdccd7]"
  >
    {label}
  </button>
);

const LogoResourceCard = ({
  title,
  description,
  variant = "light",
  iconVariant = "gold",
  showText = false,
  showGoldLabel = false,
}: LogoResourceCardProps) => {
  const isDark = variant === "dark";
  const isBlackWithText = !isDark && showText && title.includes("Black");
  const textColor = isDark
    ? "text-white"
    : isBlackWithText
    ? "text-black"
    : "text-[#efbe84]";

  return (
    <div className="flex w-full max-w-[282px] flex-col gap-4">
      <div
        className={`flex h-[239px] w-full items-center justify-center rounded-[6px] ${
          isDark ? "bg-black" : "bg-[#f0f1f5]"
        }`}
      >
        <div className="flex h-[160px] w-[185px] items-center justify-center rounded-[6px]">
          {showText || showGoldLabel ? (
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                {iconVariant === "gold" && <GoldLogoSvg />}
                {iconVariant === "black" && <BlackLogoSvg />}
                {iconVariant === "white" && <WhiteLogoSvg />}
              </div>
              <div
                className={`flex flex-col gap-1 ${
                  showGoldLabel ? "items-end text-right" : ""
                }`}
              >
                {showText && (
                  <span
                    className={`font-['IBM_Plex_Mono',monospace] text-[20px] font-bold tracking-[-0.24px] ${textColor}`}
                  >
                    XAUC
                  </span>
                )}
                {showGoldLabel && (
                  <span
                    className={`font-['IBM_Plex_Mono',monospace] text-[14px] font-bold tracking-[-0.14px] ${textColor}`}
                  >
                    Gold
                  </span>
                )}
              </div>
            </div>
          ) : (
            <>
              {iconVariant === "gold" && <GoldLogoSvg />}
              {iconVariant === "black" && <BlackLogoSvg />}
              {iconVariant === "white" && <WhiteLogoSvg />}
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className="font-['IBM_Plex_Mono',monospace] text-[22px] font-bold leading-[26px] tracking-[-0.24px] text-[#586871]">
            {title}
          </p>
          {description && (
            <p className="mt-1 text-[13px] leading-[20px] text-[#7b8a94]">
              {description}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <AssetTag label=".SVG" />
          <AssetTag label=".PNG" />
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({
  index,
  title,
  subtitle,
  rightNode,
}: {
  index: string;
  title: string;
  subtitle: string;
  rightNode?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="flex items-center gap-6">
        <span className="font-['IBM_Plex_Mono',monospace] text-[72px] font-bold leading-none tracking-[-0.98px] text-black">
          {index}
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="font-['Inter',sans-serif] text-[40px] font-bold leading-[48px] text-[#232323]">
            {title}
          </h2>
          <p className="text-[18px] leading-[30px] text-[#586871]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {index === "01" && (
          <button
            type="button"
            className="inline-flex h-[44px] items-center justify-center rounded-[12px] border border-white bg-black px-6 text-[16px] font-normal text-white"
          >
            下载全部
          </button>
        )}
        {rightNode}
      </div>
    </div>
  );
};

const ColorWordmarkSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="196"
    height="52"
    viewBox="0 0 196 52"
    fill="none"
  >
    <path
      d="M175.765 51.682L167.13 43.9518V51.682H152.921V27.4606L168.897 12.8837H195.621V36.2215L185.535 45.2033L195.621 51.682H175.765ZM167.203 25.841V38.7247H181.339V25.841H167.203Z"
      fill="black"
    />
    <path
      d="M122.311 12.8837H148.962V37.1786L133.133 51.682H106.262V27.387L122.311 12.8837ZM120.544 25.841V38.7247H134.679V25.841H120.544Z"
      fill="black"
    />
    <path d="M102.282 51.682H87.999V0H102.282V51.682Z" fill="black" />
    <path
      d="M57.3892 12.8837H84.0401V37.1786L68.2115 51.682H41.3398V27.387L57.3892 12.8837ZM55.6223 25.841V38.7247H69.7576V25.841H55.6223Z"
      fill="black"
    />
    <path
      d="M15.9758 12.8837H37.3995V25.841H14.2825V38.7247H37.3995V51.682H0V27.4606L15.9758 12.8837Z"
      fill="black"
    />
  </svg>
);

const TrademarkMarkSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="204"
    height="204"
    viewBox="0 0 204 204"
    fill="none"
  >
    <path
      d="M202.597 0.661133H53.169L1.59668 52.2335H135.817L47.2184 142.816L60.4421 157.362L151.024 66.1184V201.661L202.597 148.766V0.661133Z"
      fill="black"
      stroke="black"
      strokeWidth="1.32237"
    />
  </svg>
);

export default function MediaPage() {
  return (
    <div className="bg-[#030303]">
      {/* Hero */}
      <section className="relative flex w-full justify-center bg-black h-[574px] pb-[120px] pt-[246px]">
        <div
          className={`${MEDIA_CONTAINER_WIDTH} flex items-center justify-between gap-10 px-4`}
        >
          <div className="max-w-[420px]">
            <h1 className="font-['IBM_Plex_Mono',monospace] text-[64px] font-bold leading-[1.1] tracking-[-0.68px] text-white">
              媒体资源
            </h1>
          </div>

          {/* Hero illustration */}
          <div className="relative flex h-[230px] w-[531px] items-center justify-center">
            <Image
              src="/meida/t1.png"
              alt="XAUC 媒体资源主视觉"
              width={531}
              height={230}
              className="h-[230px] w-[531px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Download + logo resources */}
      <section className="flex w-full justify-center bg-white py-[120px]">
        <div className={`${MEDIA_CONTAINER_WIDTH} flex flex-col gap-[56px] px-4`}>
          <SectionHeading
            index="01"
            title="下载"
            subtitle="我们提供视觉所用到的全部 LOGO 资源。"
          />

          {/* Logo resources grid: 4 per row on desktop */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <LogoResourceCard
              title="XAUC Logo"
              iconVariant="gold"
              showText
            />
            <LogoResourceCard title="XAUC Logo Mark" iconVariant="gold" />
            <LogoResourceCard title="Circular Displays" iconVariant="gold" />
            <LogoResourceCard
              title="XAUC Gold Logo"
              iconVariant="gold"
              showText
              showGoldLabel
            />
            <LogoResourceCard
              title="XAUC Logo Black"
              iconVariant="black"
              showText
            />
            <LogoResourceCard
              title="XAUC Logo Mark Black"
              iconVariant="black"
            />
            <LogoResourceCard
              title="XAUC White Displays"
              variant="dark"
              iconVariant="white"
            />
            <LogoResourceCard
              title="XAUC White"
              variant="dark"
              iconVariant="white"
              showText
              showGoldLabel
            />
          </div>

          {/* Color section */}
          <div className="mt-[64px] flex flex-col gap-10">
            <SectionHeading
              index="02"
              title="色彩"
              subtitle="XAUC 的品牌色均源自自然，使产品在视觉上更自然、有机且具连接感。"
              rightNode={
                <div className="hidden lg:block">
                  <ColorWordmarkSvg />
                </div>
              }
            />
            {/* XAUC black wordmark image below colors */}
            <div className="mt-8 flex w-full justify-center">
              <div className="flex h-[160px] w-full max-w-[1160px] items-center justify-center">
                <Image
                  src="/meida/black_xauc.png"
                  alt="XAUC 品牌黑色字标"
                  width={1160}
                  height={160}
                  className="h-[160px] w-[1160px] max-w-full object-contain"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex h-[53px] w-full overflow-hidden rounded-md">
                <div className="h-full w-1/4 bg-[#d3b25b]" />
                <div className="h-full w-1/4 bg-[#232323]" />
                <div className="h-full w-1/4 bg-white" />
                <div className="h-full w-1/4 bg-[#f0f1f5]" />
              </div>
              <div className="flex flex-wrap text-center text-[14px] leading-[24px] text-[#586871]">
                <div className="flex h-[24px] w-1/4 items-center justify-center">
                  Glod #D3B25B
                </div>
                <div className="flex h-[24px] w-1/4 items-center justify-center">
                  Black #232323
                </div>
                <div className="flex h-[24px] w-1/4 items-center justify-center">
                  White #FFFFFF
                </div>
                <div className="flex h-[24px] w-1/4 items-center justify-center">
                  Gray #F0F1F5
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Naming guidelines */}
      <section className="flex w-full justify-center bg-black py-[120px]">
        <div
          className={`${MEDIA_CONTAINER_WIDTH} flex flex-col gap-12 px-4 text-black`}
        >
          <div className="flex justify-center">
            <h2 className="font-['IBM_Plex_Mono',monospace] text-[36px] font-bold leading-[36px] tracking-[-0.36px] text-white">
              XAUC 官方命名规范
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[6px] bg-white p-6">
              <h3 className="mb-3 font-['Inter',sans-serif] text-[24px] font-bold leading-[30px] text-black">
                XAUC
              </h3>
              <p className="text-[14px] leading-[25px] text-[#232323]">
                代表整个 XAUC 项目与品牌，以及由其发行的链上黄金资产。
              </p>
            </div>

            <div className="rounded-[6px] bg-white p-6">
              <h3 className="mb-3 font-['Inter',sans-serif] text-[24px] font-bold leading-[30px] text-black">
                XAUC Gold
              </h3>
              <p className="text-[14px] leading-[25px] text-[#232323]">
                代表负责黄金托管与 XAUC 代币发行的相关实体与合作机构（如托管方、发行方等的合称）。
              </p>
            </div>

            <div className="rounded-[6px] bg-white p-6">
              <h3 className="mb-3 font-['Inter',sans-serif] text-[24px] font-bold leading-[30px] text-black">
                XAUC Official Website
              </h3>
              <p className="text-[14px] leading-[25px] text-[#232323]">
                指 XAUC 的官方网站，可在此了解项目信息、查看储备证明，并访问铸造 / 赎回与支持服务入口。
              </p>
            </div>

            <div className="rounded-[6px] bg-white p-6">
              <h3 className="mb-3 font-['Inter',sans-serif] text-[24px] font-bold leading-[30px] text-black">
                XAUC Token Symbol
              </h3>
              <p className="text-[14px] leading-[25px] text-[#232323]">
                在交易所、钱包、区块浏览器和 DeFi 协议中使用的代币代码，用于表示单位化的链上黄金资产。
              </p>
            </div>

            <div className="rounded-[6px] bg-white p-6">
              <h3 className="mb-3 font-['Inter',sans-serif] text-[24px] font-bold leading-[30px] text-black">
                xauc Technical Symbol
              </h3>
              <p className="text-[14px] leading-[25px] text-[#232323]">
                在智能合约、API、SDK、命令行等技术环境中使用的全小写符号，用于代码层面标识 XAUC 资产。
              </p>
            </div>

            <div className="rounded-[6px] bg-white p-6">
              <h3 className="mb-3 font-['Inter',sans-serif] text-[24px] font-bold leading-[30px] text-black">
                XAUC System
              </h3>
              <p className="text-[14px] leading-[25px] text-[#232323]">
                统称支持 XAUC 运行的所有基础设施与技术组件，包括 Vault System、Proof
                Dashboard、Compliance Hub、Redemption Engine 等整套系统。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark guidance */}
      <section className="flex w-full justify-center bg-white py-[120px]">
        <div
          className={`${MEDIA_CONTAINER_WIDTH} flex flex-col items-center gap-10 px-4 md:flex-row md:items-start md:justify-between`}
        >
          <div className="flex max-w-[864px] flex-col gap-4 text-[14px] leading-[25px] text-black">
            <p>
              您可以在遵守本指引的前提下，在合法、正当且不具误导性的目的下使用 XAUC
              项目所拥有的商标、标识和文字标记（统称为“XAUC
              商标”）。除非本指引或您与 XAUC
              另行签署的书面协议中有明确约定，否则您不会获得任何对 XAUC
              商标的权利或权益。
            </p>
            <p>
              XAUC
              商标的状态以及本指引可能会不时更新，您有责任查阅并遵守最新版本。XAUC
              商标仅可用于如实、准确地指代 XAUC、其代币及相关产品或服务，不得以任何方式制造
              XAUC 参与、背书或合作的错误印象。
            </p>
            <p>
              您不得将 XAUC
              商标或与之近似的标识用于公司名称、产品名称、域名、社交媒体账号、广告关键词或其他身份标识中。若
              XAUC
              认为您对商标的使用不当、违法、具有误导性或与本指引不符，XAUC
              有权提出异议并要求您立即停止相关使用。
            </p>
          </div>
          <div className="mt-6 flex shrink-0 justify-center md:mt-0">
            <TrademarkMarkSvg />
          </div>
        </div>
      </section>
    </div>
  );
}


