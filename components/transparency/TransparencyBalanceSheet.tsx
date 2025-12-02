"use client";

export const TransparencyBalanceSheet = () => {
  return (
    <section className="relative w-full bg-white py-10">
      <div className="mx-auto w-full max-w-[1120px] px-4">
        {/* Separator */}
        <div className="mb-10 h-px bg-black/12"></div>

        {/* Title */}
        <div className="mb-6">
          <h2 className="font-['Inter',sans-serif] text-[16px] leading-[19px] text-[#291e11] font-medium">
            截至最近一期储备报告的 XAUC 发行主体资产负债情况（2025 年 9 月 30 日）
          </h2>
        </div>

        {/* Balance Sheet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[31px]">
          {/* Total Assets */}
          <div className="relative h-[30px] rounded-[5px] bg-[#fafcfe] shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)] flex items-center px-2">
            <div className="flex items-center gap-2 flex-1">
              <div className="rounded-[5px] bg-white px-2 h-[30px] flex items-center shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)]">
                <span className="font-['Inter',sans-serif] text-[12px] leading-[30px] text-[#232323] font-medium">
                  总资产
                </span>
                <span className="ml-0.5 font-['Inter',sans-serif] text-[10px] leading-[30px] text-[#232323] font-medium">
                  3
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#291e11] font-medium">
                $181,223,149,214.00
              </span>
            </div>
          </div>

          {/* Total Liabilities */}
          <div className="relative h-[30px] rounded-[5px] bg-[#fafcfe] shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)] flex items-center px-2">
            <div className="flex items-center gap-2 flex-1">
              <div className="rounded-[5px] bg-white px-2 h-[30px] flex items-center shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)]">
                <span className="font-['Inter',sans-serif] text-[12px] leading-[30px] text-[#232323] font-medium">
                  总负债
                </span>
                <span className="ml-0.5 font-['Inter',sans-serif] text-[10px] leading-[30px] text-[#232323] font-medium">
                  4
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#291e11] font-medium">
                $174,445,364,503.00
              </span>
            </div>
          </div>

          {/* Net Equity */}
          <div className="relative h-[30px] rounded-[5px] bg-[#fafcfe] shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)] flex items-center px-2">
            <div className="flex items-center gap-2 flex-1">
              <div className="rounded-[5px] bg-white px-2 h-[30px] flex items-center shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)]">
                <span className="font-['Inter',sans-serif] text-[12px] leading-[30px] text-[#232323] font-medium">
                  净资产
                </span>
                <span className="ml-0.5 font-['Inter',sans-serif] text-[10px] leading-[30px] text-[#232323] font-medium">
                  5
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#291e11] font-medium">
                $6,777,784,711.00
              </span>
            </div>
          </div>
        </div>

        {/* Explanatory Notes */}
        <div className="mt-8 space-y-4 pl-10">
          <div className="relative">
            <ol className="list-decimal space-y-4 text-[13px] leading-[16px] text-[#291e11]">
              <li className="pl-2">
                <p className="font-['Inter',sans-serif] font-normal">
                  XAUC 通常会按日或定期更新「代币流通情况」页面中的数据，本部分信息基于当时可获得的内部与托管数据整理，可能与实时情况存在一定时滞。因此，在审阅最新储备报告时，该页面展示的数字不一定完全反映报告日当时的代币流通与资产负债情况。
                </p>
              </li>
              <li className="pl-2">
                <p className="font-['Inter',sans-serif] font-normal">
                  "XAUC 发行主体"（下称"发行主体"）是指在相关储备报告中被识别为负责发行 XAUC 代币并持有对应储备资产的实体或实体组合。
                </p>
              </li>
              <li className="pl-2">
                <p className="font-['Inter',sans-serif] font-normal">
                  "总资产"（Total Assets）是指发行主体在最近一期储备报告日所持有、并计入 XAUC 储备体系的全部资产。这些资产构成支持 XAUC 代币的储备基础。发行主体可能另有未计入储备体系的自有运营资金或投资资产，此类资产不计入本处披露的"总资产"指标。
                </p>
              </li>
              <li className="pl-2">
                <p className="font-['Inter',sans-serif] font-normal">
                  "总负债"（Total Liabilities）是指发行主体在最近一期储备报告日的全部负债总额，包括对 XAUC 持有人承担的赎回义务及其他与储备相关的负债。
                </p>
              </li>
              <li className="pl-2">
                <p className="font-['Inter',sans-serif] font-normal">
                  "净资产"（Net Equity）是指在最近一期储备报告日，发行主体的总资产减去总负债后的差额，代表在履行全部负债后剩余的权益余额。
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

