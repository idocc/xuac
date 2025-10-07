"use client";
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
// Mock数据 - 交易所特色功能
const mockExchangeFeatures = [
  {
    id: 1,
    icon: icon1,
    title: "主流币种",
    description: "覆盖BTC/ETH/USDT,直兑<br/>USD、EUR、CNY等主流法币。",
  },
  {
    id: 2,
    icon: icon2,
    title: "快速到账",
    description: "分钟级到账，减少资金占用与<br/>等待时间。",
  },
  {
    id: 3,
    icon: icon3,
    title: "全球覆盖",
    description: "接入多国法币与支付通道，覆盖<br/>巴西、东南亚、欧洲等市场。",
  },
  {
    id: 4,
    icon: icon4,
    title: "24小时在线",
    description: "7x24小时随时可兑,全球用户无<br/>时差等待。",
  },
];

// 评论数据
const commentsData = [
  {
    id: 1,
    name: "George",
    time: "3天前的评论",
    avatar: "/images/user_ava.png",
    content:
      "企业大额兑换最怕合规风险。这里全程 KYC/AML 与标准化身份核验,资金隔离+实时风控,大额订单由专人跟进；还提供 企业 API 与批量对接,出入金与对账更顺畅;7x24 客服覆盖多语种与多时区，跨境结算也稳妥。",
  },
  {
    id: 2,
    name: "Sarah",
    time: "5天前的评论",
    avatar: "/images/user_ava.png",
    content:
      "作为个人投资者，我最看重的是安全和便捷。这个平台的用户体验很好，界面简洁，操作流畅。而且支持多种支付方式，到账速度也很快，客服响应及时，解决问题很专业。",
  },
  {
    id: 3,
    name: "Michael",
    time: "1周前的评论",
    avatar: "/images/user_ava.png",
    content:
      "全球化的数字资产兑换服务确实很有价值。支持的币种丰富，汇率透明公正，没有隐藏费用。特别是跨境转账功能，比传统银行快很多，手续费也更低。推荐给有国际业务的朋友。",
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

// FAQ数据
const faqData = [
  {
    id: 1,
    question: "平台支持哪些币种和法币？",
    answer:
      "目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。",
  },
  {
    id: 2,
    question: "我的资金是否安全？",
    answer:
      "目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。",
  },
  {
    id: 3,
    question: "是否需要实名认证(KYC)",
    answer:
      "目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 多种法币，未来会持续拓展更多币种和市场。目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。",
  },
  {
    id: 4,
    question: "手续费是多少？",
    answer:
      "目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。",
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

// 导航菜单数据
const navMenuData = [
  { id: 1, title: "产品与服务", href: "/product" },
  { id: 2, title: "使用流程", href: "/process" },
  { id: 3, title: "安全与合规", href: "/security" },
  { id: 4, title: "关于我们", href: "/about" },
];

function Introduce() {
  return (
    <div className="relative py-[50px]">
      <div>
        {navMenuData.map((item) => (
          <Link href={item.href} key={item.id}>
            <div className="px-[108px] pr-[40px] text-[#000] relative group hover-effect">
              <div className="border-b border-[#000] flex justify-between items-center py-[20px] pr-[40px]">
                <span className="text-[72px] font-bold">{item.title}</span>
                <ArrowRightIcon size={20} color="#000" />
              </div>
            </div>
          </Link>
        ))}

        {/* 内容区域 - 始终显示 */}
        <div>
          <div className="px-[108px] py-[50px] grid grid-cols-3 gap-[80px] place-items-center">
            {/* STEP ONE */}
            <div className="w-[420px] group cursor-pointer transition-all duration-300">
              <div className="bg-transparent group-hover:bg-[#BDEE63] transition-colors duration-300">
                <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  STEP ONE
                </div>
                <img
                  src="/images/icon1.png"
                  alt="step_one"
                  className="w-[340px] h-[172px] mx-auto my-[20px]"
                />
                <div className="p-[30px] text-[#000] group-hover:text-[#fff] group-hover:bg-[#000]">
                  <div className="text-[32px] font-bold">联系客服</div>
                  <div className="text-[#5F5F5F] text-[18px] group-hover:text-[#D5D5D5]">
                    通过在线客服、Telegram、WhatsApp
                    等方式提交兑换需求（币种与金额）。
                  </div>
                </div>
              </div>
            </div>

            {/* STEP TWO */}
            <div className="w-[420px] group cursor-pointer transition-all duration-300">
              <div className="bg-transparent group-hover:bg-[#BDEE63] transition-colors duration-300">
                <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  STEP TWO
                </div>
                <img
                  src="/images/icon2.png"
                  alt="step_two"
                  className="w-[340px] h-[172px] mx-auto my-[20px]"
                />
                <div className="p-[30px] text-[#000] group-hover:text-[#fff] group-hover:bg-[#000] transition-colors duration-300">
                  <div className="text-[32px] font-bold">支付与收款</div>
                  <div className="text-[#5F5F5F] text-[18px] group-hover:text-[#D5D5D5]">
                    客户将数字货币转入指定地址，平台在确认到账后快速完成法币结算。
                  </div>
                </div>
              </div>
            </div>

            {/* STEP THREE */}
            <div className="w-[420px] group cursor-pointer transition-all duration-300">
              <div className="bg-transparent group-hover:bg-[#BDEE63] transition-colors duration-300">
                <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  STEP THREE
                </div>
                <img
                  src="/images/icon3.png"
                  alt="step_three"
                  className="w-[340px] h-[172px] mx-auto my-[20px]"
                />
                <div className="p-[30px] text-[#000] group-hover:text-[#fff] group-hover:bg-[#000] transition-colors duration-300">
                  <div className="text-[32px] font-bold">交易完成</div>
                  <div className="text-[#5F5F5F] text-[18px] group-hover:text-[#D5D5D5]">
                    兑换成功，客户可实时查询订单进度，交易全程透明可追踪。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[108px] flex justify-end">
            <div className="relative w-[628px]">
              <div className="flex items-center">
                <span className="text-[48px] font-bold text-[#000] mr-[90px]">
                  只需3步,快速兑换
                </span>
                <Button className="text-black px-[20px] py-[30px] rounded-[4px] text-[20px] border-none bg-primary font-bold cursor-pointer">
                  <span>立即兑换</span>
                  <ArrowRightIcon color="black" />
                </Button>
              </div>
              <div className="text-[18px] text-[#020202] mt-[31px]">
                全天汇(24EXC)为全球个人与企业用户提供 安全、透明、合规
                的数字资产兑换服务。支持稳定币、主流加密货币与法币间的快速结算,7x24
                小时随时随地完成交易。 无需注册账户。通过 在线客服 / Telegram /
                WhatsApp 告知兑换需求，
                确认汇率后完成支付与收款，几分钟内即可完成交易。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 评论轮播组件
function CommentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
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

  const currentComment = commentsData[currentIndex];

  return (
    <div className="bg-[#000] text-center py-[75px] px-[108px]">
      <h1 className="text-[68px] font-bold">来自用户的声音</h1>

      <div className="text-[24px] mt-[72px] text-left">
        {currentComment.content
          .split(
            "这里全程 KYC/AML 与标准化身份核验,资金隔离+实时风控,大额订单由专人跟进；"
          )
          .map((part, index) => (
            <span key={index}>
              {part}
              {index === 0 && currentComment.id === 1 && (
                <span className="text-[#BCFF2F]">
                  这里全程 KYC/AML
                  与标准化身份核验,资金隔离+实时风控,大额订单由专人跟进；
                </span>
              )}
            </span>
          ))}
      </div>

      <div className="mt-[32px] flex justify-between">
        <div className="flex items-center text-left">
          <img
            className="w-[90px] h-[90px]"
            src={currentComment.avatar}
            alt="user"
          />
          <div className="ml-[24px]">
            <div className="text-[28px]">{currentComment.name}</div>
            <div className="text-[18px] text-[#8C8C8E]">
              {currentComment.time}
            </div>
          </div>
        </div>
        <img
          className="w-[90px] h-[90px]"
          src="/images/music_icon.png"
          alt="user"
        />
      </div>

      <div className="grid grid-cols-3 gap-[28px] mt-[56px]">
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
      </div>
    </div>
  );
}

// FAQ项组件
function FAQItem({ faq, index }: { faq: (typeof faqData)[0]; index: number }) {
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
            isExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
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

        <div className="relative z-10 font-bold text-[78px] text-center">
          <div>全天汇</div>
          24小时全球数字资产兑换服务
          <div className="text-[18px]">
            安全、快速、合规，支持稳定币与法币兑换，随时随地完成交易
          </div>
          <div className="mt-[80px]">
            <Button className="text-black px-[42px] py-[30px] mx-auto text-[24px] border-none bg-primary font-bold cursor-pointer">
              <span>立即兑换</span>
              <ArrowRightIcon color="black" />
            </Button>
          </div>
        </div>
        <div className="h-[130px] grid grid-cols-4 relative z-10 items-center px-[40px] mt-[150px]">
          {mockExchangeFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`h-[61px] flex items-center ${
                index < mockExchangeFeatures.length - 1
                  ? "border-r border-[#FFFFFF]"
                  : ""
              }`}
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
            </div>
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

        <span className="text-black font-bold text-[68px] relative z-10">
          随时随地地兑换
        </span>
        <div className="mt-[25px] mx-auto w-[756px] h-[533px] rounded-[12px] p-[30px] bg-white shadow-[0_4px_65.5px_0_rgba(0,0,0,0.06)] relative z-10">
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
              <div className="text-[48px] text-[#00000033]">0</div>
            </div>
            <div className="flex items-center text-black text-[28px] space-x-2 font-bold cursor-pointer ml-[30px]">
              <span>选择代币</span>
              <ArrowDownIcon color="#868685" size={20} />
            </div>
          </div>
          <div className="text-[#2C2C2C] mt-[30px] space-y-[15px]">
            <div className="flex justify-between">
              <span className="text-[#9F9F9F]">实时汇率</span>
              <span>0.24AUD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9F9F9F]">手续费</span>
              <span>131.47 SGD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9F9F9F]">预计到账时间</span>
              <span>1小时内</span>
            </div>
          </div>
          <div className="mt-[20px]">
            <Button className="text-black w-full px-[42px] py-[35px] mx-auto text-[24px] border-none bg-primary font-bold cursor-pointer">
              <span>立即兑换</span>
              <ArrowRightIcon color="black" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-[108px] mt-[50px] pb-[50px] flex justify-center space-x-[150px]">
        <div className="text-[52px] text-[#000] pt-[38px]">
          <span className="font-bold">全天汇 24exc</span>
          <div>
            下一代加密货币
            <br />
            兑换平台
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[120px] gap-y-[142px] text-black">
          <div>
            <div className="text-[72px] font-bold">$100B+</div>
            <div className="text-[16px]">截止2025年交易量</div>
          </div>
          <div>
            <div className="text-[72px] font-bold">30+</div>
            <div className="text-[16px]">国家和地区覆盖</div>
          </div>
          <div>
            <div className="text-[72px] font-bold">7x24h</div>
            <div className="text-[16px]">7x24 小时服务</div>
          </div>
          <div>
            <div className="text-[72px] font-bold">95%</div>
            <div className="text-[16px]">用户满意度</div>
          </div>
        </div>
      </div>

      <Introduce />
      <CommentCarousel />

      <div className="px-[108px] py-[120px] bg-[#000] flex justify-center space-x-[150px]">
        <div className="w-[460px] pt-[50px]">
          <div className="text-[68px] font-bold">合作伙伴</div>
          <div className="mt-[24px] text-[20px]">
            我们与国际银行、交易与做市、托管与合规机构建立长期合作网络，覆盖收付结算、流动性、KYC/AML
            与法律合规，全链路支撑 24/7 的全球兑付能力。
          </div>
        </div>

        <div className="w-[700px] grid grid-cols-3 gap-[24px]">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="h-[100px]">
              <img
                src={`/images/line${index + 1}.png`}
                className="h-full"
                alt="partner"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-[118px]">
        <div className="text-[68px] font-bold text-black mb-8">常见问题</div>
        {faqData.map((faq, index) => (
          <FAQItem key={faq.id} faq={faq} index={index} />
        ))}
      </div>
    </div>
  );
}
