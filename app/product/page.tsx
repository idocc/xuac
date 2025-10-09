"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Product() {
  const t = useTranslations("ProductPage");
  return (
    <div>
      <div className="lg:min-h-[520px] min-h-[300px] lg:pt-[130px] pt-[80px] py relative overflow-hidden">
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
          className="relative z-10 lg:pl-[110px] text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="lg:text-[78px] text-[36px] text-[#fff]">
            <motion.span
              className="font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("title")}
            </motion.span>
            <motion.div
              className="lg:space-x-[40px] font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-[#BDEE63]">Products</span>
              <span>&</span>
              <span>Services</span>
            </motion.div>
            <motion.div
              className="lg:text-[28px] text-[14px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("tagline")}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="lg:px-[120px] px-[12px] py-[60px] text-[#000]">
        {/* Desktop: 上下布局 */}
        <div className="hidden lg:block">
          <motion.div
            className="font-bold lg:text-[32px] text-[20px] mb-[20px]"
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
            className="font-bold lg:text-[32px] text-[20px] mb-[20px] mt-[40px]"
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

        {/* Mobile: 左右布局 */}
        <div className="lg:hidden flex gap-x-[20px]">
          {/* 左侧：支持币种 */}
          <div className="flex-1">
            <motion.div
              className="font-bold text-[20px] mb-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {t("supportedCrypto")}
            </motion.div>
            <div className="flex flex-col gap-y-[20px]">
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
          </div>

          {/* 右侧：支持法币 */}
          <div className="flex-1">
            <motion.div
              className="font-bold text-[20px] mb-[20px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {t("supportedFiat")}
            </motion.div>
            <div className="flex flex-col gap-y-[20px]">
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
        </div>
      </div>

      <div className="bg-[#BDEE63] relative lg:px-[108px] py-[120px] flex flex-col items-center lg:block">
        <motion.img
          src="/images/product/circle.png"
          alt=""
          className="absolute top-0 right-0 lg:w-[574px] w-[180px]"
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="lg:text-[60px] text-[30px] font-bold text-[#000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("serviceModesTitle")}
        </motion.div>

        <div className="lg:flex lg:justify-between lg:gap-x-[28px] mt-[72px] space-y-[30px] lg:space-y-0">
          {[
            { image: "/images/product/21.png", key: "normalExchange" },
            { image: "/images/product/22.png", key: "bulkExchange" },
            { image: "/images/product/23.png", key: "apiIntegration" },
          ].map((item, index) => (
            <motion.div
              key={item.key}
              className="border border-[#000] rounded-[4px] lg:w-[400px] w-[300px] group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              // whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt=""
                className="lg:w-[300px] lg:h-[300px] w-[220px] mx-auto mt-[20px]"
              />
              <div className="lg:bg-transparent bg-[#000] h-[90px] text-[32px] font-bold lg:text-[#000] text-[#BDEE63] flex items-center pl-[24px] lg:group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
                {t(item.key)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:px-[108px] px-[12px] py-[60px]">
        <motion.div
          className="lg:text-[60px] text-[36px] font-bold text-[#000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("scenariosTitle")}
        </motion.div>

        <div>
          {[
            { title: "personalWithdrawal", desc: "personalWithdrawalDesc" },
            { title: "crossBorderSettlement", desc: "crossBorderSettlementDesc" },
            { title: "fiatDeposit", desc: "fiatDepositDesc" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="mt-[24px] flex text-[#000] lg:text-[24px] text-[16px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <span>-</span>
              <img
                src="/images/product/article.png"
                className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]"
                alt=""
              />
              <div>
                <span className="font-bold lg:text-[28px] text-[14px]">{t(item.title)}</span>
                {t(item.desc)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
