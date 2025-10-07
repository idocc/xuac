"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// 流程步骤数据
const processSteps = [
  {
    id: 1,
    icon: "/images/process/WhatsappLogo.png",
    title: "联系客服",
    description: "通过在线客服、Telegram、WhatsApp 等方式提交兑换需求（币种与金额）。",
  },
  {
    id: 2,
    icon: "/images/process/MoneyWavy.png",
    title: "支付与收款",
    description: "通过在线客服、Telegram、WhatsApp 等方式提交兑换需求（币种与金额）。",
  },
  {
    id: 3,
    icon: "/images/process/Checks.png",
    title: "交易完成",
    description: "通过在线客服、Telegram、WhatsApp 等方式提交兑换需求（币种与金额）。",
  },
];

// FAQ数据
const faqData = [
  {
    id: 1,
    question: "我可以向谁汇寄新加坡元 (SGD)?",
    answer: "您可以向任何拥有新加坡银行账户的个人或企业汇寄新加坡元。我们支持主流新加坡银行的转账服务，包括 DBS、OCBC、UOB 等。只需提供收款人的银行账户信息，我们将在确认您的数字货币到账后，快速完成新加坡元的转账。",
  },
  {
    id: 2,
    question: "我的资金是否安全？",
    answer: "您的资金安全是我们的首要任务。我们采用多重安全措施保护您的资产：包括冷热钱包分离存储、多重签名技术、实时风控监测系统，以及严格的 KYC/AML 合规流程。所有交易均通过加密通道传输，资金由专业托管机构隔离保管，确保您的资产安全可靠。",
  },
  {
    id: 3,
    question: "是否需要实名认证(KYC)",
    answer: "为了符合国际反洗钱(AML)和了解您的客户(KYC)法规要求，我们需要对用户进行身份验证。小额交易可能只需要基本信息，而大额交易则需要提供身份证明文件。这不仅是法律要求，也是保护您资金安全的重要措施。认证流程简单快捷，通常在几分钟内即可完成。",
  },
  {
    id: 4,
    question: "手续费是多少？",
    answer: "我们的手续费根据交易金额和币种有所不同，但始终保持透明公开。一般来说，手续费在 0.5%-2% 之间，具体费率会在您确认交易前明确显示。大额交易可享受更优惠的费率。我们承诺无隐藏费用，所有成本都会在交易前清楚列明，让您放心交易。",
  },
];

// FAQ项组件
function FAQItem({ faq, index }: { faq: (typeof faqData)[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-[#fff]"
    >
      <div
        className="min-h-[80px] py-[20px] cursor-pointer"
        onClick={toggleExpanded}
      >
        {/* 问题行 */}
        <div className="flex items-center justify-between text-white text-[18px]">
          <div className="font-bold">{faq.question}</div>
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
          >
            <div className="bg-[#C1FE8A26] rounded-full w-[48px] h-[48px] flex items-center justify-center pb-[3px] text-[28px] text-[#C1FE8A]">
              +
            </div>
          </div>
        </div>

        {/* 答案部分 - 在下方显示 */}
        <div
          className={`text-[18px] font-medium text-white transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded
              ? "max-h-[200px] opacity-100 mt-[20px]"
              : "max-h-0 opacity-0"
          }`}
        >
          {faq.answer}
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <div>
      <div className="bg-[#000] pt-[120px]">
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            src="/images/process/top.png"
            className="w-[270px] h-[220px]"
            alt=""
          />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[78px] font-bold"
          >
            使用流程
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[78px] font-bold"
          >
            <span>How it</span>
            <span className="text-[#BDEE63] ml-[20px]">Works</span>
          </motion.span>

          <div className="pb-[120px]">
            {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="mt-[180px] border border-[#BDEE63] bg-[#BDEE630D] p-[24px] w-[500px] relative"
                >
                  <div className="w-[60px] h-[60px] bg-[#BDEE63] absolute flex items-center justify-end top-[-61px] left-[-60px]">
                    <div className="relative right-[-20px]">
                      <span className="text-[32px] text-[#000] font-bold">
                        -0
                      </span>
                      <span className="text-[32px] text-[#fff] font-bold ml-[2px]">
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute top-[-21px] right-[-20px] w-[20px] h-[20px] bg-[#BDEE63]"></div>
                  </div>

                  <div className="flex items-center">
                    <img
                      src={step.icon}
                      className="w-[32px]"
                      alt=""
                    />
                    <span className="text-[32px] font-bold ml-[20px]">
                      {step.title}
                    </span>
                  </div>
                  <div className="text-[#D5D5D5] text-[24px] mt-[20px]">
                    {step.description}
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="w-full px-[108px] pb-[120px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-left text-[55px] font-bold mb-[40px]"
            >
              常见问题Q&A
            </motion.div>

            <div>
              {faqData.map((faq, index) => (
                <FAQItem key={faq.id} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
