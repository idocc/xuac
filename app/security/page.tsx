"use client";
import {
  SecurityIcon1,
  SecurityIcon2,
  SecurityIcon3,
} from "@/components/icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Security() {
  const t = useTranslations("SecurityPage");
  return (
    <div>
      <div className="min-h-[600px] lg:min-h-[900px] pt-[80px] lg:pt-[130px] relative overflow-hidden pb-[40px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/allbg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 px-[20px] lg:px-[110px]">
          <motion.div
            className="text-[30px] lg:text-[78px] text-[#fff] text-center lg:text-left"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold">{t("title")}</span>
            <div className="space-x-[16px] lg:space-x-[40px] font-bold">
              <span className="text-[#BDEE63]">Three Layers of</span>
              <span>Protection</span>
            </div>
          </motion.div>

          <div className="mt-[60px] lg:mt-[113px] flex flex-col lg:flex-row space-y-[40px] lg:space-y-0 lg:space-x-[60px] items-center lg:justify-center">
            <motion.img
              src="/images/security/tip3.png"
              className="w-[280px] h-[300px] lg:w-[500px] lg:h-[535px]"
              alt=""
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
            <div className="space-y-[30px] lg:space-y-[60px]">
              <motion.div
                className="flex space-x-[16px] lg:space-x-[20px] group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <div className="w-[70px] h-[70px] lg:w-[125px] lg:h-[125px] flex justify-center items-center group-hover:border-l-[4.435px] group-hover:border-[#BDEE63] group-hover:bg-[rgba(189,238,99,0.06)] transition-all duration-300 shrink-0">
                  <SecurityIcon1 />
                </div>
                <div>
                  <div className="text-[20px] lg:text-[39px] font-bold">{t("securityMeasures")}</div>
                  <div className="text-[16px] lg:text-[32px]">
                    {t("securityMeasuresDesc")}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex space-x-[16px] lg:space-x-[20px] group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <div className="w-[70px] h-[70px] lg:w-[125px] lg:h-[125px] flex justify-center items-center group-hover:border-l-[4.435px] group-hover:border-[#BDEE63] group-hover:bg-[rgba(189,238,99,0.06)] transition-all duration-300 shrink-0">
                  <SecurityIcon2 />
                </div>
                <div>
                  <div className="text-[20px] lg:text-[39px] font-bold">{t("complianceStatement")}</div>
                  <div className="text-[16px] lg:text-[32px]">{t("complianceStatementDesc")}</div>
                </div>
              </motion.div>
              <motion.div
                className="flex space-x-[16px] lg:space-x-[20px] group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              >
                <div className="w-[70px] h-[70px] lg:w-[125px] lg:h-[125px] flex justify-center items-center group-hover:border-l-[4.435px] group-hover:border-[#BDEE63] group-hover:bg-[rgba(189,238,99,0.06)] transition-all duration-300 shrink-0">
                  <SecurityIcon3 />
                </div>
                <div>
                  <div className="text-[20px] lg:text-[39px] font-bold">{t("protectionMechanism")}</div>
                  <div className="text-[16px] lg:text-[32px]">
                    {t("protectionMechanismDesc")}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000] px-[20px] lg:px-[110px] flex flex-col lg:flex-row items-start space-y-[20px] lg:space-y-0 py-[60px] lg:py-[120px]">
        <motion.div
          className="flex items-center shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span>-</span>
          <img
            src="/images/security/safe.png"
            className="w-[90px] h-[42px] lg:w-[130px] lg:h-[60px]"
            alt=""
          />
        </motion.div>
        <motion.div
          className="text-[16px] lg:text-[24px] text-white/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t("detailDescription")}
        </motion.div>
      </div>
    </div>
  );
}
