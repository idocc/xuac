import React from "react";
import Image from "next/image";

const REPORTS_CONTAINER_WIDTH = "w-[1300px]";

type MonthlyReport = {
  month: string;
  title: string;
  bullets: string[];
  imageSrc: string;
};

const REPORTS: MonthlyReport[] = [
  {
    month: "12月",
    title: "金币储备报告",
    bullets: [
      "托管人持有的黄金储备: 375,572.297 金衡盎司",
      "流通中的 XAU₮ 代币数量: 375,572.247000 XAU₮",
      "每枚代币的黄金储备: 至少 1 盎司纯金",
      "流通中的 XAU₮ 市场价值: 1,449,318,278 美元, 每纯金衡盎司价格为 3,858.96 美元.",
    ],
    imageSrc: "/report/1.png",
  },
  {
    month: "11月",
    title: "金币储备报告",
    bullets: [
      "托管人持有的黄金储备: 375,572.297 金衡盎司",
      "流通中的 XAU₮ 代币数量: 375,572.247000 XAU₮",
      "每枚代币的黄金储备: 至少 1 盎司纯金",
      "流通中的 XAU₮ 市场价值: 1,449,318,278 美元, 每纯金衡盎司价格为 3,858.96 美元.",
    ],
    imageSrc: "/report/2.png",
  },
  {
    month: "10月",
    title: "金币储备报告",
    bullets: [
      "托管人持有的黄金储备: 375,572.297 金衡盎司",
      "流通中的 XAU₮ 代币数量: 375,572.247000 XAU₮",
      "每枚代币的黄金储备: 至少 1 盎司纯金",
      "流通中的 XAU₮ 市场价值: 1,449,318,278 美元, 每纯金衡盎司价格为 3,858.96 美元.",
    ],
    imageSrc: "/report/3.png",
  },
];

const ReportIllustration = ({ src }: { src: string }) => {
  return (
    <div className="flex h-[252px] w-[254px] items-center justify-center bg-[#f0f1f5]">
      <Image
        src={src}
        alt="金币储备报告图示"
        width={128}
        height={144}
        className="h-[144px] w-[128px] object-contain"
      />
    </div>
  );
};

const MonthlyReportRow = ({ report }: { report: MonthlyReport }) => {
  return (
    <section className="flex w-full items-start gap-[30px]">
      {/* Month label */}
      <div className="w-[100px] shrink-0">
        <p className="font-['IBM_Plex_Mono',monospace] text-[34px] font-bold leading-[30px] tracking-[-0.34px] text-black">
          {report.month}
        </p>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-col gap-6 text-black">
          <h2 className="font-['IBM_Plex_Mono',monospace] text-[34px] font-bold leading-[30px] tracking-[-0.34px]">
            {report.title}
          </h2>
          <ul className="list-disc space-y-2 pl-6 font-['IBM_Plex_Mono',monospace] text-[19px] leading-[30px] tracking-[-0.19px]">
            {report.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="inline-flex w-[180px] items-center justify-center rounded-[13px] border border-white bg-black px-6 py-2 font-['Outfit',sans-serif] text-[17px] text-white transition-colors hover:bg-[#151515]"
        >
          点击下载
        </button>
      </div>

      {/* Illustration */}
      <ReportIllustration src={report.imageSrc} />
    </section>
  );
};

export default function ReportsPage() {
  return (
    <div className="bg-[#030303]">
      {/* Hero section */}
      <section className="relative flex w-full justify-center bg-black h-[574px] pt-[140px] pb-[120px]">
        <div
          className={`${REPORTS_CONTAINER_WIDTH} flex items-center justify-between px-4`}
        >
          <div className="max-w-[420px]">
            <h1 className="font-['IBM_Plex_Mono',monospace] text-[64px] font-bold leading-[1.1] tracking-[-0.68px] text-white">
              金币储备报告
            </h1>
          </div>

          {/* Hero illustration images */}
          <div className="relative flex h-[387px] items-center justify-center gap-6">
            <Image
              src="/report/t1.png"
              alt="金币储备报告图示一"
              width={372}
              height={325}
              className="h-[325px] w-[372px] object-contain"
              priority
            />
            <Image
              src="/report/t2.png"
              alt="金币储备报告图示二"
              width={343}
              height={387}
              className="h-[387px] w-[343px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Reports list */}
      <section className="flex w-full justify-center bg-white py-[120px]">
        <div
          className={`${REPORTS_CONTAINER_WIDTH} flex flex-col gap-[140px] px-4`}
        >
          {REPORTS.map((report) => (
            <MonthlyReportRow key={report.month} report={report} />
          ))}
        </div>
      </section>
    </div>
  );
}


