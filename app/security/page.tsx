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
      <div className="min-h-[900px] pt-[130px] relative overflow-hidden pb-[40px]">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/images/top_img.webp)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 px-[110px]">
          <motion.div
            className="text-[78px] text-[#fff]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-bold">{t("title")}</span>
            <div className="space-x-[40px] font-bold">
              <span className="text-[#BDEE63]">Security</span>
              <span>&</span>
              <span>Compliance</span>
            </div>
          </motion.div>

          <div className="mt-[113px] flex space-x-[60px] justify-center">
            <motion.img
              src="/images/security/tip3.png"
              className="w-[500px] h-[535px]"
              alt=""
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
            <div className="space-y-[60px]">
              <motion.div
                className="flex space-x-[20px] group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <div className="w-[125px] h-[125px] flex justify-center items-center group-hover:border-l-[4.435px] group-hover:border-[#BDEE63] group-hover:bg-[rgba(189,238,99,0.06)] transition-all duration-300">
                  <SecurityIcon1 />
                </div>
                <div>
                  <div className="text-[39px] font-bold">{t("securityMeasures")}</div>
                  <div className="text-[32px]">
                    {t("securityMeasuresDesc")}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex space-x-[20px] group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <div className="w-[125px] h-[125px] flex justify-center items-center group-hover:border-l-[4.435px] group-hover:border-[#BDEE63] group-hover:bg-[rgba(189,238,99,0.06)] transition-all duration-300">
                  <SecurityIcon2 />
                </div>
                <div>
                  <div className="text-[39px] font-bold">{t("complianceStatement")}</div>
                  <div className="text-[32px]">{t("complianceStatementDesc")}</div>
                </div>
              </motion.div>
              <motion.div
                className="flex space-x-[20px] group cursor-pointer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              >
                <div className="w-[125px] h-[125px] flex justify-center items-center group-hover:border-l-[4.435px] group-hover:border-[#BDEE63] group-hover:bg-[rgba(189,238,99,0.06)] transition-all duration-300">
                  <SecurityIcon3 />
                </div>
                <div>
                  <div className="text-[39px] font-bold">{t("protectionMechanism")}</div>
                  <div className="text-[32px]">
                    {t("protectionMechanismDesc")}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000] px-[110px] flex items-start py-[120px]">
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
            className="w-[130px] h-[60px]"
            alt=""
          />
        </motion.div>
        <motion.div
          className="text-[24px] text-white/60"
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
