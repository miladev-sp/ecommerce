"use client";
import Link from "next/link";
import filter from "@/public/icons/filter-icon.png";
import {
  FaAngleDown,
  FaAngleRight,
  FaCheck,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import { ProductsResponse } from "@/src/types";
import * as Slider from "@radix-ui/react-slider";
import { FILTER_COLORS, FILTER_SIZE } from "@/src/constants/index";
import Image from "next/image";
import { Drawer } from "vaul";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
type Props = {
  category: string;
  currentPage: number;
  data: ProductsResponse;
  categories: string[];
  sort: string;
  order: string;
};
export default function ProductsTopBar({
  category,
  currentPage,
  data,
  categories,
  sort,
  order,
}: Props) {
  const [values, setValues] = useState([3000, 8000]);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState("#063AF5");
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isStyleOpen, setIsStyleOpen] = useState(true);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [isSortOpen, setIsSortOpen] = useState(false);
  let initialSort;
  if (sort === "price" && order === "asc") {
    initialSort = "The cheapest";
  } else if (sort === "price" && order === "desc") {
    initialSort = "The most expensive";
  } else {
    initialSort = "Most Popular";
  }

  const [selectedSort, setSelectedSort] = useState(initialSort);

  const categoriesUpperCase = categories.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1),
  );

  const limit = 10;
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, data.total);
  console.log(Drawer);
  return (
    <>
      <Drawer.Root>
        <div>
          <div className="flex items-start lg:items-center gap-1">
            <h2 className="font-satoshi font-bold text-2xl text-[32px]">
              {category || "Products"}
            </h2>
            <div className="flex items-center justify-between grow lg:justify-end lg:gap-2.5">
              <p className="font-satoshi text-[#00000099] text-sm">
                Showing {start}-{end} of {data.total} Products
              </p>
              <Drawer.Trigger asChild className="lg:hidden">
                <button
                  type="button"
                  className="bg-[#F0F0F0] w-10 h-10 flex items-center justify-center rounded-full lg:w-12 lg:h-12 cursor-pointer  "
                >
                  <Image
                    src={filter}
                    alt="filter"
                    width={20}
                    height={20}
                    className="lg:size-6"
                  />
                </button>
              </Drawer.Trigger>
              <div className=" relative gap-2 hidden lg:flex">
                <span className="text-[#00000099] font-satoshi font-normal text-base">
                  Sort by:
                </span>
                <p
                  className="flex items-center gap-1 text-base font-satoshi font-medium cursor-pointer"
                  onClick={() => setIsSortOpen((prev) => !prev)}
                >
                  {selectedSort} <FaAngleDown />
                </p>
                {isSortOpen ? (
                  <div className="absolute top-8 left-15 flex flex-col  gap-1 w-40 bg-black p-2.5 text-white  text-nowrap rounded-3xl">
                    {selectedSort !== "The cheapest" ? (
                      <Link
                        href={"/products?sort=price&order=asc"}
                        onClick={() => {
                          setIsSortOpen(false);
                          setSelectedSort("The cheapest");
                        }}
                      >
                        The cheapest
                      </Link>
                    ) : (
                      ""
                    )}
                    {selectedSort !== "The most expensive" ? (
                      <Link
                        href={"/products?sort=price&order=desc"}
                        onClick={() => {
                          setIsSortOpen(false);
                          setSelectedSort("The most expensive");
                        }}
                      >
                        The most expensive
                      </Link>
                    ) : (
                      ""
                    )}
                    {selectedSort !== "Most Popular" ? (
                      <Link
                        href={"/products"}
                        onClick={() => {
                          setIsSortOpen(false);
                          setSelectedSort("Most Popular");
                        }}
                      >
                        Most Popular
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white h-[80vh] fixed bottom-0 left-0 right-0 outline-none py-6 px-5 rounded-tl-[20px] rounded-tr-[20px]">
            <>
              <div className="overflow-y-auto h-[70vh] hide-scrollbar ">
                <div className="flex justify-between items-center">
                  <p className="font-satoshi font-bold text-xl">Filters</p>
                  <Drawer.Close>
                    <IoMdClose
                      color="#00000066"
                      size={28}
                      className="cursor-pointer"
                    />
                  </Drawer.Close>
                </div>
                <hr className="text-[#0000001A] mx-2 lg:mx-5 mt-6" />
                <div>
                  <div className="flex flex-col gap-4 mt-4">
                    {categoriesUpperCase.map((category) => (
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
                <div className="grid grid-cols-7 gap-x-1.5 gap-y-3 mt-5">
                  {isColorsOpen
                    ? FILTER_COLORS.map((color) => (
                        <div
                          style={{ backgroundColor: color }}
                          className="rounded-full w-9.25 h-9.25 flex items-center justify-center border-2 border-[#00000033]"
                          onClick={() => setSelectedColor(color)}
                          key={color}
                        >
                          {selectedColor === color ? (
                            <FaCheck color="white" />
                          ) : (
                            ""
                          )}
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
                <div className="grid grid-cols-3 gap-2.5 mt-3">
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
                  <p className="font-satoshi font-bold text-[20px] ">
                    Dress Style
                  </p>
                  <FaChevronUp
                    className={`${isStyleOpen ? "rotate-180" : ""} transition-all ease-in-out duration-200`}
                  />
                </div>

                {isStyleOpen ? (
                  <div className="flex flex-col gap-4 mt-4">
                    <Link href={`/products`} className="flex justify-between">
                      <p className="text-[#00000099] text-base font-satoshi">
                        Casual
                      </p>
                      <FaChevronRight size={16} color="#00000099" />
                    </Link>
                    <Link href={`/products`} className="flex justify-between">
                      <p className="text-[#00000099] text-base font-satoshi">
                        Formal
                      </p>
                      <FaChevronRight size={16} color="#00000099" />
                    </Link>
                    <Link href={`/products`} className="flex justify-between">
                      <p className="text-[#00000099] text-base font-satoshi">
                        Party
                      </p>
                      <FaChevronRight size={16} color="#00000099" />
                    </Link>
                    <Link href={`/products`} className="flex justify-between">
                      <p className="text-[#00000099] text-base font-satoshi">
                        Gym
                      </p>
                      <FaChevronRight size={16} color="#00000099" />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                <div className="w-full mt-6">
                  <Link href={"/products"}>
                    <Drawer.Close className="font-satoshi text-sm font-medium text-white bg-black py-4 px-13.5 rounded-[62px] w-full">
                      Apply Filter
                    </Drawer.Close>
                  </Link>
                </div>
              </div>
            </>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
