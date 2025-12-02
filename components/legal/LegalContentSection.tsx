"use client";

import { Tab } from "@/app/legal/page";

interface LegalContentSectionProps {
  activeTab: Tab;
}

export const LegalContentSection = ({ activeTab }: LegalContentSectionProps) => {

  const content = {
    terms: (
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[24px]">
          <h2 className="font-['Aeonik',sans-serif] font-medium text-[32px] md:text-[42px] leading-[1.5] text-black">
            代币条款与条件
          </h2>
          <div className="border border-[rgba(0,0,0,0.2)] rounded-[8px] p-[24px]">
            <div className="font-['IBM_Plex_Mono',monospace] text-[16px] md:text-[18px] leading-[28px] text-[rgba(0,0,0,0.72)] tracking-[-0.18px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="mb-[12px]">
                本《代币条款与条件》（"本条款"）适用于您使用与 XAUC 项目相关的产品与服务，包括但不限于 XAUC 代币、与 XAUC 相关的钱包界面、网站、应用程序、Proof Dashboard 及铸造 / 赎回通道（统称为"服务"）。
                <br />
                在购买或赎回 XAUC 代币、访问或使用任何服务之前，请仔细阅读并充分理解本条款。一旦您访问本网站、连接钱包、申请铸造或赎回 XAUC，即视为您已阅读、理解并同意受本条款的约束。若您不同意本条款的任何内容，请立即停止使用服务。
              </p>
              <p>
                XAUC 有权根据业务与合规需要不时修改本条款。更新后的条款一经在网站或相关界面公布，即自公布之日起生效，并适用于该后续时间内您对服务的使用。您有责任定期查阅最新版本的条款；如在条款更新后继续使用服务，即视为您接受修订内容。
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[36px]">
          {/* Section 一、定义 */}
          <div className="flex flex-col gap-[16px] font-['IBM_Plex_Mono',monospace] text-[18px] text-[rgba(0,0,0,0.72)] tracking-[-0.18px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[28px]">
              一、定义
            </p>
            <div>
              <p className="leading-[28px] mb-0">除非上下文另有说明，下列词语具有如下含义：</p>
              <ol className="list-decimal ms-[27px] mt-0">
                <li className="mb-[8px]">
                  <span className="leading-[28px]">"XAUC"：指以实物黄金为储备，在区块链上发行并流通的代币化资产，以及与其相关的技术与运营体系。</span>
                </li>
                <li className="mb-[8px]">
                  <span className="leading-[28px]">"我们 / 本方"：指负责 XAUC 发行、运营或相关服务的实体及其关联方。</span>
                </li>
                <li className="mb-[8px]">
                  <span className="leading-[28px]">"您 / 用户"：指访问本网站、连接钱包或以任何方式使用服务的自然人或机构。</span>
                </li>
                <li className="mb-[8px]">
                  <span className="leading-[28px]">"黄金储备"：指为支持 XAUC 发行而在受监管金库中托管的实物黄金。</span>
                </li>
                <li>
                  <span className="leading-[28px]">"铸造 / 赎回"：指用户依据本条款与相关规则，将法币 / 黄金置换为 XAUC，或将 XAUC 置换为黄金 / 法币的过程。</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Section 二、用户资格 */}
          <div className="flex flex-col gap-[16px] text-[18px] tracking-[-0.18px]">
            <p className="font-['IBM_Plex_Mono',monospace] leading-[28px] text-[rgba(0,0,0,0.72)]" style={{ fontVariationSettings: "'wght' 400" }}>
              二、用户资格
            </p>
            <ol className="list-decimal ms-[27px] font-['IBM_Plex_Mono',monospace] text-[#474747]" style={{ fontVariationSettings: "'wght' 400" }}>
              <li className="mb-[8px]">
                <span className="leading-[28px]">您确认自己具备完全民事行为能力，并有权在其所在司法辖区使用本服务。</span>
              </li>
              <li className="mb-[8px]">
                <span className="leading-[28px]">若您受所在国家 / 地区法律、监管或制裁措施限制，不得访问或使用服务。</span>
              </li>
              <li>
                <span className="leading-[28px]">您承诺不会代表任何受制裁对象或以任何规避制裁的方式使用服务。</span>
              </li>
            </ol>
          </div>

          {/* Section 三、XAUC 代币与黄金储备 */}
          <div className="flex flex-col gap-[16px] text-[18px] tracking-[-0.18px]">
            <p className="font-['IBM_Plex_Mono',monospace] leading-[28px] text-[rgba(0,0,0,0.38)]" style={{ fontVariationSettings: "'wght' 400" }}>
              三、XAUC 代币与黄金储备
            </p>
            <ol className="list-decimal ms-[27px] font-['IBM_Plex_Mono',monospace] text-[#474747]" style={{ fontVariationSettings: "'wght' 400" }}>
              <li className="mb-[8px]">
                <span className="leading-[28px]">XAUC 为以实物黄金为支撑、参考伦敦金价进行 1:1 锚定的代币化资产。</span>
              </li>
              <li className="mb-[8px]">
                <span className="leading-[28px]">每一枚 XAUC 在设计上均对应一定数量的黄金储备，但并不保证在任何时间点的价格稳定或收益水平。</span>
              </li>
              <li className="mb-[8px]">
                <span className="leading-[28px]">持有 XAUC 不构成对本方股权、表决权或其他公司权利的取得，仅在符合赎回规则的前提下赋予您就相关黄金或法币主张权利的可能。</span>
              </li>
              <li>
                <span className="leading-[28px]">黄金储备的托管安排、审计与披露方式，将在网站或 Proof Dashboard 中以合理方式向用户说明并适时更新。</span>
              </li>
            </ol>
          </div>

          {/* Section 四、服务使用 */}
          <div className="flex flex-col gap-[16px] font-['IBM_Plex_Mono',monospace] text-[#474747] text-[18px] tracking-[-0.18px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[28px]">
              四、服务使用
            </p>
            <ol className="list-decimal ms-[27px]">
              <li className="mb-[8px]">
                <span className="leading-[28px]">您在使用服务时，应遵守适用法律法规、本条款及相关操作规则。</span>
              </li>
              <li className="mb-[8px]">
                <span className="leading-[28px]">您应自行保管好钱包、私钥、助记词或任何访问凭证，本方不保管您的私钥，也无法为您找回丢失的访问权限。因上述信息泄露或保管不当产生的任何损失，由您自行承担。</span>
              </li>
              <li className="mb-[8px]">
                <span className="leading-[28px]">您在铸造或赎回 XAUC 时，可能需要完成身份验证（KYC/AML）并提供相关资料；如您拒绝提供或资料不符合要求，本方有权拒绝提供相关服务。</span>
              </li>
              <li>
                <span className="leading-[28px]">本方有权基于合规、风控或技术原因暂缓、中止或终止向您提供部分或全部服务。</span>
              </li>
            </ol>
          </div>

          {/* Section 五、费用、限额与处理时间 */}
          <div className="flex flex-col gap-[16px] text-[18px] tracking-[-0.18px]">
            <p className="font-['IBM_Plex_Mono',monospace] leading-[28px] text-[#474747]" style={{ fontVariationSettings: "'wght' 400" }}>
              五、费用、限额与处理时间
            </p>
            <ol className="list-decimal ms-[27px] font-['IBM_Plex_Mono',monospace] text-[#474747]" style={{ fontVariationSettings: "'wght' 400" }}>
              <li className="mb-[8px]">
                <span className="leading-[28px]">铸造、赎回及相关链上交易可能产生费用，包括网络手续费、服务费、托管费等，具体标准以页面或订单确认界面所示为准。</span>
              </li>
              <li className="mb-[8px]">
                <span className="leading-[28px]">本方保留设定或调整最低 / 最高铸造与赎回额度的权利。</span>
              </li>
              <li>
                <span className="leading-[28px]">铸造与赎回的处理时间可能受工作日安排、链上网络状况、托管机构流程及合规审查等因素影响，本方不对任何特定完成时间做出保证。</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    ),
    reserves: (
      <div className="flex flex-col gap-[32px]">
        <p className="text-[18px] leading-[28px] text-[rgba(0,0,0,0.72)]">
          黄金储备与赎回规则说明内容将在此显示。
        </p>
      </div>
    ),
    risk: (
      <div className="flex flex-col gap-[32px]">
        <p className="text-[18px] leading-[28px] text-[rgba(0,0,0,0.72)]">
          风险披露声明内容将在此显示。
        </p>
      </div>
    ),
    privacy: (
      <div className="flex flex-col gap-[32px]">
        <p className="text-[18px] leading-[28px] text-[rgba(0,0,0,0.72)]">
          隐私政策内容将在此显示。
        </p>
      </div>
    ),
    aml: (
      <div className="flex flex-col gap-[32px]">
        <p className="text-[18px] leading-[28px] text-[rgba(0,0,0,0.72)]">
          反洗钱与制裁合规政策内容将在此显示。
        </p>
      </div>
    ),
  };

  return (
    <section className="relative w-full bg-white pb-16">
      <div className="mx-auto w-full max-w-[1300px]">
        {content[activeTab]}
      </div>
    </section>
  );
};

