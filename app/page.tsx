"use client";

import { useTranslations } from "next-intl";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { RippleButton } from "@/components/RippleButton";
import icon1 from "@/assets/home/icon1.svg";
import icon2 from "@/assets/home/icon2.svg";
import icon3 from "@/assets/home/icon3.svg";
import icon4 from "@/assets/home/icon4.svg";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CryptoSwapBox from "../components/CryptoSwapBox";
import clsx from "clsx";
import Image from "next/image";

// Mock数据 - 交易所特色功能 - 将在组件内部使用 t() 动态生成
const getExchangeFeatures = (t: any) => [
  {
    id: 1,
    icon: icon1,
    title: t("features.mainCoins"),
    description: t("features.mainCoinsDesc"),
  },
  {
    id: 2,
    icon: icon2,
    title: t("features.fastDeposit"),
    description: t("features.fastDepositDesc"),
  },
  {
    id: 3,
    icon: icon3,
    title: t("features.globalCoverage"),
    description: t("features.globalCoverageDesc"),
  },
  {
    id: 4,
    icon: icon4,
    title: t("features.available24"),
    description: t("features.available24Desc"),
  },
];

// 评论数据 - 将在组件内部使用 t() 动态生成
const getCommentsData = (t: any) => [
  {
    id: 1,
    name: t("testimonials.user1Name"),
    time: t("testimonials.user1Time"),
    avatar: "/images/user_ava.png",
    content: t("testimonials.user1Content"),
    highlight: t("testimonials.user1Highlight"),
  },
  {
    id: 2,
    name: t("testimonials.user2Name"),
    time: t("testimonials.user2Time"),
    avatar: "/images/user_ava.png",
    content: t("testimonials.user2Content"),
  },
  {
    id: 3,
    name: t("testimonials.user3Name"),
    time: t("testimonials.user3Time"),
    avatar: "/images/user_ava.png",
    content: t("testimonials.user3Content"),
  },
];

// 模糊背景图片数据
const blurImagesData = [
  {
    id: 1,
    src: "/images/blur/4.png",
    left: "15%",
    top: "20%",
    width: 100,
    height: 100,
    animationDelay: "0s",
  },
  {
    id: 2,
    src: "/images/blur/5.png",
    left: "-3%",
    top: "50%",
    width: 170,
    height: 170,
    animationDelay: "0.5s",
  },
  {
    id: 3,
    src: "/images/blur/6.png",
    left: "25%",
    top: "80%",
    width: 160,
    height: 160,
    animationDelay: "1s",
  },
  {
    id: 4,
    src: "/images/blur/8.png",
    left: "68%",
    top: "60%",
    width: 150,
    height: 150,
    animationDelay: "1.5s",
  },
  {
    id: 5,
    src: "/images/blur/7.png",
    left: "85%",
    top: "20%",
    width: 90,
    height: 90,
    animationDelay: "2s",
  },
  {
    id: 6,
    src: "/images/blur/3.png",
    left: "97%",
    top: "80%",
    width: 60,
    height: 60,
    animationDelay: "2s",
  },
];

// FAQ数据 - 将在组件内部使用 t() 动态生成
const getFaqData = (t: any) => [
  {
    id: 1,
    question: t("faq.question1"),
    answer: t("faq.answer1"),
  },
  {
    id: 2,
    question: t("faq.question2"),
    answer: t("faq.answer2"),
  },
  {
    id: 3,
    question: t("faq.question3"),
    answer: t("faq.answer3"),
  },
  {
    id: 4,
    question: t("faq.question4"),
    answer: t("faq.answer4"),
  },
];

// TradingViewWidget.jsx
function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 清理之前的内容
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;

    // 正确的方式：将配置对象转换为字符串
    const config = {
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          proName: "BINANCE:BNBUSDT",
          title: "BNB",
        },
        {
          proName: "BINANCE:ADAUSDT",
          title: "Cardano",
        },
        {
          proName: "BINANCE:SOLUSDT",
          title: "Solana",
        },
        {
          proName: "BINANCE:XRPUSDT",
          title: "XRP",
        },
        {
          proName: "BINANCE:DOGEUSDT",
          title: "Dogecoin",
        },
        {
          proName: "BINANCE:AVAXUSDT",
          title: "Avalanche",
        },
        {
          proName: "BINANCE:DOTUSDT",
          title: "Polkadot",
        },
        {
          proName: "BINANCE:MATICUSDT",
          title: "Polygon",
        },
        {
          proName: "BINANCE:LINKUSDT",
          title: "Chainlink",
        },
        {
          proName: "BINANCE:UNIUSDT",
          title: "Uniswap",
        },
        {
          proName: "BINANCE:LTCUSDT",
          title: "Litecoin",
        },
        {
          proName: "BINANCE:BCHUSDT",
          title: "Bitcoin Cash",
        },
        {
          proName: "BINANCE:ATOMUSDT",
          title: "Cosmos",
        },
        {
          proName: "BINANCE:ALGOUSDT",
          title: "Algorand",
        },
        {
          proName: "BINANCE:VETUSDT",
          title: "VeChain",
        },
        {
          proName: "BINANCE:FTMUSDT",
          title: "Fantom",
        },
        {
          proName: "BINANCE:NEARUSDT",
          title: "NEAR Protocol",
        },
        {
          proName: "BINANCE:APTUSDT",
          title: "Aptos",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    };

    script.innerHTML = JSON.stringify(config);

    // 创建widget容器
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container__widget";

    containerRef.current.appendChild(widgetContainer);
    containerRef.current.appendChild(script);

    // 清理函数
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="relative z-20 w-full bg-[#00000080]">
      <div
        className="tradingview-widget-container w-full"
        ref={containerRef}
      ></div>
    </div>
  );
}

// 导航菜单数据 - 将在组件内部使用 t() 动态生成
const getNavMenuData = (t: any) => [
  { id: 1, title: t("nav.products"), href: "/product" },
  { id: 2, title: t("nav.process"), href: "/process" },
  { id: 3, title: t("nav.security"), href: "/security" },
  { id: 4, title: t("nav.about"), href: "/about" },
];

function Introduce() {
  const t = useTranslations("HomePage");
  const navMenuData = getNavMenuData(t);

  return (
    <div className="relative lg:py-[50px] py-[30px]">
      <div>
        {navMenuData.map((item, index) => (
          <Link href={item.href} key={item.id}>
            <motion.div
              className="lg:px-[108px] px-[10px] text-[#000] relative group hover-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border-b border-[#000] flex justify-between items-center lg:py-[20px] py-[10px] lg:pr-[40px]">
                <span className="lg:text-[72px] text-[36px] font-bold">
                  {item.title}
                </span>
                <ArrowRightIcon size={20} color="#000" />
              </div>
            </motion.div>
          </Link>
        ))}

        {/* 内容区域 - 始终显示 */}
        <div>
          <div
            className={clsx(
              "px-[10px] py-[30px]",
              "lg:px-[108px] lg:py-[50px] lg:grid lg:grid-cols-3 lg:lg:gap-[80px] lg:place-items-center"
            )}
          >
            {[
              {
                step: "stepOne",
                icon: "/images/icon1.png",
                alt: "step_one",
              },
              {
                step: "stepTwo",
                icon: "/images/icon2.png",
                alt: "step_two",
              },
              {
                step: "stepThree",
                icon: "/images/icon3.png",
                alt: "step_three",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="lg:w-[420px] group transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="transition-colors duration-300 bg-transparent group-hover:bg-[#BDEE63]">
                  <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    {t(`steps.${item.step}`)}
                  </div>
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-[340px] h-[172px] mx-auto my-[20px]"
                  />
                  <div className="p-[30px] transition-colors duration-300 text-[#000] group-hover:text-[#fff] group-hover:bg-[#000]">
                    <div className="text-[32px] font-bold">
                      {t(`steps.${item.step}Title`)}
                    </div>
                    <div className="text-[18px] text-[#5F5F5F] group-hover:text-[#D5D5D5]">
                      {t(`steps.${item.step}Desc`)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="px-[108px] justify-end lg:flex hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[50%]">
              <div className="flex items-center justify-between">
                <span className="text-[48px] font-bold text-[#000] mr-[90px]">
                  {t("steps.quickExchange")}
                </span>
                <RippleButton
                  variant="green"
                  className="text-black px-[10px] py-[10px] rounded-[4px] text-[16px] border-none font-bold"
                  onClick={() => {
                    if (window.Intercom) {
                      window.Intercom("show");
                    }
                  }}
                >
                  <span>{t("hero.exchangeNow")}</span>
                  <ArrowRightIcon color="black" />
                </RippleButton>
              </div>
              <div className="text-[18px] text-[#020202] mt-[31px]">
                {t("steps.description")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// 评论轮播组件
function CommentCarousel() {
  const t = useTranslations("HomePage");
  const commentsData = getCommentsData(t);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % commentsData.length);
      setProgress(0); // 重置进度条
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / 50; // 5秒内完成，每100ms增加2%
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#000] text-center py-[50px] lg:px-[108px] px-[12px]">
      <motion.h1
        className="lg:text-[68px] text-[36px] font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("testimonials.title")}
      </motion.h1>

      {/* 固定高度容器，内容垂直居中 */}
      <div className="relative overflow-hidden min-h-[320px] lg:mt-[72px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="absolute w-full"
          >
            <div className="lg:text-[24px] text-[16px] text-left lg:leading-[36px] leading-[24px]">
              {commentsData[currentIndex].id === 1 &&
              commentsData[currentIndex].highlight ? (
                <>
                  {commentsData[currentIndex].content
                    .split(commentsData[currentIndex].highlight)
                    .map((part: string, index: number) => (
                      <span key={index}>
                        {part}
                        {index === 0 && (
                          <span className="text-[#BCFF2F]">
                            {commentsData[currentIndex].highlight}
                          </span>
                        )}
                      </span>
                    ))}
                </>
              ) : (
                commentsData[currentIndex].content
              )}
            </div>

            <div className="lg:mt-[32px] mt-[20px] flex justify-between">
              <div className="flex items-center text-left">
                <img
                  className="lg:w-[90px] lg:h-[90px] w-[40px] h-[40px]"
                  src={commentsData[currentIndex].avatar}
                  alt="user"
                />
                <div className="ml-[24px]">
                  <div className="lg:text-[28px] text-[16px]">
                    {commentsData[currentIndex].name}
                  </div>
                  <div className="lg:text-[18px] text-[12px] text-[#8C8C8E]">
                    {commentsData[currentIndex].time}
                  </div>
                </div>
              </div>
              <img
                className="lg:w-[90px] lg:h-[90px] w-[40px] h-[40px]"
                src="/images/music_icon.png"
                alt="user"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="grid grid-cols-3 lg:gap-[28px] gap-[8px] lg:mt-[56px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {commentsData.map((_, index) => (
          <div key={index} className="bg-[#393C47] h-[2px] relative">
            {index === currentIndex && (
              <div
                className="bg-[#BCFF2F] h-[2px] absolute left-0 top-0 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            )}
            {index < currentIndex && (
              <div className="bg-[#BCFF2F] h-[2px] absolute left-0 top-0 w-full"></div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// FAQ项组件
function FAQItem({
  faq,
  index,
}: {
  faq: { id: number; question: string; answer: string };
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-[#000]">
      {/* 桌面端布局 */}
      <div
        className="min-h-[140px] py-[30px] items-center justify-between text-black text-[42px] font-bold cursor-pointer lg:flex hidden"
        onClick={toggleExpanded}
      >
        <div className="w-[140px]">{String(index + 1).padStart(2, "0")}</div>
        <div className="w-[561px]">{faq.question}</div>

        <div
          className={`text-[18px] w-[414px] font-medium transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {faq.answer}
        </div>

        <div className="w-[98px] h-[98px]">
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
          >
            <ArrowUpRightIcon size={98} />
          </div>
        </div>
      </div>

      {/* 移动端布局 */}
      <div className="lg:hidden">
        <div className="py-[20px] cursor-pointer" onClick={toggleExpanded}>
          <div className="flex items-start justify-between gap-[12px]">
            <div className="flex-1">
              <div className="flex items-start gap-[12px]">
                <div className="text-[18px] font-bold text-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-[18px] font-bold text-black flex-1">
                  {faq.question}
                </div>
              </div>
            </div>
            <div className="w-[24px] h-[24px] flex-shrink-0">
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  isExpanded ? "rotate-90" : "rotate-0"
                }`}
              >
                <ArrowUpRightIcon size={24} color="#000" />
              </div>
            </div>
          </div>

          <div
            className={`text-[14px] font-medium text-black transition-all duration-500 ease-in-out overflow-hidden pl-[34px] ${
              isExpanded
                ? "max-h-[500px] opacity-100 mt-[12px]"
                : "max-h-0 opacity-0"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations("HomePage");
  const mockExchangeFeatures = getExchangeFeatures(t);
  const faqData = getFaqData(t);

  return (
    <div>
      <div className="lg:min-h-[900px] pt-[160px] px-[12px] relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover bg-[#000]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/allbg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full">
          <TradingViewWidget />
        </div>

        <motion.div
          className={clsx(
            "relative z-10 text-[36px] text-center",
            "lg:text-[78px]"
          )}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("hero.title")}
          </motion.div>
          <motion.div
            className="font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("hero.subtitle")}
          </motion.div>
          <motion.div
            className="text-[18px] lg:font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("hero.description")}
          </motion.div>
          <motion.div
            className="lg:mt-[80px] mt-[60px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <RippleButton
              variant="white"
              className={clsx(
                "text-black mx-auto text-[16px] py-[10px] px-[20px] border-none font-bold",
                "lg:px-[32px] lg:py-[15px] lg:text-[24px]"
              )}
              onClick={() => {
                if (window.Intercom) {
                  window.Intercom("show");
                }
              }}
            >
              <span>{t("hero.exchangeNow")}</span>
              <ArrowRightIcon color="black" />
            </RippleButton>
          </motion.div>
        </motion.div>
        <div className="h-[130px] grid grid-cols-2 lg:grid-cols-4 relative z-10 items-center lg:px-[40px] mt-[150px]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#fff]"></div>
          {mockExchangeFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`h-[61px] flex items-center ${
                index < mockExchangeFeatures.length - 1
                  ? "lg:border-r border-[#FFFFFF]"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            >
              <img
                src={feature.icon.src}
                alt={`icon${feature.id}`}
                className="w-[30px] h-[30px] mr-3 lg:w-[60px] lg:h-[60px]"
              />
              <div>
                <div className="text-[15px] font-bold text-white">
                  {feature.title}
                </div>
                <div
                  className="text-[16px] text-white hidden lg:block"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:h-[900px] text-center py-[20px] lg:pt-[100px] relative overflow-hidden">
        <div className="hidden lg:block">
          {blurImagesData.map((image) => (
            <div
              className="ani-float absolute"
              key={image.id}
              style={{
                left: image.left,
                top: image.top,
                width: `${image.width}px`,
                height: `${image.height}px`,
                animationDelay: image.animationDelay,
              }}
            >
              <Image
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                className="blur-image w-full h-full"
              />
            </div>
          ))}
        </div>

        <motion.span
          className="text-black font-bold text-[36px] lg:text-[68px] relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("exchange.title")}
        </motion.span>
        <CryptoSwapBox />
      </div>

      <div
        className={clsx(
          "py-[20px] px-[15px]",
          "lg:py-[50px] lg:flex lg:justify-between items-center lg:px-[108px] lg:space-x-[150px]"
        )}
      >
        <motion.div
          className="lg:text-[52px] text-[32px] text-[#000] lg:pt-[38px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-bold" style={{ whiteSpace: "pre-line" }}>
            {t("stats.platformTitle")} {t("stats.platformSubtitle")}
          </span>
        </motion.div>
        <div className="grid grid-cols-2 shrink-0 gap-x-[10px] gap-y-[10px] mt-[20px] lg:mt-0 lg:gap-x-[120px] lg:gap-y-[142px] text-black">
          {[
            { key: "volume", delay: 0.1 },
            { key: "countries", delay: 0.2 },
            { key: "service", delay: 0.3 },
            { key: "satisfaction", delay: 0.4 },
          ].map((stat) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
            >
              <div className="lg:text-[72px] text-[40px] font-bold">
                {t(`stats.${stat.key}`)}
              </div>
              <div className="lg:text-[16px] text-[12px]">
                {t(`stats.${stat.key}Desc`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Introduce />
      <CommentCarousel />

      <div className="lg:py-[120px] py-[30px] px-[12px] bg-[#000] lg:flex lg:justify-center lg:space-x-[80px] overflow-hidden">
        <motion.div
          className="lg:w-[460px] lg:pt-[50px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:text-[68px] text-[36px] font-bold">
            {t("partners.title")}
          </div>
          <div className="lg:mt-[24px] mt-[10px] lg:text-[20px] text-[16px]">
            {t("partners.description")}
          </div>
        </motion.div>

        <motion.div
          className="lg:w-[700px] grid grid-cols-3 gap-[24px] lg:mt-0 mt-[30px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className="lg:h-[100px] h-[60px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={`/images/line${index + 1}.png`}
                className="h-full"
                alt="partner"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="lg:p-[118px] px-[12px] py-[40px]">
        <motion.div
          className="lg:text-[68px] text-[36px] font-bold text-black lg:mb-8 mb-[10px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("faq.title")}
        </motion.div>
        {faqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FAQItem faq={faq} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
