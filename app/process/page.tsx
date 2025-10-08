"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// FAQ项组件
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
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
          <div className="font-bold">{question}</div>
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
          {answer}
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const t = useTranslations("ProcessPage");

  const processSteps = [
    {
      id: 1,
      icon: "/images/process/WhatsappLogo.png",
      title: t("contactSupport"),
      description: t("contactSupportDesc"),
    },
    {
      id: 2,
      icon: "/images/process/MoneyWavy.png",
      title: t("paymentReceipt"),
      description: t("paymentReceiptDesc"),
    },
    {
      id: 3,
      icon: "/images/process/Checks.png",
      title: t("transactionComplete"),
      description: t("transactionCompleteDesc"),
    },
  ];

  const faqData = [
    {
      id: 1,
      question: t("faq1Question"),
      answer: t("faq1Answer"),
    },
    {
      id: 2,
      question: t("faq2Question"),
      answer: t("faq2Answer"),
    },
    {
      id: 3,
      question: t("faq3Question"),
      answer: t("faq3Answer"),
    },
    {
      id: 4,
      question: t("faq4Question"),
      answer: t("faq4Answer"),
    },
  ];
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
            {t("title")}
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
              {t("faqTitle")}
            </motion.div>

            <div>
              {faqData.map((faq, index) => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
