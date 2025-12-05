"use client";

import { useState } from "react";
import Image from "next/image";

export const QuerySection = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement query logic
    console.log("Query wallet:", walletAddress);
  };

  return (
    <section className="bg-white text-black min-h-[986px] flex flex-col items-center">
      <div className="text-[68px] w-[1300px] font-bold text-left whitespace-nowrap pt-[30px]">
        金分配查询
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[739px] flex flex-col items-center gap-6 px-4 mt-[150px]">
        {/* Subtitle */}
        <p className="text-[38px] font-bold text-center leading-[46.648px] whitespace-pre-wrap">
          立即查询您的链上黄金
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#030303] h-[64.134px] rounded-[12px] w-full relative overflow-hidden flex items-center"
        >
          {/* Input Field */}
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="输入持有您 XAUC 代币的钱包地址地址"
            className="flex-1 h-full bg-transparent text-white text-[19.386px] px-6 placeholder:text-white/54 focus:outline-none"
          />

          {/* Query Button */}
          <button
            type="submit"
            className="bg-[#efbe84] h-[55.389px] rounded-[12px] px-8 mr-[4.37px] text-[#191919] text-[21.864px] font-bold not-italic whitespace-pre-wrap hover:opacity-90 transition-opacity"
          >
            查询
          </button>
        </form>
      </div>

      {/* Background Image */}
      <div className="relative w-full max-w-[1072px] h-[612px] mt-8 mx-auto">
        <Image
          src="/images/query/gold-bars.webp"
          alt="Gold bars"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};
