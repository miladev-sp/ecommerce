"use client";

import { Product } from "@/src/types";
import Image from "next/image";
import { useState } from "react";
type Prop = {
  product: Product;
};

export default function ImageGallery({ product }: Prop) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col items-center justify-center  sm:justify-around  md:flex-row-reverse xl:flex-row-reverse xl:h-full xl:w-full xl:gap-4 md:gap-6 ">
      <div className="bg-[#F0EEED] rounded-[20px] flex items-center justify-center xl:w-[75%]  xl:h-full xl:flex-2">
        <Image
          src={selectedImage}
          alt={product.title}
          className="object-contain xl:w-full xl:h-full"
          width={258}
          height={290}
        />
      </div>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar max-sm:w-full   mt-4 sm:flex-row sm:justify-between md:flex-col xl:flex-col  xl:flex-1 max-sm:justify-center ">
        {product.images.map((image, index) => (
          <div
            className={`bg-[#F0EEED] rounded-[20px] relative   ${selectedImage === image ? "border border-[#000000]" : ""}  w-28 h-26.5 shrink-0  xl:w-38 xl:h-41.75 `}
            key={image}
          >
            <Image
              src={image}
              alt=""
              fill
              onClick={() => setSelectedImage(image)}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
