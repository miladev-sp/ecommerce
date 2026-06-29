import Image from "next/image";
import hero from "@/public/hero.png";
import heroIcon from "@/public/hero-icon.png";
import heroIcon2 from "@/public/hero-icon2.png";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="bg-[#F2F0F1] md:grid  md:grid-cols-[1fr_1fr] relative lg:min-h-165.75  min-[1376px]:bg-[url(@/public/hero2.png)]   xl:bg-cover ">
      <div className="px-4 py-5 sm:px-8 md:flex md:flex-col md:justify-center max-md:h-fit z-20 xl:px-20  ">
        <div>
          <h1 className=" font-integral text-4xl font-bold xl:text-[64px] ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi font-normal text-[#00000099] mt-3 xl:text-[16px] xl:mt-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link href={"/products"}>
            <button
              className="bg-black font-satoshi font-medium w-full mt-3 rounded-[62px] text-white px-13.5 py-4 xl:w-1/2  xl:mt-6 cursor-pointer"
              type="button"
            >
              Shop Now
            </button>
          </Link>
        </div>
        <div className="text-center mt-5 grid grid-cols-2 grid-rows-1 gap-3 xl:grid-cols-3 xl:grid-rows-1 xl:mt-15">
          <div className="flex flex-col border-r border-[#0000001A]">
            <p className="font-satoshi font-bold text-2xl xl:text-[40px]">
              200+
            </p>
            <span className="font-satoshi font-normal text-[12px] xl:text-[16px] text-[#00000099]">
              International Brands
            </span>
          </div>
          <div className="flex flex-col xl:border-r xl:border-[#0000001A] ">
            <p className="font-satoshi font-bold text-2xl xl:text-[40px] ">
              2,000+
            </p>
            <span className="font-satoshi font-normal text-[12px] text-[#00000099] xl:text-[16px]">
              High-Quality Products
            </span>
          </div>
          <div className="flex flex-col  col-span-2 xl:col-span-1 ">
            <p className="font-satoshi font-bold text-2xl xl:text-[40px]  ">
              30,000+
            </p>
            <span className="font-satoshi font-normal text-[12px] text-[#00000099] xl:text-[16px]">
              Happy Customers
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative ">
        <Image
          src={hero}
          alt="2 models with sweatsherts "
          priority
          className="min-[1376px]:hidden  w-full h-auto  "
        />
        <img
          src={heroIcon.src}
          className="absolute right-5 sm:right-24 md:right-8.75 md:top-10 lg:top-23.25 lg:right-20 lg:w-26 lg:h-26"
          alt=""
        />
        <img
          src={heroIcon2.src}
          className="absolute left-6.75 top-35 sm:left-24 md:left-10 lg:top-82.25 lg:left-10.5 lg:w-[56px]lg:h-[56px]"
        />
      </div>
    </div>
  );
}
