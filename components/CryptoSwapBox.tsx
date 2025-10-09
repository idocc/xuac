import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";
import { Button } from "@heroui/button";
import { useTranslations } from "next-intl";

const CryptoSwapBox: React.FC = () => {
  const t = useTranslations("CryptoSwapBox");
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [exchangeResult, setExchangeResult] = useState("--");
  const [loading, setLoading] = useState(false);
  const FEE_RATE = 0.01; // 1% 手续费

  // 防抖处理
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500); // 500ms 延迟

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const FIAT_CURRENCIES = [
    { symbol: "USD", name: "US Dollar", logoURI: "https://flagcdn.com/us.svg" },
    { symbol: "EUR", name: "Euro", logoURI: "https://flagcdn.com/eu.svg" },
    {
      symbol: "JPY",
      name: "Japanese Yen",
      logoURI: "https://flagcdn.com/jp.svg",
    },
    {
      symbol: "GBP",
      name: "British Pound",
      logoURI: "https://flagcdn.com/gb.svg",
    },
    {
      symbol: "AUD",
      name: "Australian Dollar",
      logoURI: "https://flagcdn.com/au.svg",
    },
    {
      symbol: "CAD",
      name: "Canadian Dollar",
      logoURI: "https://flagcdn.com/ca.svg",
    },
    {
      symbol: "CHF",
      name: "Swiss Franc",
      logoURI: "https://flagcdn.com/ch.svg",
    },
    {
      symbol: "HKD",
      name: "Hong Kong Dollar",
      logoURI: "https://flagcdn.com/hk.svg",
    },
    {
      symbol: "SGD",
      name: "Singapore Dollar",
      logoURI: "https://flagcdn.com/sg.svg",
    },
  ];
  const [toFiat, setToFiat] = useState(FIAT_CURRENCIES[0]);

  const TOKENS = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      logoURI: "/images/token/bitcoin.webp",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      logoURI: "/images/token/ethereum.webp",
    },
    {
      symbol: "DOGE",
      name: "Dogecoin",
      logoURI: "/images/token/dogecoin.webp",
    },
  ];
  const [selectedToken, setSelectedToken] = useState(TOKENS[0]);

  // 获取汇率并计算兑换结果
  useEffect(() => {
    const fetchRate = async () => {
      if (!debouncedValue || isNaN(Number(debouncedValue))) {
        setExchangeResult("--");
        return;
      }
      setLoading(true);
      try {
        // CoinGecko simple/price API
        // 例：https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
        const tokenIdMap: Record<string, string> = {
          BTC: "bitcoin",
          ETH: "ethereum",
          DOGE: "dogecoin",
        };
        const tokenId = tokenIdMap[selectedToken.symbol];
        const fiat = toFiat.symbol.toLowerCase();
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=${fiat}`;
        const res = await fetch(url);
        const data = await res.json();
        const price = data[tokenId]?.[fiat];
        if (price) {
          // 法币金额 / 单价 = 可兑换数量
          const result = (Number(debouncedValue) / price).toFixed(6);
          setExchangeResult(result);
        } else {
          setExchangeResult("--");
        }
      } catch (e) {
        setExchangeResult("--");
      } finally {
        setLoading(false);
      }
    };
    fetchRate();
  }, [debouncedValue, selectedToken, toFiat]);

  return (
    <motion.div
      className="mt-[25px] mx-auto w-[350px] lg:w-[756px] rounded-[12px] p-[30px] bg-white shadow-[0_9px_20px_0_rgba(0,0,0,0.06)] relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* 输入金额和币种选择 */}
      <div className="flex py-[10px] justify-between h-[60px] lg:h-[124px] rounded-[8px] border border-[rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.00)] px-[10px] lg:px-[20px]">
        <input
          className="w-full lg:text-[32px] text-[24px] font-bold bg-transparent outline-none text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder={t("inputPlaceholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* 目标币种选择（法币下拉） */}
        <div className="flex items-center shrink-0">
          {toFiat.logoURI && (
            <img
              src={toFiat.logoURI}
              alt={toFiat.symbol}
              className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] object-cover rounded-full border border-[#000]"
            />
          )}
          <select
            className="bg-transparent lg:w-[110px] w-[70px] text-center text-black outline-none cursor-pointer lg:text-[28px] text-[18px] font-bold"
            value={toFiat.symbol}
            onChange={(e) => {
              const selected = FIAT_CURRENCIES.find(
                (f) => f.symbol === e.target.value
              );
              if (selected) setToFiat(selected);
            }}
          >
            {FIAT_CURRENCIES.map((fiat) => (
              <option
                key={fiat.symbol}
                value={fiat.symbol}
                className="text-black"
              >
                {fiat.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 代币下拉 */}
      <div className="bg-[#F2F2F2] lg:h-[124px] h-[60px] rounded-[8px] px-[10px] lg:px-[20px] flex justify-between items-center">
        <div className="lg:text-[28px] text-[18px] w-full h-full text-[#00000033] flex items-center">
          {loading ? t("loading") : exchangeResult}
        </div>

        <div className="flex items-center text-black shrink-0">
          <img
            src={selectedToken.logoURI}
            alt={selectedToken.symbol}
            className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] object-cover rounded-full border border-[#000]"
          />
          <select
            className="bg-transparent lg:w-[110px] w-[70px] text-center text-black outline-none cursor-pointer lg:text-[28px] text-[18px] font-bold"
            value={selectedToken.symbol}
            onChange={(e) => {
              const token = TOKENS.find((t) => t.symbol === e.target.value);
              if (token) setSelectedToken(token);
            }}
          >
            {TOKENS.map((token) => (
              <option
                key={token.symbol}
                value={token.symbol}
                className="text-black"
              >
                {token.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* 汇率、手续费、时间（可自定义） */}
      <div className="text-[#2C2C2C] mt-[30px] space-y-[15px]">
        <div className="flex justify-between">
          <span className="text-[#9F9F9F]">{t("fee")}</span>
          <span>
            {inputValue && !isNaN(Number(inputValue))
              ? `${(Number(inputValue) * FEE_RATE).toFixed(2)} ${toFiat.symbol}`
              : t("feeValue")}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#9F9F9F]">{t("estimatedTime")}</span>
          <span>{t("estimatedTimeValue")}</span>
        </div>
      </div>
      {/* 兑换按钮 */}
      <div className="mt-[20px]">
        <Button className="text-black w-full px-[42px] lg:py-[35px] py-[25px] mx-auto lg:text-[24px] text-[20px] border-none bg-primary font-bold cursor-pointer">
          <span>{t("exchangeNow")}</span>
          <ArrowRightIcon color="black" />
        </Button>
      </div>
    </motion.div>
  );
};

export default CryptoSwapBox;
