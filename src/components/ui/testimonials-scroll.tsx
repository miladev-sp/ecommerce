"use client";

import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import green from "@/public/green.png";
import { useRef } from "react";

type Review = {
  rating: number;
  comment: string;
  reviewerName: string;
};

type Product = {
  description: string;
  reviews: Review[];
};

export default function TestimonialsClient({
  products,
}: {
  products: Product[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="mx-5 mt-12 mb-30 xl:mx-20">
      <div className="flex justify-between items-end">
        <h2 className="font-integral text-[32px] xl:text-[48px]">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="flex gap-5 mb-2.5">
          <button onClick={scrollLeft} className="cursor-pointer">
            <FaArrowLeft size={24} />
          </button>

          <button onClick={scrollRight} className="cursor-pointer">
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto hide-scrollbar mt-15"
      >
        {products.map((product, i) =>
          product.reviews
            .filter((review) => review.rating >= 4)
            .map((review, index) => (
              <div
                key={`${i}-${index}`}
                className="border border-[#0000001A] rounded-2xl px-6 py-3 w-90 shrink-0 shadow flex flex-col gap-2"
              >
                <div className="flex gap-1 items-center mt-1.5">
                  {[...Array(5)].map((_, starIndex) => {
                    const starPercentage = Math.max(
                      0,
                      Math.min(100, (review.rating - starIndex) * 100),
                    );

                    return (
                      <div key={starIndex} className="relative">
                        <FaStar className="size-4 text-gray-500 lg:size-5" />
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ width: `${starPercentage}%` }}
                        >
                          <FaStar className="size-4 fill-yellow-400 text-yellow-400 lg:size-5" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-1 items-center">
                  <h3 className="font-satoshi font-bold text-[16px] lg:text-[20px]">
                    {review.reviewerName}
                  </h3>
                  <Image src={green} alt="verified" />
                </div>

                <p className="font-satoshi text-[14px] lg:text-[16px] text-[#00000099]">
                  {review.comment}
                </p>

                <p className="text-xs text-gray-400 text-[14px] lg:text-[16px]">
                  {product.description}
                </p>
              </div>
            )),
        )}
      </div>
    </div>
  );
}
