"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ContactCategory {
  title: string;
  description: string;
}

const categories: ContactCategory[] = [
  {
    title: "资产与赎回",
    description: "铸造 / 赎回、费用与时效、储备与 Proof Dashboard 相关问题",
  },
  {
    title: "账户与合规验证",
    description: "钱包绑定、KYC/AML、可服务地区与验证进度",
  },
  {
    title: "安全与技术问题",
    description: "资产安全、可疑交易、Bug 反馈、接口与集成异常",
  },
  {
    title: "合作与媒体联系",
    description: "钱包/交易所集成、机构合作、媒体与品牌素材请求",
  },
  {
    title: "支付与结算支持",
    description: "链上转账异常、Gas 费用问题、跨链桥使用疑问与结算延迟说明",
  },
  {
    title: "产品与功能咨询",
    description: "XAUC 功能说明、价格与锚定机制、兑换流程、使用限制与常见问题",
  },
];

const DecorativeText = () => {
  const [displayText, setDisplayText] = useState([
    "9267BDCHBSHBCJHABCHSBCHSBCHBCSCHSBDCNJDH",
    "DSVDAVSADCSASHBCJHABCHSBCHSBCHBCSCHSBDCN", 
    "ACBHSAHJBCJKSBCJKSJNCKJSNCJKSNCJKNSCJKJK"
  ]);

  // 生成随机字母
  const getRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return letters[Math.floor(Math.random() * letters.length)];
  };

  // 随机替换字符串中的字符
  const randomizeString = (str: string) => {
    return str.split('').map(char => {
      // 30% 概率替换字符
      return Math.random() < 0.3 ? getRandomLetter() : char;
    }).join('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => prev.map(line => randomizeString(line)));
    }, 150); // 每150ms更新一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 font-['IBM_Plex_Mono',monospace] text-[24px] leading-[25.6px] not-italic opacity-[0.42] text-black tracking-[4.8px] pointer-events-none overflow-hidden">
      {displayText.map((line, index) => (
        <p key={index} className="whitespace-pre-wrap">{line}</p>
      ))}
    </div>
  );
};

const CategoryCard = ({ title, description }: ContactCategory) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact-form');
  };

  return (
    <div 
      className="relative flex flex-col gap-5 items-start w-full max-w-[553px] pb-[138px] cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      {/* Decorative background text */}
      <div className="relative w-full h-[221px] mb-[-138px]">
        <DecorativeText />
        
        {/* Title box - centered */}
        <div className="absolute left-1/2 top-[19px] -translate-x-1/2 bg-[#0e0e11] flex items-center justify-center h-[42px] px-[10px] py-[10px] hover:bg-[#1a1a1f] transition-colors">
          <div className="font-['IBM_Plex_Mono',monospace] text-[32px] text-white tracking-[-0.32px] whitespace-nowrap leading-[46px]" style={{ fontVariationSettings: "'wght' 400" }}>
            {title}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="font-['IBM_Plex_Mono',monospace] text-[24px] leading-[40px] text-black text-center tracking-[-0.24px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        {description}
      </p>
    </div>
  );
};

export const ContactCategoriesSection = () => {
  return (
    <section className="relative w-full bg-white pt-[124px] pb-[76px] px-4">
      <div className="mx-auto w-full max-w-[1168px]">
        <div className="flex flex-col gap-[76px] items-start">
          {/* First row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-[76px] w-full">
            <CategoryCard {...categories[0]} />
            <CategoryCard {...categories[1]} />
          </div>

          {/* Second row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-[76px] w-full">
            <CategoryCard {...categories[2]} />
            <CategoryCard {...categories[3]} />
          </div>

          {/* Third row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-[76px] w-full">
            <CategoryCard {...categories[4]} />
            <CategoryCard {...categories[5]} />
          </div>
        </div>
      </div>
    </section>
  );
};

