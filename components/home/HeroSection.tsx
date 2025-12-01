import Image from "next/image";

const heroImages = {
  out: "/images/hero/out.png",
  coin: "/images/hero/coin.png",
} as const;

export const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-[1024px] flex-col items-center overflow-hidden bg-[#030303] px-4 pb-24 pt-[250px] text-white">
      <div className="relative z-10 flex w-full max-w-[780px] flex-col justify-center items-center">
        <div className="relative aspect-square w-full max-w-[640px] bg-[#fff] rounded-[50%]">
          <div
            className="absolute flex justify-center items-center w-[500px] h-[500px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            style={{
              backgroundImage: `url(/images/hero/out.png)`,
              backgroundSize: "100% 100%",
            }}
          >
            <Image
              src={heroImages.coin}
              alt="XAUC coin"
              width={260}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="text-[52px] text-[#EFBE84] absolute w-full z-11 text-center top-[calc(50%+25px)] left-1/2 translate-x-[-50%] translate-y-[-50%]">
        XAUC · On-chain Gold,XAUC · On-chain Gold,
      </div>
    </section>
  );
};
