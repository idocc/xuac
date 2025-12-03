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
      <section className="relative min-h-[581px] w-full overflow-hidden bg-black">
        <div className="relative mx-auto w-full max-w-[1440px] min-h-[581px] flex items-center">
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-[136px] pb-16 pt-[140px]">
            {/* Hero Title */}
            <div className="flex flex-col gap-5 mb-8 md:mb-0 w-full md:w-[420px]">
              <div className="font-['IBM_Plex_Mono','Noto_Sans_SC',monospace] text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.68px] text-white" style={{ fontVariationSettings: "'wght' 800" }}>
                金币储备报告
              </div>
            </div>

            {/* Background Graphics */}
            <div className="relative w-full md:w-[531px] h-[230px] flex-shrink-0 flex items-center justify-center gap-4">
              <Image
                src="/report/t1.png"
                alt="Reserve Reports"
                width={186}
                height={162}
                className="h-[162px] w-[186px] object-contain"
                priority
              />
              <Image
                src="/report/t2.png"
                alt="Reserve Reports"
                width={171}
                height={193}
                className="h-[193px] w-[171px] object-contain"
                priority
              />
            </div>
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


