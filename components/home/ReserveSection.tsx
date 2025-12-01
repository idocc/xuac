const reserveItems = [
  {
    id: "usd",
    label: "美元市值",
    value: "$1,628,053,00",
    accent: "from-[#efbe84] to-[#a7a7a7]",
    barColor: "bg-gradient-to-b from-[#efbe84] to-[#a7a7a7]",
    letter: "$",
  },
  {
    id: "bars",
    label: "金条数量",
    value: "113",
    accent: "from-white to-[#a7a7a7]",
    barColor: "bg-gradient-to-b from-white to-[#a7a7a7]",
    letter: "山",
  },
  {
    id: "weight",
    label: "黄金总重量",
    value: "113",
    accent: "from-white to-[#a7a7a7]",
    barColor: "bg-gradient-to-b from-white to-[#a7a7a7]",
    letter: "G",
  },
] as const;

export const ReserveSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* 按 PC 设计尺寸实现，不做自适应 */}
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 py-16">
        {/* 标题与说明 */}
        <div className="flex items-end justify-between gap-8">
          <h2 className="text-[52px] font-semibold leading-tight tracking-[-0.06em]">
            我们的实时储备
          </h2>
          <p className="text-[24px] leading-relaxed text-white/40 font-bold">
            *数据源自金库记录与链上信息的汇总与校验，定期更新。
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-8">
          {reserveItems.map((item, index) => (
            <div
              key={item.id}
              className="flex h-[145px] items-center justify-center gap-10"
            >
              {/* 左侧圆形图标：145x145，左右对齐到进度条左边 */}
              <div className="relative flex h-[145px] w-[145px] flex-shrink-0 items-center justify-center rounded-full bg-[#111]">
                {/* 黑白几何背景，简化自 Figma */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff_0,#fff_30%,#000_31%,#000_55%,#fff_56%,#fff_75%,#000_76%)]" />
                <div className="relative flex h-[90px] w-[90px] items-center justify-center rounded-full bg-black/90">
                  <span className="text-[48px] font-semibold tracking-tight text-[#efbe84]">
                    {item.letter}
                  </span>
                </div>
              </div>

              {/* 右侧数据条形图：整体高度 134px，垂直居中于圆形 */}
              <div className="flex h-[134px] flex-1 flex-col justify-between pl-6">
                {/* 条形进度条：左侧强调色加一串细条（按设计 PC 高度 82px，单条宽度 6px，无圆角） */}
                <div className="flex items-end gap-[6px] overflow-hidden">
                  {/* 左侧粗竖条，与 Figma 中 6px 宽竖线类似 */}
                  <div
                    className={`h-[134px] w-[6px] bg-gradient-to-b ${item.accent}`}
                  />

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm">{item.label}</div>
                      <div className="text-[32px] font-semibold tracking-[0.02em]">
                        {item.value}
                      </div>
                    </div>

                    <div className="flex flex-1 gap-1 items-end justify-between">
                      {Array.from({ length: 100 }).map((_, i) => {
                        // 亮色部分占比较长，整体更接近 Figma 的宽度与密度
                        const isActive =
                          index === 0 ? i < 64 : index === 1 ? i < 56 : i < 50;

                        return (
                          <div
                            key={i}
                            className={`h-[56px] w-[6px] ${
                              isActive ? item.barColor : "bg-[#3f3f3f]"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
