import Image from "next/image";
import versace from "@/public/versace-logo.png";
import zara from "@/public/zara-logo.png";
import gucci from "@/public/gucci-logo.png";
import prada from "@/public/prada-logo.png";
import calvin from "@/public/calvin-logo.png";
export default function BrandLogos() {
  return (
    <div className="bg-black py-10 px-5 grid grid-cols-3 sm:flex  gap-4 items-center justify-center sm:gap-10  xl:gap-30">
      <div className=" flex justify-center">
        <Image
          src={versace}
          alt="versace logo"
          className="w-29 h-5.75 lg:w-41.5 lg:h-8.25"
        />
      </div>
      <div className="flex justify-center ">
        <Image
          src={zara}
          alt="zara logo"
          className="w-15.75 h-26.65 lg:h-9.5 lg:w-22.75"
        />
      </div>
      <div className=" flex justify-center">
        <Image
          src={gucci}
          alt="gucci logo"
          className="w-27.25 h-6.25 lg:h-9 lg:w-39"
        />
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-4 justify-center items-center sm:flex sm:gap-10 xl:gap-30">
        <div className=" flex justify-center ">
          <Image
            src={prada}
            alt="prada logo"
            className="w-31.75 h-5.25 flex-1 lg:h-8 lg:w-48.5 max-sm:w-31.75 max-sm:h-6"
            height={24}
          />
        </div>
        <div className=" flex justify-center ">
          <Image
            src={calvin}
            alt="calvin klein logo"
            className="w-33.5 h-5.25 lg:w-51.5 lg:h-8.25"
          />
        </div>
      </div>
    </div>
  );
}
