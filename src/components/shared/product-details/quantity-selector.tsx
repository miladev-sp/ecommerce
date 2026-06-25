"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div>
      <hr className="text-[#0000001A]  lg:mx-20 mt-4 xl:mx-0" />
      <div className="mt-4 flex gap-3 xl:gap-4">
        <div className="flex items-center justify-center gap-3.5 bg-[#F0F0F0] rounded-[62px] py-3 px-4 flex-1 xl:justify-between">
          <FaMinus
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="cursor-pointer"
          />
          <span className="font-satoshi font-medium text-[14px] xl:text-[16px] prevent-select">
            {qty}
          </span>
          <FaPlus
            onClick={() => setQty((q) => q + 1)}
            className="cursor-pointer"
          />
        </div>
        <button className="flex-2 bg-black text-[white] py-4 px-12 rounded-[62px] font-satoshi font-normal xl:text-[16px] prevent-select cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
