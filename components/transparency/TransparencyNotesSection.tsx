"use client";

export const TransparencyNotesSection = () => {
  return (
    <section className="relative w-full bg-black py-16">
      <div className="mx-auto w-full max-w-[1120px] px-4">
        <h2 className="mb-8 font-['Aeonik',sans-serif] text-[32px] leading-[1.5] text-white max-w-[1168px]">
          此表格包含
        </h2>

        <div className="space-y-6 text-[13px] leading-[16px] text-white">
          <ul className="space-y-6 list-disc pl-5">
            <li>
              <div>
                <p className="font-['Inter',sans-serif] font-normal">
                  "已授权"（authorized）
                  <br />
                  指已经由 XAUC 发行主体在区块链上创建、具备技术上可流通条件的 XAUC 代币。
                </p>
              </div>
            </li>
            
            <li>
              <div>
                <p className="font-['Inter',sans-serif] font-normal">
                  "已授权但未发行"（authorized but not issued）
                  <br />
                  指已经由 XAUC 发行主体创建，但尚未投入市场流通、也未分配给任何用户或合作方的 XAUC。
                  <br />
                  由于这些代币尚未进入实际流通，因此不计入对应代币的净流通量。
                </p>
              </div>
            </li>
            
            <li>
              <div>
                <p className="font-['Inter',sans-serif] font-normal">
                  "隔离中的 XAUC"（quarantined XAUC）
                  <br />
                  指因安全、合规或风控原因，被标记并冻结在特定地址上的 XAUC 代币。
                  <br />
                  XAUC 发行主体会采取措施，防止相关地址持有人继续转移这些代币。
                  <br />
                  在发行主体酌情决定的情况下，这部分被隔离的 XAUC 也不计入对应代币的净流通量。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

