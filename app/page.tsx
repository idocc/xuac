"use client";

import {useTranslations} from 'next-intl';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ArrowDownIcon,
} from "@/components/icons";
import { Button } from "@heroui/button";
import icon1 from "@/assets/home/icon1.svg";
import icon2 from "@/assets/home/icon2.svg";
import icon3 from "@/assets/home/icon3.svg";
import icon4 from "@/assets/home/icon4.svg";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


// Mock数据 - 交易所特色功能 - 将在组件内部使用 t() 动态生成
const getExchangeFeatures = (t: any) => [
  {
    id: 1,
    icon: icon1,
    title: t('features.mainCoins'),
    description: t('features.mainCoinsDesc'),
  },
  {
    id: 2,
    icon: icon2,
    title: t('features.fastDeposit'),
    description: t('features.fastDepositDesc'),
  },
  {
    id: 3,
    icon: icon3,
    title: t('features.globalCoverage'),
    description: t('features.globalCoverageDesc'),
  },
  {
    id: 4,
    icon: icon4,
    title: t('features.available24'),
    description: t('features.available24Desc'),
  },
];

// 评论数据 - 将在组件内部使用 t() 动态生成
const getCommentsData = (t: any) => [
  {
    id: 1,
    name: t('testimonials.user1Name'),
    time: t('testimonials.user1Time'),
    avatar: "/images/user_ava.png",
    content: t('testimonials.user1Content'),
    highlight: t('testimonials.user1Highlight'),
  },
  {
    id: 2,
    name: t('testimonials.user2Name'),
    time: t('testimonials.user2Time'),
    avatar: "/images/user_ava.png",
    content: t('testimonials.user2Content'),
  },
  {
    id: 3,
    name: t('testimonials.user3Name'),
    time: t('testimonials.user3Time'),
    avatar: "/images/user_ava.png",
    content: t('testimonials.user3Content'),
  },
];

// 模糊背景图片数据
const blurImagesData = [
  {
    id: 1,
    src: "/images/blur/4.png",
    left: "15%",
    top: "20%",
    width: "100px",
    height: "100px",
    animationDelay: "0s",
  },
  {
    id: 2,
    src: "/images/blur/5.png",
    left: "-3%",
    top: "50%",
    width: "170px",
    height: "170px",
    animationDelay: "0.5s",
  },
  {
    id: 3,
    src: "/images/blur/6.png",
    left: "25%",
    top: "80%",
    width: "160px",
    height: "160px",
    animationDelay: "1s",
  },
  {
    id: 4,
    src: "/images/blur/8.png",
    left: "68%",
    top: "60%",
    width: "150px",
    height: "150px",
    animationDelay: "1.5s",
  },
  {
    id: 5,
    src: "/images/blur/7.png",
    left: "85%",
    top: "20%",
    width: "90px",
    height: "90px",
    animationDelay: "2s",
  },
  {
    id: 6,
    src: "/images/blur/3.png",
    left: "97%",
    top: "80%",
    width: "60px",
    height: "60px",
    animationDelay: "2s",
  },
];

// FAQ数据 - 将在组件内部使用 t() 动态生成
const getFaqData = (t: any) => [
  {
    id: 1,
    question: t('faq.question1'),
    answer: t('faq.answer1'),
  },
  {
    id: 2,
    question: t('faq.question2'),
    answer: t('faq.answer2'),
  },
  {
    id: 3,
    question: t('faq.question3'),
    answer: t('faq.answer3'),
  },
  {
    id: 4,
    question: t('faq.question4'),
    answer: t('faq.answer4'),
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
  { id: 1, title: t('nav.products'), href: "/product" },
  { id: 2, title: t('nav.process'), href: "/process" },
  { id: 3, title: t('nav.security'), href: "/security" },
  { id: 4, title: t('nav.about'), href: "/about" },
];

function Introduce() {
  const t = useTranslations('HomePage');
  const navMenuData = getNavMenuData(t);
  
  return (
    <div className="relative py-[50px]">
      <div>
        {navMenuData.map((item, index) => (
          <Link href={item.href} key={item.id}>
            <motion.div 
              className="px-[108px] pr-[40px] text-[#000] relative group hover-effect"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border-b border-[#000] flex justify-between items-center py-[20px] pr-[40px]">
                <span className="text-[72px] font-bold">{item.title}</span>
                <ArrowRightIcon size={20} color="#000" />
              </div>
            </motion.div>
          </Link>
        ))}

        {/* 内容区域 - 始终显示 */}
        <div>
          <div className="px-[108px] py-[50px] grid grid-cols-3 gap-[80px] place-items-center">
            {/* STEP ONE */}
            <motion.div 
              className="w-[420px] group transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-transparent group-hover:bg-[#BDEE63] transition-colors duration-300">
                <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('steps.stepOne')}
                </div>
                <img
                  src="/images/icon1.png"
                  alt="step_one"
                  className="w-[340px] h-[172px] mx-auto my-[20px]"
                />
                <div className="p-[30px] text-[#000] group-hover:text-[#fff] group-hover:bg-[#000]">
                  <div className="text-[32px] font-bold">{t('steps.stepOneTitle')}</div>
                  <div className="text-[#5F5F5F] text-[18px] group-hover:text-[#D5D5D5]">
                    {t('steps.stepOneDesc')}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STEP TWO */}
            <motion.div 
              className="w-[420px] group transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-transparent group-hover:bg-[#BDEE63] transition-colors duration-300">
                <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('steps.stepTwo')}
                </div>
                <img
                  src="/images/icon2.png"
                  alt="step_two"
                  className="w-[340px] h-[172px] mx-auto my-[20px]"
                />
                <div className="p-[30px] text-[#000] group-hover:text-[#fff] group-hover:bg-[#000] transition-colors duration-300">
                  <div className="text-[32px] font-bold">{t('steps.stepTwoTitle')}</div>
                  <div className="text-[#5F5F5F] text-[18px] group-hover:text-[#D5D5D5]">
                    {t('steps.stepTwoDesc')}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STEP THREE */}
            <motion.div 
              className="w-[420px] group transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-transparent group-hover:bg-[#BDEE63] transition-colors duration-300">
                <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('steps.stepThree')}
                </div>
                <img
                  src="/images/icon3.png"
                  alt="step_three"
                  className="w-[340px] h-[172px] mx-auto my-[20px]"
                />
                <div className="p-[30px] text-[#000] group-hover:text-[#fff] group-hover:bg-[#000] transition-colors duration-300">
                  <div className="text-[32px] font-bold">{t('steps.stepThreeTitle')}</div>
                  <div className="text-[#5F5F5F] text-[18px] group-hover:text-[#D5D5D5]">
                    {t('steps.stepThreeDesc')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="px-[108px] flex justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[50%]">
              <div className="flex items-center justify-between">
                <span className="text-[48px] font-bold text-[#000] mr-[90px]">
                  {t('steps.quickExchange')}
                </span>
                <Button className="text-black px-[20px] py-[30px] rounded-[4px] text-[20px] border-none bg-primary font-bold cursor-pointer">
                  <span>{t('hero.exchangeNow')}</span>
                  <ArrowRightIcon color="black" />
                </Button>
              </div>
              <div className="text-[18px] text-[#020202] mt-[31px]">
                {t('steps.description')}
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
  const t = useTranslations('HomePage');
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
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#000] text-center py-[75px] px-[108px]">
      <motion.h1 
        className="text-[68px] font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t('testimonials.title')}
      </motion.h1>

      {/* 固定高度的容器 */}
      <div className="relative overflow-hidden min-h-[300px] mt-[72px]">
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
            <div className="text-[24px] text-left">
              {commentsData[currentIndex].id === 1 && commentsData[currentIndex].highlight ? (
                <>
                  {commentsData[currentIndex].content.split(commentsData[currentIndex].highlight).map((part: string, index: number) => (
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

            <div className="mt-[32px] flex justify-between">
              <div className="flex items-center text-left">
                <img
                  className="w-[90px] h-[90px]"
                  src={commentsData[currentIndex].avatar}
                  alt="user"
                />
                <div className="ml-[24px]">
                  <div className="text-[28px]">{commentsData[currentIndex].name}</div>
                  <div className="text-[18px] text-[#8C8C8E]">
                    {commentsData[currentIndex].time}
                  </div>
                </div>
              </div>
              <img
                className="w-[90px] h-[90px]"
                src="/images/music_icon.png"
                alt="user"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div 
        className="grid grid-cols-3 gap-[28px] mt-[56px]"
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
function FAQItem({ faq, index }: { faq: { id: number; question: string; answer: string }; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-[#000]">
      <div
        className="min-h-[140px] py-[30px] flex items-center justify-between text-black text-[42px] font-bold cursor-pointer"
        onClick={toggleExpanded}
      >
        <div className="w-[140px]">{String(index + 1).padStart(2, "0")}</div>
        <div className="w-[561px]">{faq.question}</div>

        {/* 小字部分 - 只在展开时显示 */}
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
    </div>
  );
}

export default function Home() {
  const t = useTranslations('HomePage');
  const mockExchangeFeatures = getExchangeFeatures(t);
  const faqData = getFaqData(t);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="min-h-[900px] pt-[160px] relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/images/top_img.webp)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <TradingViewWidget />
        </div>

        <motion.div 
          className="relative z-10 font-bold text-[78px] text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.div>
          <motion.div 
            className="text-[18px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.div>
          <motion.div 
            className="mt-[80px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button className="text-black px-[42px] py-[30px] mx-auto text-[24px] border-none bg-primary font-bold cursor-pointer">
              <span>{t('hero.exchangeNow')}</span>
              <ArrowRightIcon color="black" />
            </Button>
          </motion.div>
        </motion.div>
        <div className="h-[130px] grid grid-cols-4 relative z-10 items-center px-[40px] mt-[150px]">
          {mockExchangeFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`h-[61px] flex items-center ${
                index < mockExchangeFeatures.length - 1
                  ? "border-r border-[#FFFFFF]"
                  : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            >
              <img
                src={feature.icon.src}
                alt={`icon${feature.id}`}
                className="w-[60px] h-[60px] mr-3"
              />
              <div>
                <div className="text-[20px] font-bold text-white">
                  {feature.title}
                </div>
                <div
                  className="text-[16px] text-white"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-[830px] text-center pt-[100px] relative overflow-hidden">
        {blurImagesData.map((image) => (
          <div
            className="ani-float absolute"
            key={image.id}
            style={{
              left: image.left,
              top: image.top,
              width: image.width,
              height: image.height,
              animationDelay: image.animationDelay,
            }}
          >
            <img src={image.src} alt="" className="blur-image w-full h-full" />
          </div>
        ))}

        <motion.span 
          className="text-black font-bold text-[68px] relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('exchange.title')}
        </motion.span>
        <motion.div 
          className="mt-[25px] mx-auto w-[756px] h-[533px] rounded-[12px] p-[30px] bg-white shadow-[0_4px_65.5px_0_rgba(0,0,0,0.06)] relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex py-[10px] justify-between h-[124px] rounded-[8px] border border-[rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.00)] px-[20px]">
            <input
              type="text"
              className="w-full h-full text-[48px] text-black outline-none focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="0"
            />
            <div className="flex items-center text-black space-x-2 cursor-pointer ml-[30px]">
              <img
                src="/images/user_ava.png"
                alt=""
                className="w-[24px] h-[24px]"
              />
              <span className="text-[28px] font-bold">SGD</span>
              <ArrowDownIcon color="#868685" size={40} />
            </div>
          </div>
          <div className="bg-[#F2F2F2] h-[124px] rounded-[8px] px-[20px] flex justify-between items-center">
            <div>
              <div className="text-[48px] text-[#00000033]">{t('exchange.placeholder')}</div>
            </div>
            <div className="flex items-center text-black text-[28px] space-x-2 font-bold cursor-pointer ml-[30px]">
              <span>{t('exchange.selectToken')}</span>
              <ArrowDownIcon color="#868685" size={20} />
            </div>
          </div>
          <div className="text-[#2C2C2C] mt-[30px] space-y-[15px]">
            <div className="flex justify-between">
              <span className="text-[#9F9F9F]">{t('exchange.realTimeRate')}</span>
              <span>0.24AUD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9F9F9F]">{t('exchange.fee')}</span>
              <span>131.47 SGD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9F9F9F]">{t('exchange.estimatedTime')}</span>
              <span>{t('exchange.within1Hour')}</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <Button className="text-black w-full px-[42px] py-[35px] mx-auto text-[24px] border-none bg-primary font-bold cursor-pointer">
              <span>{t('hero.exchangeNow')}</span>
              <ArrowRightIcon color="black" />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="px-[108px] mt-[50px] pb-[50px] flex justify-center space-x-[150px]">
        <motion.div 
          className="text-[52px] text-[#000] pt-[38px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-bold">{t('stats.platformTitle')}</span>
          <div style={{ whiteSpace: 'pre-line' }}>
            {t('stats.platformSubtitle')}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-x-[120px] gap-y-[142px] text-black">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-[72px] font-bold">{t('stats.volume')}</div>
            <div className="text-[16px]">{t('stats.volumeDesc')}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-[72px] font-bold">{t('stats.countries')}</div>
            <div className="text-[16px]">{t('stats.countriesDesc')}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-[72px] font-bold">{t('stats.service')}</div>
            <div className="text-[16px]">{t('stats.serviceDesc')}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-[72px] font-bold">{t('stats.satisfaction')}</div>
            <div className="text-[16px]">{t('stats.satisfactionDesc')}</div>
          </motion.div>
        </div>
      </div>

      <Introduce />
      <CommentCarousel />

      <div className="px-[108px] py-[120px] bg-[#000] flex justify-center space-x-[150px]">
        <motion.div 
          className="w-[460px] pt-[50px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-[68px] font-bold">{t('partners.title')}</div>
          <div className="mt-[24px] text-[20px]">
            {t('partners.description')}
          </div>
        </motion.div>

        <motion.div 
          className="w-[700px] grid grid-cols-3 gap-[24px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div 
              key={index} 
              className="h-[100px]"
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

      <div className="p-[118px]">
        <motion.div 
          className="text-[68px] font-bold text-black mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('faq.title')}
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
