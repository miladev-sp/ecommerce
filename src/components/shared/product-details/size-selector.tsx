"use client";
import { PRODUCT_SIZES } from "@/src/constants";
import { useState } from "react";

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState(PRODUCT_SIZES[1]);
  return (
    <div>
      <hr className="text-[#0000001A]  lg:mx-20 mt-4 xl:mx-0" />
      <div className="mt-3">
        <p className="font-satoshi text-[14px] font-normal text-[#00000099] xl:text-[16px]">
          Select Size
        </p>
        <div className="mt-2.5 flex gap-1.5">
          {PRODUCT_SIZES.map((size) => (
            <button
              type="button"
              className={`bg-[#F0F0F0] rounded-[62px] w-18.5 h-9.75 font-satoshi font-normal text-[14px] text-[#00000099] cursor-pointer ${selectedSize === size ? `bg-black text-white text-medium` : ""} xl:text-[16px] xl:w-26 xl:h-11.5`}
              key={size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
