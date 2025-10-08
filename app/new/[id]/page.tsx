import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

// News list with only IDs and images
const newsList = [
  { id: 1, image: "/images/about/new1.png" },
  { id: 2, image: "/images/about/new2.png" },
  { id: 3, image: "/images/about/new3.png" },
];

// 生成静态参数 - 用于 ISR
export async function generateStaticParams() {
  return newsList.map((news) => ({
    id: news.id.toString(),
  }));
}

// 配置 ISR - 每60秒重新验证一次
export const revalidate = 60;

// 生成元数据
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("NewsPage");
  const newsItem = newsList.find((item) => item.id.toString() === id);

  if (!newsItem) {
    return {
      title: t("newsNotFound"),
    };
  }

  const newsIndex = newsItem.id - 1;
  return {
    title: t(`newsList.${newsIndex}.title`),
    description: t(`newsList.${newsIndex}.description`),
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("NewsPage");
  const newsItem = newsList.find((item) => item.id.toString() === id);

  if (!newsItem) {
    notFound();
  }

  const newsIndex = newsItem.id - 1;
  const news = {
    id: newsItem.id,
    title: t(`newsList.${newsIndex}.title`),
    description: t(`newsList.${newsIndex}.description`),
    date: t(`newsList.${newsIndex}.date`),
    content: t.raw(`newsList.${newsIndex}.content`),
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-[40px] py-[108px]">
        <h1 className="text-[48px] font-bold text-[#000] mb-[24px]">
          {news.title}
        </h1>
        <div className="text-[18px] text-[#000] mb-[48px] flex justify-between">
          <span>{t("platform")}</span>
          <span>{news.date}</span>
        </div>

        <div className="text-[20px] leading-[1.8] text-[#333]">
          <p className="mb-[24px] p-[20px] border border-[#00000033] rounded-[4px]">
            {news.description}
          </p>

          <div className="mt-[48px] rounded-lg space-y-[24px]">
            <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
