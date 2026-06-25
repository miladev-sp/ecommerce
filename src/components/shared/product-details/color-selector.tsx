"use client";
import { PRODUCT_COLORS } from "@/src/constants";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(PRODUCT_COLORS[0]);
  return (
    <div>
      <hr className="text-[#0000001A]  lg:mx-20 mt-4 xl:mx-0" />
      <div className="mt-3">
        <p className="font-satoshi text-[14px] font-normal text-[#00000099] xl:text-[16px]">
          Select Colors
        </p>
        <div className=" flex gap-3 mt-2.5">
          {PRODUCT_COLORS.map((color) => (
            <button
              className={`rounded-full w-9.75 h-9.75 cursor-pointer flex items-center justify-center `}
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              type="button"
            >
              {selectedColor === color ? (
                <FaCheck className="text-white" />
              ) : (
                ""
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
