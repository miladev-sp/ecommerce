"use client";

import { Product } from "@/src/types";
import filter from "@/public/icons/filter-icon.png";
import { useState } from "react";
import { FaAngleDown, FaStar } from "react-icons/fa";
import green from "@/public/green.png";
import Image from "next/image";
import dot from "@/public/icons/dot-icon.png";
type Prop = {
  product: Product;
};

export default function ProductTabs({ product }: Prop) {
  const [selectedTab, setSelectedTab] = useState("reviews");

  return (
    <div className="w-full mt-15">
      <div className="mt-5 mb-5 border-b border-[#0000001A]">
        <div className="flex overflow-x-auto hide-scrollbar min-w-max md:min-w-0 md:justify-between gap-6">
          <button
            type="button"
            onClick={() => setSelectedTab("detail")}
            className={`py-3 text-sm md:text-base whitespace-nowrap transition-all flex-1
            ${
              selectedTab === "detail"
                ? "border-b border-black text-black font-medium"
                : "text-[#00000099]"
            } cursor-pointer`}
          >
            Product Details
          </button>

          <button
            type="button"
            onClick={() => setSelectedTab("reviews")}
            className={`py-3 text-sm md:text-base whitespace-nowrap transition-all flex-1
            ${
              selectedTab === "reviews"
                ? "border-b border-black text-black font-medium"
                : "text-[#00000099]"
            } cursor-pointer`}
          >
            Rating & Reviews
          </button>

          <button
            type="button"
            onClick={() => setSelectedTab("faq")}
            className={`py-3 text-sm md:text-base whitespace-nowrap transition-all flex-1
            ${
              selectedTab === "faq"
                ? "border-b border-black text-black font-medium"
                : "text-[#00000099]"
            } cursor-pointer`}
          >
            FAQs
          </button>
        </div>
      </div>

      {selectedTab === "reviews" && (
        <div className="mt-6 ">
          <div className="flex justify-between gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex items-center gap-2">
              <p className="font-bold text-lg md:text-[24px]">All Reviews</p>

              <span className="text-sm text-[#00000099] lg:text-base">
                ({product.reviews.length})
              </span>
            </div>

            <div className="flex items-center gap-3">
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
              <div className="hidden lg:flex lg:gap-3.5 lg:items-center bg-[#F0F0F0] py-4 px-5 rounded-[62px] cursor-pointer">
                <span className="font-satoshi text-base font-medium">
                  Latest
                </span>
                <FaAngleDown size={16} />
              </div>
              <button
                type="button"
                className="bg-black text-white rounded-full px-5 py-3 text-xs md:text-sm lg:py-4 lg:text-base cursor-pointer "
              >
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="border border-[#0000001A] rounded-2xl p-5 shadow-sm"
              >
                <div className="flex gap-1 items-center relative ">
                  {[...Array(5)].map((_, starIndex) => {
                    const starPercentage = Math.max(
                      0,
                      Math.min(100, (review.rating - starIndex) * 100),
                    );

                    return (
                      <div key={starIndex} className="relative">
                        <FaStar className="size-4 md:size-5 text-gray-300" />

                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ width: `${starPercentage}%` }}
                        >
                          <FaStar className="size-4 md:size-5 text-yellow-400 fill-yellow-400" />
                        </div>
                      </div>
                    );
                  })}
                  <div className="absolute right-0 top-0 hidden lg:block cursor-pointer">
                    <Image src={dot} alt="" width={20} height={20} />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <h3 className="font-bold text-base md:text-xl">
                    {review.reviewerName}
                  </h3>

                  <Image
                    src={green}
                    alt="verified"
                    width={18}
                    height={18}
                    className="lg:size-6"
                  />
                </div>

                <p className="mt-3 text-sm md:text-base text-[#00000099]">
                  {review.comment}
                </p>

                <p className="mt-2 text-sm md:text-base text-gray-500">
                  {product.description}
                </p>

                <p className="mt-4 text-base text-[#00000099] font-medium">
                  Posted on{" "}
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="button"
              className="border border-[#0000001A] rounded-full px-8 py-3 lg:text-base text-sm font-medium lg:px-13.5 lg:py-4 cursor-pointer"
            >
              Load More Reviews
            </button>
          </div>
        </div>
      )}

      {selectedTab === "detail" && (
        <div className="flex flex-col gap-6">
          <p className="text-sm md:text-base">{product.description}</p>

          {product.dimensions && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <strong>Brand:</strong> {product.brand}
              </div>

              <div>
                <strong>Weight:</strong> {product.weight}
              </div>

              <div>
                <strong>Width:</strong> {product.dimensions.width}
              </div>

              <div>
                <strong>Height:</strong> {product.dimensions.height}
              </div>

              <div>
                <strong>Depth:</strong> {product.dimensions.depth}
              </div>
            </div>
          )}
        </div>
      )}

      {selectedTab === "faq" && (
        <div>
          <h2 className="text-center font-bold text-lg md:text-2xl">
            Frequently Asked Questions
          </h2>

          <ul className="mt-8 flex flex-col gap-6">
            {[1, 2, 3, 4].map((item) => (
              <li
                key={item}
                className="border border-[#0000001A] rounded-xl p-4"
              >
                <h3 className="font-bold text-base md:text-lg">
                  How do you make holy water?
                </h3>

                <p className="mt-2 text-sm md:text-base text-[#00000066]">
                  You boil the hell out of it. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas cupiditate laboriosam
                  fugiat.
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
