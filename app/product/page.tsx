"use client";

export default function Product() {
  return (
    <div>
      <div className="min-h-[526px] pt-[130px] relative overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/images/top_img.webp)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 pl-[110px]">
          <div className="text-[78px] text-[#fff]">
            <span className="font-bold">产品与服务</span>
            <div className="space-x-[40px] font-bold">
              <span className="text-[#BDEE63]">Products</span>
              <span>&</span>
              <span>Services</span>
            </div>
            <div className="text-[28px]">多币种兑换 · 跨境结算 · 安全高效</div>
          </div>
        </div>
      </div>

      <div className="px-[120px] py-[60px] text-[#000]">
        <div className="font-bold text-[32px] mb-[20px]">支持币种</div>
        <div className="grid grid-cols-3 gap-x-[60px]">
          <img src="/images/product/11.png" className="w-full" alt="" />
          <img src="/images/product/12.png" className="w-full" alt="" />
          <img src="/images/product/13.png" className="w-full" alt="" />
        </div>

        <div className="font-bold text-[32px] mb-[20px]">支持法币</div>
        <div className="grid grid-cols-3 gap-x-[60px] mb-[20px]">
          <img src="/images/product/1.png" className="w-full" alt="" />
          <img src="/images/product/2.png" className="w-full" alt="" />
          <img src="/images/product/3.png" className="w-full" alt="" />
        </div>
      </div>

      <div className="bg-[#BDEE63] relative px-[108px] py-[120px]">
        <img
          src="/images/product/circle.png"
          alt=""
          className="absolute top-0 right-0 w-[574px]"
        />
        <div className="text-[60px] font-bold text-[#000]">丰富的服务模式</div>

        <div className="flex justify-between gap-x-[28px] mt-[72px]">
          <div className="border border-[#000] rounded-[4px] w-[400px] group cursor-pointer">
            <img
              src="/images/product/21.png"
              alt=""
              className="w-[300px] h-[300px] mx-auto mt-[20px]"
            />
            <div className="h-[90px] text-[32px] font-bold text-[#000] flex items-center pl-[24px] group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
              普通兑换
            </div>
          </div>
          <div className="border border-[#000] rounded-[4px] w-[400px] group cursor-pointer">
            <img
              src="/images/product/22.png"
              alt=""
              className="w-[300px] h-[300px] mx-auto mt-[20px]"
            />
            <div className="h-[90px] text-[32px] font-bold text-[#000] flex items-center pl-[24px] group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
              大宗兑换
            </div>
          </div>
          <div className="border border-[#000] rounded-[4px] w-[400px] group cursor-pointer">
            <img
              src="/images/product/23.png"
              alt=""
              className="w-[300px] h-[300px] mx-auto mt-[20px]"
            />
            <div className="h-[90px] text-[32px] font-bold text-[#000] flex items-center pl-[24px] group-hover:bg-[#000] group-hover:text-[#BDEE63] transition-all duration-300">
              API对接
            </div>
          </div>
        </div>
      </div>

      <div className="px-[108px] py-[60px]">
        <div className="text-[60px] font-bold text-[#000]">
          满足三大应用场景
        </div>

        <div>
          <div className="mt-[24px] flex text-[#000] text-[24px]">
            <span>-</span>
            <img
              src="/images/product/article.png"
              className="w-[60px] h-[60px]"
              alt=""
            />
            <div>
              <span className="font-bold text-[28px]">个人提现</span>
              是用户将数字资产快速兑换为法币并转入银行卡或支付工具的场景。平台提供24/7服务,支持BTC、ETH、USDT等币种,到账迅速,降低资金占用风险。通过KYC认证和风险控制机制,确保提现过程安全可靠,避免诈骗和洗钱问题。对自由职业者、投资者和普通用户来说,这种便捷的提现渠道提升了资金流动性和使用体验。
            </div>
          </div>

          <div className="mt-[24px] flex text-[#000] text-[24px]">
            <span>-</span>
            <img
              src="/images/product/article.png"
              className="w-[60px] h-[60px]"
              alt=""
            />
            <div>
              <span className="font-bold text-[28px]">跨境结算</span>
              主要满足企业、跨境电商和个人的国际资金流通需求。通过平台，用户可实现多币种兑换与快速结算，避免传统国际汇款的高手续费和漫长等待。基于区块链清算技术，交易透明且可追溯，合规性保障降低风险。无论是学费、生活费，还是企业大额结算，都能高效完成，助力全球资金流动。
            </div>
          </div>

          <div className="mt-[24px] flex text-[#000] text-[24px]">
            <span>-</span>
            <img
              src="/images/product/article.png"
              className="w-[60px] h-[60px]"
              alt=""
            />
            <div>
              <span className="font-bold text-[28px]">法币入金</span>
              是用户将美元、人民币、欧元等法币充值到平台账户的过程，是进入数字资产生态的重要入口。平台支持银行卡转账、第三方支付等多种方式，强调操作简便和快速到账。为确保合规性，系统会进行身份核验和资金来源审查。便捷的入金体验不仅提升用户信任，也决定了平台在市场上的竞争力和用户增长速度。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
