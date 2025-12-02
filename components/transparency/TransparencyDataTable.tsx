"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

type Currency = "USDT" | "EURT" | "CNHT" | "MXMT" | "XAUT";

interface NetworkData {
  network: string;
  label: string;
  circulation: string;
  available: string;
  total: string;
}

const networks: NetworkData[] = [
  {
    network: "ethereum",
    label: "在以太坊网络",
    circulation: "$102,704,292,537.00",
    available: "-$1,032,913,655.38",
    total: "$101,671,378,881.62",
  },
  {
    network: "tron",
    label: "On Tron",
    circulation: "$78,543,816,552.47",
    available: "-$1,773,299,149.89",
    total: "$76,770,517,402.58",
  },
  {
    network: "solana",
    label: "On Solana",
    circulation: "$2,739,928,354.17",
    available: "-$272,413,426.05",
    total: "$2,463,816,386.81",
  },
  {
    network: "avalanche",
    label: "On Avalanche",
    circulation: "$1,847,205,574.05",
    available: "-$1,035,497,688.03",
    total: "$811,707,886.01",
  },
  {
    network: "ton",
    label: "On Ton",
    circulation: "$1,429,976,002.51",
    available: "-$776,187,817.26",
    total: "$653,788,185.25",
  },
  {
    network: "aptos",
    label: "On Aptos",
    circulation: "$1,229,847,921.91",
    available: "-$667,167,921.11",
    total: "$562,680,000.80",
  },
  {
    network: "celo",
    label: "On Celo",
    circulation: "$470,000,001.00",
    available: "-$353,610,395.32",
    total: "$116,389,605.68",
  },
  {
    network: "cosmos",
    label: "On Cosmos",
    circulation: "$159,997,865.17",
    available: "-$48,997,865.05",
    total: "$111,000,000.11",
  },
  {
    network: "kaia",
    label: "On Kaia",
    circulation: "$100,000,001.00",
    available: "-$13,000,001.00",
    total: "$87,000,000.00",
  },
  {
    network: "near",
    label: "On Near",
    circulation: "$525,962,284.93",
    available: "-$464,062,316.74",
    total: "$61,899,968.19",
  },
  {
    network: "tezos",
    label: "On Tezos",
    circulation: "$141,000,001.00",
    available: "-$98,722,071.36",
    total: "$42,277,929.64",
  },
  {
    network: "polkadot",
    label: "On Polkadot Asset Hub",
    circulation: "$77,998,643.84",
    available: "-$46,001,021.19",
    total: "$31,997,622.65",
  },
  {
    network: "liquid",
    label: "On Liquid",
    circulation: "$97,561,100.00",
    available: "-$68,000,100.00",
    total: "$29,561,000.00",
  },
];

export const TransparencyDataTable = () => {
  const [activeCurrency, setActiveCurrency] = useState<Currency>("USDT");

  const currencies: { id: Currency; label: string }[] = [
    { id: "USDT", label: "USD₮" },
    { id: "EURT", label: "EUR₮" },
    { id: "CNHT", label: "CNH₮" },
    { id: "MXMT", label: "MXN₮" },
    { id: "XAUT", label: "XAU₮" },
  ];

  return (
    <section className="relative w-full bg-white py-10">
      <div className="mx-auto w-full max-w-[1120px] px-4">
        {/* Last Update */}
        <div className="mb-5">
          <p className="font-['Inter',sans-serif] text-[18px] leading-[30px] text-[#291e11] font-medium">
            Last Update: Nov 10, 2025 - 11:30:07 PM UTC
          </p>
        </div>

        {/* Main Table Container */}
        <div className="relative bg-white border-[0.5px] border-black/60 rounded-sm overflow-hidden">
          {/* Currency Tabs */}
          <div className="relative border-b border-black/12">
            <div className="flex relative">
              {currencies.map((currency) => {
                const isActive = activeCurrency === currency.id;
                
                return (
                  <button
                    key={currency.id}
                    onClick={() => setActiveCurrency(currency.id)}
                    className={clsx(
                      "flex-1 h-[48px] flex items-center justify-center transition-opacity relative",
                      isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
                    )}
                  >
                    <span className="font-['Inter',sans-serif] text-[16px] leading-[19px] text-[#232323] font-semibold">
                      {currency.label}
                    </span>
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Network Data */}
          <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-6">
            {networks.map((network, index) => (
              <div key={network.network}>
                {/* Network Label and Progress Bar - Same row, left and right aligned */}
                <div className="mb-4 flex items-center gap-4 h-[30px] bg-[#FAFCFE] border-[#d6dfe7] border px-[5px] rounded-[5px]">
                  <span className="h-full flex items-center px-[5px] rounded-[5px] justify-center bg-[#fff] text-[12px] leading-[16px] text-[#232323] font-medium whitespace-nowrap flex-shrink-0">
                    {network.label}
                  </span>
                  
                  {/* Network Selector - Progress Bar */}
                  <div className="flex-1 flex h-[4px] items-stretch rounded-[5px] bg-[#fafcfe] overflow-hidden shadow-[inset_0px_0px_2px_0px_rgba(2,88,88,0.2)]">
                    <div className="h-full flex-1 border-r border-white"></div>
                    <div className="h-full flex-1 border-r border-white"></div>
                    <div className="h-full flex-1 rounded-r-[5px] bg-[#d3b25b] border-l border-white"></div>
                  </div>
                </div>

                {/* Network Data */}
                <div className="ml-8 space-y-[10px]">
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#232323] font-medium opacity-70">
                      当前流通总量
                    </span>
                    <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#291e11] font-medium opacity-50">
                      {network.circulation}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#232323] font-medium opacity-70">
                      {network.network === "ethereum" ? "可售备份数量" : "可供出售 / 分发数量"}
                    </span>
                    <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#291e11] font-medium opacity-50">
                      {network.available}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#232323] font-medium opacity-70">
                      {network.network === "ethereum" ? "累计发行总量" : "累计铸造总量"}
                    </span>
                    <span className="font-['Inter',sans-serif] text-[11px] leading-[30px] text-[#291e11] font-medium opacity-50">
                      {network.total}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Balance Sheet Section */}
          <div className="pt-2 px-8 pb-8">
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
        </div>

        <div className="mt-10">
          {/* Title */}
          <h2 className="mb-8 font-['Aeonik',sans-serif] text-[32px] leading-[1.5] text-[#291e11] font-bold">
            此表格包含
          </h2>

          {/* Content: Text on left (black background) and Image on right */}
          <div className="flex flex-row">
            {/* Left side - Text content with black background */}
            <div className="flex-1 bg-black p-8">
              <div className="space-y-6 text-[13px] leading-[16px] text-white">
                <ul className="space-y-6 list-disc pl-5">
                  <li>
                    <div>
                      <p className="font-['Inter',sans-serif] font-normal">
                        "已授权"（authorized）
                        <br />
                        指已经由 XAUC 发行主体在区块链上创建、具备技术上可流通条件的 XAUC 代币。
                      </p>
                    </div>
                  </li>
                  
                  <li>
                    <div>
                      <p className="font-['Inter',sans-serif] font-normal">
                        "已授权但未发行"（authorized but not issued）
                        <br />
                        指已经由 XAUC 发行主体创建，但尚未投入市场流通、也未分配给任何用户或合作方的 XAUC。
                        <br />
                        由于这些代币尚未进入实际流通，因此不计入对应代币的净流通量。
                      </p>
                    </div>
                  </li>
                  
                  <li>
                    <div>
                      <p className="font-['Inter',sans-serif] font-normal">
                        "隔离中的 XAUC"（quarantined XAUC）
                        <br />
                        指因安全、合规或风控原因，被标记并冻结在特定地址上的 XAUC 代币。
                        <br />
                        XAUC 发行主体会采取措施，防止相关地址持有人继续转移这些代币。
                        <br />
                        在发行主体酌情决定的情况下，这部分被隔离的 XAUC 也不计入对应代币的净流通量。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Icons image */}
            <div className="flex-shrink-0 bg-gray-100 flex items-center justify-center p-8">
              <Image
                src="/toumingdu/t3.png"
                alt=""
                className="object-contain"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
