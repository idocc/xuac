"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const BackgroundBorderSection = () => {
  const [textComplete, setTextComplete] = useState(false);
  const goldControls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    // 文字动画完成后，触发金砖动画
    if (textComplete) {
      goldControls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeOut",
        },
      });
    }
  }, [textComplete, goldControls]);

  // 当最后一个文字元素（按钮）动画完成时，触发金砖动画
  const handleTextAnimationComplete = () => {
    if (isInView) {
      setTextComplete(true);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-black border-t border-b border-[#3a3a3a] min-h-[900px]"
    >
      {/* Background Pattern */}

      <div className="absolute left-0 top-[-1px] w-full h-full flex flex-col gap-[6px]">
        {/* Pattern rows - repeating background pattern */}
        <Image src="/images/home/bg.png" alt="" fill className="object-cover" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[720px] pt-[131px] pb-[131px] flex flex-col gap-[34px] items-center">
        <div className="flex flex-col gap-[25px] items-center w-full">
          {/* Title */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <motion.h2
              className="text-[68px] font-semibold leading-[90px] text-white whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              让每个人都能
            </motion.h2>
            <motion.h2
              className="text-[68px] font-semibold leading-[90px] text-white whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              安全、透明、自由地拥有
              <span className="text-[#efbe84]">黄金</span>
            </motion.h2>
          </motion.div>

          {/* Try XAUC Section */}
          <motion.div
            className="flex items-center gap-[24px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-[36px] font-semibold text-[#efbe84] leading-[45px] whitespace-pre-wrap">
              Try
            </div>
            <div className="flex items-center gap-[19.417px]">
              {/* Coin/Logo Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                className="w-[65.121px] h-[65.121px]"
              >
                <g clipPath="url(#clip0_312_931)">
                  <path
                    d="M32.5606 65.1212C50.6047 65.1212 65.1212 50.6047 65.1212 32.5606C65.1212 14.5165 50.6047 0 32.5606 0C14.5165 0 0 14.5165 0 32.5606C0 50.6047 14.5165 65.1212 32.5606 65.1212Z"
                    fill="#EFBE84"
                  />
                  <path
                    d="M41.5148 37.7162C41.5148 32.9678 38.6657 31.3398 32.9676 30.6616C28.8975 30.1188 28.0835 29.0335 28.0835 27.134C28.0835 25.2344 29.4403 24.0137 32.1536 24.0137C34.5956 24.0137 35.9524 24.8277 36.6307 26.8627C36.7665 27.2697 37.1735 27.541 37.5805 27.541H39.751C40.2937 27.541 40.7008 27.134 40.7008 26.5915V26.4557C40.158 23.4709 37.7159 21.1646 34.5956 20.8934V17.6373C34.5956 17.0945 34.1886 16.6875 33.5104 16.5518H31.4754C30.9326 16.5518 30.5256 16.9588 30.3898 17.6373V20.7576C26.3197 21.3004 23.7422 24.0137 23.7422 27.4055C23.7422 31.8826 26.4555 33.6461 32.1536 34.3246C35.9524 35.0029 37.1735 35.8169 37.1735 37.9877C37.1735 40.1585 35.2739 41.6508 32.6964 41.6508C29.1688 41.6508 27.9477 40.1582 27.5407 38.1232C27.4053 37.5807 26.9983 37.3091 26.5913 37.3091H24.2847C23.7422 37.3091 23.3352 37.7162 23.3352 38.2589V38.3947C23.8777 41.7862 26.0485 44.2283 30.5256 44.9068V48.1629C30.5256 48.7054 30.9326 49.1124 31.6108 49.2481H33.6458C34.1886 49.2481 34.5956 48.8411 34.7314 48.1629V44.9068C38.8015 44.2283 41.5148 41.3792 41.5148 37.7162Z"
                    fill="black"
                  />
                  <path
                    d="M25.6415 51.9613C15.0593 48.1628 9.63247 36.3596 13.5671 25.9128C15.6021 20.2147 20.0792 15.8734 25.6415 13.8384C26.1843 13.5671 26.4556 13.1601 26.4556 12.4816V10.5823C26.4556 10.0395 26.1843 9.63252 25.6415 9.49707C25.5058 9.49707 25.2345 9.49707 25.0988 9.63252C12.2103 13.7026 5.15538 27.4054 9.22546 40.2939C11.6675 47.8912 17.5014 53.7251 25.0988 56.1672C25.6415 56.4384 26.1843 56.1672 26.3198 55.6244C26.4556 55.4889 26.4556 55.3531 26.4556 55.0819V53.1823C26.4556 52.7753 26.0485 52.2329 25.6415 51.9613ZM40.0226 9.63252C39.4798 9.36129 38.937 9.63252 38.8016 10.1753C38.6658 10.3111 38.6658 10.4465 38.6658 10.7181V12.6174C38.6658 13.1601 39.0728 13.7026 39.4798 13.9742C50.062 17.7727 55.4889 29.5759 51.5542 40.0226C49.5192 45.7207 45.0421 50.062 39.4798 52.0971C38.937 52.3683 38.6658 52.7753 38.6658 53.4539V55.3531C38.6658 55.8959 38.937 56.3029 39.4798 56.4384C39.6156 56.4384 39.8868 56.4384 40.0226 56.3029C52.911 52.2329 59.966 38.5301 55.8959 25.6416C53.4538 17.9085 47.4842 12.0746 40.0226 9.63252Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_312_931">
                    <rect width="65.1212" height="65.1212" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="text-[49.929px] font-semibold text-[#efbe84] leading-[62.411px] whitespace-nowrap">
                XAUC
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-[24px] font-normal leading-[45px] text-[#888888] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            XAUC —— 将黄金的稳健与加密的灵活完美结合，
            <br />
            开启全球价值储存与支付的新纪元。
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.button
          className="bg-[#efbe84] border border-[#efbe84] rounded-[12px] px-[16px] py-[10px] w-[166px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 1, 
            delay: 2,
            onComplete: handleTextAnimationComplete
          }}
        >
          <span className="text-[16px] font-normal text-[#151515] leading-[24px] text-center whitespace-nowrap">
            购买XAUC
          </span>
        </motion.button>
      </div>

      {/* Left Gold Bars */}
      <motion.div
        className="absolute left-0 bottom-0 w-[517px] h-[539px] pointer-events-none z-0"
        initial={{ x: "-100%", opacity: 0 }}
        animate={goldControls}
      >
        <Image
          src="/images/home/gold.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Right Gold Bars */}
      <motion.div
        className="absolute right-0 bottom-0 w-[517px] h-[539px] pointer-events-none z-0"
        initial={{ x: "100%", opacity: 0 }}
        animate={goldControls}
      >
        <Image
          src="/images/home/gold.png"
          alt=""
          fill
          className="object-cover object-center scale-x-[-1]"
        />
      </motion.div>
    </section>
  );
};
