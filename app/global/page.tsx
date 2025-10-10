"use client";

import { Logo } from "@/components/icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Global() {
  const t = useTranslations("GlobalPage");
  const countriesTop = t.raw("countriesTop") as string[];
  const countriesBottom = t.raw("countriesBottom") as string[];

  const specialSupport = [
    {
      title: t("brazil"),
      description: t("brazilDesc"),
    },
    {
      title: t("europe"),
      description: t("europeDesc"),
    },
    {
      title: t("southeastAsia"),
      description: t("southeastAsiaDesc"),
    },
    {
      title: t("india"),
      description: t("indiaDesc"),
    },
  ];
  return (
    <div>
      <div className="h-[300px] lg:h-[530px] pt-[80px] lg:pt-[130px] relative overflow-hidden">
        <motion.div
          className="text-[30px] lg:text-[78px] text-[#000] pl-[20px] lg:pl-[130px] relative text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-bold">{t("title")}</span>
          <div className="space-x-[16px] lg:space-x-[40px] font-bold">
            <span className="text-[#BDEE63]">
              Covering 30+
              <br/>
              <span>countries</span> 
              <span className="text-[#000] ml-[20px]">worldwide</span>
            </span>
          </div>
          <motion.img
            src="/images/global/earth.webp"
            alt=""
            className="absolute top-[50px] right-[20px] lg:right-[108px] w-[180px] lg:w-[400px]"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      <div className="min-h-[400px] lg:min-h-[550px] flex flex-col items-center bg-[#000] relative">
        <div className="pt-[80px] lg:pt-[150px] px-[20px] lg:px-0">
          <img
            src="/images/global/top_line.png"
            className="w-[300px] h-[110px] lg:w-[810px] lg:h-[300px] absolute top-[10px] lg:top-[20px] left-[50%] translate-x-[-50%]"
            alt=""
          />
          <motion.div
            className="w-full lg:w-[980px] mx-auto flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Logo size={60} className="lg:w-[100px] lg:h-[100px]" />
            <motion.div
              className="text-[14px] lg:text-[20px] mt-[30px] lg:mt-[50px] text-center leading-[24px] lg:leading-[40px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t("intro")}
            </motion.div>
          </motion.div>
        </div>

        {/* First row - scrolling right */}
        <div className="w-full overflow-hidden mt-[20px] lg:mt-[30px]">
          <div className="flex gap-[8px] lg:gap-[12px] animate-scroll-right">
            {[...countriesTop, ...countriesTop].map((country, index) => (
              <div
                key={index}
                className="bg-[#FF6D7F26] text-[#fff] opacity-70 flex justify-center items-center px-[20px] lg:px-[30px] h-[40px] lg:h-[58px] text-[12px] lg:text-[16px] border border-[#FF6D7F40] rounded-[200px] whitespace-nowrap transition-all duration-300 hover:bg-[#1BA27A40] hover:border-[#1BA27A] hover:opacity-100 cursor-pointer flex-shrink-0"
              >
                {country}
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling left */}
        <div className="w-full overflow-hidden mt-[12px] lg:mt-[20px]">
          <div className="flex gap-[8px] lg:gap-[12px] animate-scroll-left">
            {[...countriesBottom, ...countriesBottom].map((country, index) => (
              <div
                key={index}
                className="bg-[#FF6D7F26] text-[#fff] opacity-70 flex justify-center items-center px-[20px] lg:px-[30px] h-[40px] lg:h-[58px] text-[12px] lg:text-[16px] border border-[#FF6D7F40] rounded-[200px] whitespace-nowrap transition-all duration-300 hover:bg-[#1BA27A40] hover:border-[#1BA27A] hover:opacity-100 cursor-pointer flex-shrink-0"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center px-[20px] overflow-hidden lg:px-0">
        <motion.div
          className="text-[30px] lg:text-[140px] font-bold opacity-40 text-[#BDEE63] overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Global Reache Global
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-[200px] space-y-[60px] lg:space-y-0 min-h-[500px] lg:min-h-[760px] pb-[40px] lg:pb-0">
          <motion.div
            className="relative w-[200px] h-[187px] lg:w-[520px] lg:h-[500px] mt-[100px] lg:mt-[190px] bg-[url('/images/global/c_bg.png')] bg-cover bg-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-[-35%] right-[5%]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#000] text-left text-[18px] lg:text-[42px] font-bold text-[#BDEE63]">
                {t("brazil")}
              </div>
              <img
                src="/images/global/c1.png"
                alt=""
                className="w-[110px] h-[67px] lg:w-[280px] lg:h-[170px]"
              />
            </motion.div>

            <motion.div
              className="absolute top-[5%] left-[-5%]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#000] text-left text-[18px] lg:text-[42px] font-bold text-[#BDEE63]">
                {t("india")}
              </div>
              <img
                src="/images/global/c2.png"
                alt=""
                className="w-[110px] h-[67px] lg:w-[280px] lg:h-[170px]"
              />
            </motion.div>

            <motion.div
              className="absolute top-[20%] right-[-25%]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#000] text-left text-[18px] lg:text-[42px] font-bold text-[#BDEE63]">
                {t("uk")}
              </div>
              <img
                src="/images/global/c3.png"
                alt=""
                className="w-[110px] h-[67px] lg:w-[280px] lg:h-[170px]"
              />
            </motion.div>

            <motion.div
              className="absolute top-[60%] right-[30%]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#000] text-left text-[18px] lg:text-[42px] font-bold text-[#BDEE63]">
                {t("thailand")}
              </div>
              <img
                src="/images/global/c4.png"
                alt=""
                className="w-[110px] h-[67px] lg:w-[280px] lg:h-[170px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto"
          >
            <motion.div
              className="text-[#000] text-[24px] lg:text-[60px] font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("specialSupportTitle")}
            </motion.div>
            <div className="space-y-[20px] lg:space-y-[40px] mt-[30px] lg:mt-[50px]">
              {specialSupport.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-[#000] flex text-[14px] lg:text-[28px]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start shrink-0">
                    <span>-</span>
                    <img
                      src="/images/product/article.png"
                      className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                      alt=""
                    />
                  </div>
                  <div className="w-full lg:w-[430px] text-left">
                    {item.title}:{item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="text-[30px] lg:text-[140px] font-bold opacity-40 text-[#BDEE63] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Global Reache Global{" "}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          width: max-content;
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
          width: max-content;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
