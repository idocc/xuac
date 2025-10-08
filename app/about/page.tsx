"use client";
import {
  AboutIcon1,
  AboutIcon2,
  AboutIcon3,
  AboutIcon4,
} from "@/components/icons";
import { Button } from "@heroui/button";
import { ArrowRightIcon } from "@/components/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("AboutPage");
  const tNews = useTranslations("NewsPage");

  // 构建国际化的新闻列表
  const newsList = [1, 2, 3].map((id) => ({
    id,
    image: `/images/about/new${id}.png`,
    title: tNews(`newsList.${id - 1}.title`),
    description: tNews(`newsList.${id - 1}.description`),
    date: tNews(`newsList.${id - 1}.date`),
  }));
  
  return (
    <div className="bg-[#000] pt-[120px]">
      {/* 标题区域 */}
      <motion.div
        className="text-center text-[78px] font-bold relative h-[450px]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>{t("title")}</div>
        <div className="text-[#BDEE63]">About Us</div>
        <motion.img
          src="/images/about/logo.png"
          className="w-[380px] h-[340px] absolute top-[130px] left-[50%] translate-x-[-50%]"
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* 副标题 */}
      <motion.div
        className="text-[40px] font-bold flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <AboutIcon4 width={46} height={60} color="#BDEE63" />
        {t("platformName")}
        <div className="rotate-180">
          <AboutIcon4 width={46} height={60} color="#BDEE63" />
        </div>
      </motion.div>

      {/* 我们的愿景标题 */}
      <motion.div
        className="bg-[#BDEE63] mx-auto mt-[90px] w-[810px] flex justify-center items-center h-[77px] text-[#000] text-[50px] font-blod"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {t("visionTitle")}
      </motion.div>

      {/* 愿景描述 */}
      <motion.div
        className="text-[#FFFFFFCC] text-[24px] font-bold mx-auto mt-[30px] w-[810px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("visionDesc")}
      </motion.div>

      {/* SAY NO 区块 */}
      <motion.div
        className="bg-[#BDEE630F] w-[810px] h-[170px] mx-auto mt-[60px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center pr-[5px]">
          <motion.div
            className="w-[215px] bg-[#BDEE63] h-[90px] text-[#000] flex items-center justify-center text-[50px] font-bold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("sayNo")}
          </motion.div>
          <motion.div
            className="text-[#fff] text-[26px] font-bold"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("breakBarriers")}
          </motion.div>
        </div>
        <div className="flex h-[80px] px-[10px] justify-between items-center text-[#D9D9D9] text-[22px] font-bold">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AboutIcon1 size={30} color="#D9D9D9" />
            <span>{t("timeLimit")}</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AboutIcon2 size={30} color="#D9D9D9" />
            <span>{t("locationLimit")}</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AboutIcon3 size={30} color="#D9D9D9" />
            <span>{t("securityLack")}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* ARE YOU IN */}
      <motion.div
        className="text-[#BDEE63] text-[94px] font-bold text-center my-[120px]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {t("areYouIn")}
      </motion.div>

      {/* 近期活动 */}
      <div className="mx-auto max-w-[1220px] pb-[150px]">
        <motion.div
          className="text-[48px] font-bold flex justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span>{t("recentActivities")}</span>
          <Button className="text-black px-[20px] py-[30px] rounded-[4px] text-[20px] border-none bg-primary font-bold cursor-pointer">
            <span>{t("viewMore")}</span>
            <ArrowRightIcon color="black" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
          {newsList.slice(0, 3).map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link className="cursor-pointer" href={`/new/${news.id}`}>
                <img src={news.image} className="h-[300px]" alt={news.title} />
                <div className="mt-[30px] text-[18px]">{news.date}</div>
                <div className="text-[24px] font-bold truncate">{news.title}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
