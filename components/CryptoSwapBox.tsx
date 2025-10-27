import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";
import { RippleButton } from "./RippleButton";
import { useTranslations } from "next-intl";

const CryptoSwapBox: React.FC = () => {
  const t = useTranslations("CryptoSwapBox");
  const [inputValue, setInputValue] = useState("1");
  const [debouncedValue, setDebouncedValue] = useState("1");
  const [exchangeResult, setExchangeResult] = useState("--");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReversed, setIsReversed] = useState(true); // 是否反转输入输出

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
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchRate = async () => {
      if (!debouncedValue || isNaN(Number(debouncedValue))) {
        setExchangeResult("--");
        setExchangeRate(null);
        setError(null);
        return;
      }
      setLoading(true);
      setError(null);
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
        
        // 检查响应状态
        if (!res.ok) {
          setError(t("fetchError"));
          setExchangeResult("--");
          setExchangeRate(null);
          return;
        }
        
        const data = await res.json();
        const price = data[tokenId]?.[fiat];
        if (price) {
          setExchangeRate(price);
          // 根据是否反转，计算不同方向
          if (isReversed) {
            // 反转：输入加密货币，输出法币
            const result = (Number(debouncedValue) * price).toFixed(2);
            setExchangeResult(result);
          } else {
            // 正常：输入法币，输出加密货币
            const result = (Number(debouncedValue) / price).toFixed(6);
            setExchangeResult(result);
          }
          setError(null);
        } else {
          setError(t("fetchError"));
          setExchangeResult("--");
          setExchangeRate(null);
        }
      } catch (e) {
        setError(t("fetchError"));
        setExchangeResult("--");
        setExchangeRate(null);
      } finally {
        setLoading(false);
      }
    };
    fetchRate();
  }, [debouncedValue, selectedToken, toFiat, t, isReversed]);

  // 交换输入输出
  const handleSwap = () => {
    setIsReversed(!isReversed);
    setInputValue("");
    setExchangeResult("--");
    setError(null);
  };

  return (
    <motion.div
      className="mt-[10px] mx-auto w-[350px] lg:w-[756px] rounded-[12px] p-[30px] bg-white shadow-[0_9px_20px_0_rgba(0,0,0,0.06)] relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* 第一个输入框（根据isReversed显示法币或加密货币） */}
      <div className="flex py-[10px] justify-between h-[60px] lg:h-[124px] rounded-[8px] border border-[rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.00)] px-[10px] lg:px-[20px]">
        <input
          className="w-full lg:text-[32px] text-[24px] font-bold bg-transparent outline-none text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder={t("inputPlaceholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* 币种选择 */}
        {!isReversed ? (
          // 法币
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
        ) : (
          // 加密货币
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
        )}
      </div>

      {/* 交换图标 */}
      <div className="flex justify-center my-[5px] lg:my-[15px]">
        <button
          onClick={handleSwap}
          className="p-[10px] rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
          aria-label="Swap currencies"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <path
              d="M7 10L12 5L17 10M17 14L12 19L7 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* 第二个输入框（输出结果） */}
      <div className="bg-[#F2F2F2] lg:h-[124px] h-[60px] rounded-[8px] px-[10px] lg:px-[20px] flex justify-between items-center">
        <div className="lg:text-[28px] text-[18px] w-full h-full text-[#00000033] flex items-center">
          {loading ? t("loading") : exchangeResult}
        </div>

        {/* 币种选择 */}
        {!isReversed ? (
          // 加密货币
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
        ) : (
          // 法币
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
        )}
      </div>

      {/* 错误提示（移到下面） - 预留固定高度 */}
      <div className="mt-[5px] min-h-[24px] lg:min-h-[28px]">
        {error && (
          <div className="text-red-500 text-[14px] lg:text-[16px] px-[10px]">
            {error}
          </div>
        )}
      </div>

      {/* 汇率、时间信息 */}
      <div className="text-[#2C2C2C] mt-[20px] space-y-[15px]">
        <div className="flex justify-between">
          <span className="text-[#9F9F9F]">{t("exchangeRate")}</span>
          <span>
            {exchangeRate
              ? `1 ${selectedToken.symbol} ≈ ${exchangeRate.toLocaleString()} ${toFiat.symbol}`
              : "-/-"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#9F9F9F]">{t("estimatedTime")}</span>
          <span>{t("estimatedTimeValue")}</span>
        </div>
      </div>
      {/* 兑换按钮 */}
      <div className="mt-[20px]">
        <RippleButton 
          variant="green"
          className="text-black w-full px-[20px] lg:py-[20px] py-[10px] mx-auto lg:text-[24px] text-[20px] border-none font-bold"
          onClick={() => {
            if (window.Intercom) {
              window.Intercom('show');
            }
          }}
        >
          <span>{t("exchangeNow")}</span>
          <ArrowRightIcon />
        </RippleButton>
      </div>
    </motion.div>
  );
};

export default CryptoSwapBox;
