"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// News images mapping
const newsImages = [
  "/images/about/new1.png",
  "/images/about/new2.png",
  "/images/about/new3.png",
];

export default function New() {
  const t = useTranslations("NewsPage");
  
  // Get newsList from translations
  const newsList = [1, 2, 3].map((id) => ({
    id,
    image: newsImages[id - 1],
    title: t(`newsList.${id - 1}.title`),
    description: t(`newsList.${id - 1}.description`),
    date: t(`newsList.${id - 1}.date`),
  }));

  return (
    <div>
      <div className="h-[520px] pt-[130px] relative bg-[#000]">
        <motion.div
          className="text-[78px] text-[#fff] pl-[130px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-bold">{t("title")}</span>
          <div className="space-x-[40px] font-bold">{t("subtitle")}</div>
        </motion.div>
      </div>

      <div className="p-[108px]">
        <div className="space-y-[60px]">
          {newsList.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/new/${news.id}`}
                className="flex space-x-[20px] cursor-pointer group"
              >
                <motion.div
                  className="w-[400px] h-[300px] shrink-0 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={news.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={news.title}
                  />
                </motion.div>
                <div className="py-[24px] text-[#000] flex flex-col justify-between">
                  <div className="text-[42px] font-bold group-hover:text-[#666] transition-colors duration-300">
                    {news.title}
                  </div>
                  <div className="text-[20px] mt-[20px]">{news.description}</div>
                  <div className="text-[18px] mt-[20px]">{news.date}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
