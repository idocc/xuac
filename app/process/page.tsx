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
        <div className="flex items-center justify-between text-white lg:text-[18px] text-[16px]">
          <div className="font-bold">{question}</div>
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-90" : "rotate-0"
            }`}
          >
            <div className="bg-[#C1FE8A26] rounded-full lg:w-[48px] w-[30px] lg:h-[48px] h-[30px] flex items-center justify-center pb-[3px] lg:text-[28px] text-[14px] text-[#C1FE8A]">
              +
            </div>
          </div>
        </div>

        {/* 答案部分 - 在下方显示 */}
        <div
          className={`lg:text-[18px] text-[16px] font-medium text-white transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded
              ? "max-h-[300px] opacity-100 mt-[20px]"
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
      <div className="bg-[#000] lg:pt-[120px] pt-[30px] px-[12px]">
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            src="/images/process/top.png"
            className="lg:w-[270px] lg:h-[220px] w-[68px] h-[55px]"
            alt=""
          />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:text-[78px] text-[36px] font-bold"
          >
            {t("title")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:text-[78px] text-[36px] font-bold"
          >
            <span className="text-[#BDEE63]">Simple.</span>
            <span className="mx-[10px]">Secure.</span>
            <span className="text-[#BDEE63]">Seamless.</span>
          </motion.span>

          <div className="lg:py-[120px] py-[30px]">
            {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="lg:mb-[180px] mt-[60px] border border-[#BDEE63] bg-[#BDEE630D] lg:p-[24px] p-[12px] lg:w-[500px] w-[300px] relative"
                >
                  <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] bg-[#BDEE63] absolute flex items-center justify-end lg:top-[-61px] top-[-30px] lg:left-[-60px] left-[-30px]">
                    <div className="relative lg:right-[-20px] right-[-10px]">
                      <span className="lg:text-[32px] text-[16px] text-[#000] font-bold">
                        -0
                      </span>
                      <span className="lg:text-[32px] text-[16px] text-[#fff] font-bold ml-[2px]">
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute lg:top-[-21px] top-[-10px] lg:right-[-20px] right-[-10px] lg:w-[20px] w-[10px] lg:h-[20px] h-[10px] bg-[#BDEE63]"></div>
                  </div>

                  <div className="flex items-center">
                    <img
                      src={step.icon}
                      className="w-[32px]"
                      alt=""
                    />
                    <span className="lg:text-[32px] text-[16px] font-bold lg:ml-[20px] ml-[10px]">
                      {step.title}
                    </span>
                  </div>
                  <div className="text-[#D5D5D5] lg:text-[24px] text-[16px] lg:mt-[20px] mt-[10px]">
                    {step.description}
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="w-full lg:px-[108px] lg:pb-[120px] pb-[30px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-left lg:text-[55px] text-[36px] font-bold lg:mb-[40px] mb-[20px]"
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
