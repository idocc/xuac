"use client";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import icon1 from "@/assets/home/icon1.svg";
import icon2 from "@/assets/home/icon2.svg";
import icon3 from "@/assets/home/icon3.svg";
import icon4 from "@/assets/home/icon4.svg";
import { useState, useEffect, useRef } from "react";

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
      "目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。目前支持主流数字货币 BTC、ETH、USDT,以及 USD、EUR、CNY、BRL、INR 等多种法币，未来会持续拓展更多币种和市场。",
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

function Introduce() {
  const [isProductServiceExpanded, setIsProductServiceExpanded] =
    useState(false);

  const toggleProductService = () => {
    setIsProductServiceExpanded(!isProductServiceExpanded);
  };

  return (
    <div className="relative py-[90px]">
      <div>
        <div
          className="px-[108px] pr-[40px] text-[#000] relative group cursor-pointer hover-effect"
          onClick={toggleProductService}
        >
          <div className="border-b border-[#000] flex justify-between items-center py-[20px]">
            <span className="text-[72px] font-bold">使用流程</span>
            <span
              className={`text-[40px] transition-transform duration-300 ease-in-out ${isProductServiceExpanded ? "rotate-45" : "rotate-0"}`}
            >
              {isProductServiceExpanded ? "-" : "+"}
            </span>
          </div>
        </div>

        {/* 可展开/收起的内容区域 */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isProductServiceExpanded
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-[108px] py-[50px] grid grid-cols-3 gap-[80px] place-items-center">
            <div className="bg-[#BDEE63] w-[420px]">
              <div className="text-[#000] text-[32px] font-bold pt-[30px] pl-[30px]">
                STEP ONE
              </div>
              <img
                src="/images/icon1.png"
                alt="step_one"
                className="w-[340px] h-[172px] mx-auto my-[20px]"
              />
              <div className="p-[30px] text-[#fff] bg-[#000]">
                <div className="text-[32px] font-bold">联系客服</div>
                <div className="text-[#D5D5D5] text-[18px]">
                  通过在线客服、Telegram、WhatsApp
                  等方式提交兑换需求（币种与金额）。
                </div>
              </div>
            </div>

            <div className="w-[420px]">
              <img
                src="/images/icon2.png"
                alt="step_one"
                className="w-[340px] h-[172px] mx-auto my-[20px]"
              />
              <div className="p-[30px] text-[#000]">
                <div className="text-[32px] font-bold">支付与收款</div>
                <div className="text-[#5F5F5F] text-[18px]">
                  客户将数字货币转入指定地址，平台在确认到账后快速完成法币结算。
                </div>
              </div>
            </div>

            <div className="w-[420px]">
              <img
                src="/images/icon3.png"
                alt="step_one"
                className="w-[340px] h-[172px] mx-auto my-[20px]"
              />
              <div className="p-[30px] text-[#000]">
                <div className="text-[32px] font-bold">交易完成</div>
                <div className="text-[#5F5F5F] text-[18px]">
                  兑换成功，客户可实时查询订单进度，交易全程透明可追踪。
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
  return (
    <div>
      <div className="min-h-[900px] pt-[140px] relative overflow-hidden">
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
        <div className="h-[130px] grid grid-cols-4 relative z-10 items-center px-[40px] mt-[170px]">
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

      <div className="h-[790px] px-[108px] py-[120px] bg-[#000] flex justify-center space-x-[60px]">
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
