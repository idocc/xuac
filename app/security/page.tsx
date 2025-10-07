"use client";
import {
  SecurityIcon1,
  SecurityIcon2,
  SecurityIcon3,
} from "@/components/icons";
import { motion } from "framer-motion";

export default function Security() {
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
            <span className="font-bold">安全与合规</span>
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
                  <div className="text-[39px] font-bold">安全措施</div>
                  <div className="text-[32px]">
                    多重签名、冷钱包储存、实时风控
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
                  <div className="text-[39px] font-bold">合规声明</div>
                  <div className="text-[32px]">遵守 KYC/AML,不服务制裁国家</div>
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
                  <div className="text-[39px] font-bold">保障机制</div>
                  <div className="text-[32px]">
                    资金隔离、大额资金专人处理、赔付计划
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
          在数字资产交易领域,安全与合规是平台建立用户信任的基石。全天汇24exc
          通过多层次安全架构，采用多重签名机制和冷钱包储存，确保用户资产免受黑客攻击与单点风险。同时，系统配置实时风控与大数据监测，能够快速识别和拦截异常交易，保障资金安全。
          在合规层面，平台严格遵循 KYC(身份认证) 和 AML(反洗钱)
          国际标准,全面审查用户身份与资金来源,拒绝为受制裁国家和高风险用户提供服务。此外,平台建立了资金隔离制度,将用户资产与平台自有资金独立存放,并针对大额资金配备专人处理及赔付计划,最大程度降低风险敞口。通过全方位的安全与合规体系,全天汇24exc
          为用户提供透明、可信赖的交易环境，树立行业信任标杆。
        </motion.div>
      </div>
    </div>
  );
}
