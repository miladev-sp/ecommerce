"use client";
import { useEffect, useState } from "react";
import { getProductsList } from "@/src/lib/api/dummyjson";
import Link from "next/link";
import { FaCheck, FaChevronRight, FaChevronUp } from "react-icons/fa";
import * as Slider from "@radix-ui/react-slider";
import { FILTER_COLORS, FILTER_SIZE } from "@/src/constants/index";
import filter from "@/public/icons/filter-icon.png";
import Image from "next/image";
export default function ProductsFilters() {
  const [categories, setCategories] = useState(["string"]);
  const [values, setValues] = useState([3000, 8000]);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#063AF5");
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const categoriesUpperCase = categories.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1),
  );
  useEffect(() => {
    const getData = async () => {
      const categories = await getProductsList();
      setCategories(categories);
    };
    getData();
  }, []);
  return (
    <>
      <div className="overflow-y-auto h-min hide-scrollbar px-6 py-5 rounded-[20px] border border-[#0000001A] w-73.5 sticky top-0 ">
        <div className="flex justify-between items-center">
          <p className="font-satoshi font-bold text-xl">Filters</p>
          <Image src={filter} alt="" width={24} height={24} />
        </div>
        <hr className="text-[#0000001A] mx-2 lg:mx-5 mt-6" />
        <div>
          <div className="flex flex-col gap-4 mt-4">
            {categoriesUpperCase.slice(0, 4).map((category) => (
              <Link
                href={`/products?category=${category}`}
                key={category}
                className="flex justify-between"
              >
                <p className="text-[#00000099] text-base font-satoshi">
                  {category}
                </p>
                <FaChevronRight size={16} color="#00000099" />
              </Link>
            ))}
          </div>
          <hr className="text-[#0000001A] mx-2 lg:mx-5 mt-6" />
        </div>
        <div
          className="mt-3.5 flex justify-between cursor-pointer"
          onClick={() => setIsPriceOpen((prev) => !prev)}
        >
          <p className="font-satoshi font-bold text-[20px] ">Price</p>
          <FaChevronUp
            className={`${isPriceOpen ? "rotate-180" : ""} transition-all ease-in-out duration-200`}
          />
        </div>
        {isPriceOpen ? (
          <div className="w-full px-4 mt-2.5">
            <Slider.Root
              className="relative flex items-center w-full h-5 select-none touch-none"
              min={0}
              max={10000}
              step={5}
              value={values}
              onValueChange={setValues}
            >
              <Slider.Track className="relative grow h-1 rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full rounded-full bg-black" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-black rounded-full focus:outline-none" />
              <Slider.Thumb className="block w-5 h-5 bg-black rounded-full focus:outline-none" />
            </Slider.Root>

            <div className="flex font-satoshi justify-between mt-2 text-sm font-medium">
              <span>${values[0]}</span>
              <span>${values[1]}</span>
            </div>
          </div>
        ) : null}
        <hr className="text-[#0000001A] lg:mx-5 mt-6" />
        <div
          className="mt-3.5 flex justify-between cursor-pointer"
          onClick={() => setIsColorsOpen((prev) => !prev)}
        >
          <p className="font-satoshi font-bold text-[20px] ">Colors</p>
          <FaChevronUp
            className={`${isColorsOpen ? "rotate-180" : ""} transition-all ease-in-out duration-200`}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-1.5 gap-y-3 mt-5">
          {isColorsOpen
            ? FILTER_COLORS.map((color) => (
                <div
                  style={{ backgroundColor: color }}
                  className="rounded-full w-9.25 h-9.25 flex items-center justify-center border-2 border-[#00000033]"
                  onClick={() => setSelectedColor(color)}
                  key={color}
                >
                  {selectedColor === color ? <FaCheck color="white" /> : ""}
                </div>
              ))
            : ""}
        </div>
        <hr className="text-[#0000001A] lg:mx-5 mt-6" />
        <div
          className="mt-3.5 flex justify-between cursor-pointer"
          onClick={() => setIsSizeOpen((prev) => !prev)}
        >
          <p className="font-satoshi font-bold text-[20px] ">Size</p>
          <FaChevronUp
            className={`${isSizeOpen ? "rotate-180" : ""} transition-all ease-in-out duration-200`}
          />
        </div>
        <div className="grid grid-cols-2 gap-2.5 mt-3">
          {isSizeOpen
            ? FILTER_SIZE.map((size) => (
                <div
                  key={size}
                  className={`py-2.5 px-4 bg-[#F0F0F0] rounded-[62px] font-satoshi text-sm text-[#00000099] text-center cursor-pointer ${selectedSize === size ? "bg-black text-white" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))
            : ""}
        </div>
        <hr className="text-[#0000001A] lg:mx-5 mt-6" />
        <div
          className="mt-3.5 flex justify-between cursor-pointer"
          onClick={() => setIsStyleOpen((prev) => !prev)}
        >
          <p className="font-satoshi font-bold text-[20px] ">Dress Style</p>
          <FaChevronUp
            className={`${isStyleOpen ? "rotate-180" : ""} transition-all ease-in-out duration-200`}
          />
        </div>

        {isStyleOpen ? (
          <div className="flex flex-col gap-4 mt-4">
            <Link href={`/products`} className="flex justify-between">
              <p className="text-[#00000099] text-base font-satoshi">Casual</p>
              <FaChevronRight size={16} color="#00000099" />
            </Link>
            <Link href={`/products`} className="flex justify-between">
              <p className="text-[#00000099] text-base font-satoshi">Formal</p>
              <FaChevronRight size={16} color="#00000099" />
            </Link>
            <Link href={`/products`} className="flex justify-between">
              <p className="text-[#00000099] text-base font-satoshi">Party</p>
              <FaChevronRight size={16} color="#00000099" />
            </Link>
            <Link href={`/products`} className="flex justify-between">
              <p className="text-[#00000099] text-base font-satoshi">Gym</p>
              <FaChevronRight size={16} color="#00000099" />
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="w-full mt-6">
          <button className="font-satoshi text-sm font-medium text-white bg-black py-4 px-13.5 rounded-[62px] w-full">
            <Link href={"/products"}>Apply Filter</Link>
          </button>
        </div>
      </div>
    </>
  );
}
