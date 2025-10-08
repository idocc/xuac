"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Product() {
  const t = useTranslations("ProductPage");
  return (
    <div>
      <div className="min-h-[520px] pt-[130px] relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/images/top_img.webp)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          className="relative z-10 pl-[110px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[78px] text-[#fff]">
            <motion.span
              className="font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("title")}
            </motion.span>
            <motion.div
              className="space-x-[40px] font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-[#BDEE63]">Products</span>
              <span>&</span>
              <span>Services</span>
            </motion.div>
            <motion.div
              className="text-[28px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("tagline")}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="px-[120px] py-[60px] text-[#000]">
        <motion.div
          className="font-bold text-[32px] mb-[20px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("supportedCrypto")}
        </motion.div>
        <div className="grid grid-cols-3 gap-x-[60px]">
          <motion.img
            src="/images/product/11.png"
            className="w-full"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.img
            src="/images/product/12.png"
            className="w-full"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src="/images/product/13.png"
            className="w-full"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <motion.div
          className="font-bold text-[32px] mb-[20px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("supportedFiat")}
        </motion.div>
        <div className="grid grid-cols-3 gap-x-[60px] mb-[20px]">
          <motion.img
            src="/images/product/1.png"
            className="w-full"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.img
            src="/images/product/2.png"
            className="w-full"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src="/images/product/3.png"
            className="w-full"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>
      </div>

      <div className="bg-[#BDEE63] relative px-[108px] py-[120px]">
        <motion.img
          src="/images/product/circle.png"
          alt=""
          className="absolute top-0 right-0 w-[574px]"
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="text-[60px] font-bold text-[#000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("serviceModesTitle")}
        </motion.div>

        <div className="flex justify-between gap-x-[28px] mt-[72px]">
          <motion.div
            className="border border-[#000] rounded-[4px] w-[400px] group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/product/21.png"
              alt=""
              className="w-[300px] h-[300px] mx-auto mt-[20px]"
            />
            <div className="h-[90px] text-[32px] font-bold text-[#000] flex items-center pl-[24px] group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
              {t("normalExchange")}
            </div>
          </motion.div>
          <motion.div
            className="border border-[#000] rounded-[4px] w-[400px] group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/product/22.png"
              alt=""
              className="w-[300px] h-[300px] mx-auto mt-[20px]"
            />
            <div className="h-[90px] text-[32px] font-bold text-[#000] flex items-center pl-[24px] group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
              {t("bulkExchange")}
            </div>
          </motion.div>
          <motion.div
            className="border border-[#000] rounded-[4px] w-[400px] group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/product/23.png"
              alt=""
              className="w-[300px] h-[300px] mx-auto mt-[20px]"
            />
            <div className="h-[90px] text-[32px] font-bold text-[#000] flex items-center pl-[24px] group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
              {t("apiIntegration")}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-[108px] py-[60px]">
        <motion.div
          className="text-[60px] font-bold text-[#000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("scenariosTitle")}
        </motion.div>

        <div>
          <motion.div
            className="mt-[24px] flex text-[#000] text-[24px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>-</span>
            <img
              src="/images/product/article.png"
              className="w-[60px] h-[60px]"
              alt=""
            />
            <div>
              <span className="font-bold text-[28px]">{t("personalWithdrawal")}</span>
              {t("personalWithdrawalDesc")}
            </div>
          </motion.div>

          <motion.div
            className="mt-[24px] flex text-[#000] text-[24px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>-</span>
            <img
              src="/images/product/article.png"
              className="w-[60px] h-[60px]"
              alt=""
            />
            <div>
              <span className="font-bold text-[28px]">{t("crossBorderSettlement")}</span>
              {t("crossBorderSettlementDesc")}
            </div>
          </motion.div>

          <motion.div
            className="mt-[24px] flex text-[#000] text-[24px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>-</span>
            <img
              src="/images/product/article.png"
              className="w-[60px] h-[60px]"
              alt=""
            />
            <div>
              <span className="font-bold text-[28px]">{t("fiatDeposit")}</span>
              {t("fiatDepositDesc")}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
