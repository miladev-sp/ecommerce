"use client";

import { Product } from "@/src/types";
import Image from "next/image";
import { useState } from "react";
type Prop = {
  product: Product;
};

export default function ImageGallery({ product }: Prop) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [loadedMain, setLoadedMain] = useState<Set<string>>(new Set());
  const [loadedThumbs, setLoadedThumbs] = useState<Set<string>>(new Set());

  return (
    <div className="flex flex-col items-center justify-center  sm:justify-around  md:flex-row-reverse  xl:h-full xl:w-full xl:gap-4 md:gap-6 ">
      <div className="bg-[#F0EEED] rounded-[20px] w-64.5 h-72.5 flex items-center justify-center xl:w-112.5  xl:h-full xl:flex-2 relative overflow-hidden ">
        {!loadedMain.has(selectedImage) && (
          <div className="absolute inset-0 bg-[#E0DDDA] animate-pulse rounded-[20px]" />
        )}
        <Image
          src={selectedImage}
          alt={product.title}
          className={`object-contain xl:w-full xl:h-auto transition-opacity duration-200 ${
            loadedMain.has(selectedImage) ? "opacity-100" : "opacity-0"
          }`}
          fill
          priority
          onLoad={() =>
            setLoadedMain((prev) => new Set(prev).add(selectedImage))
          }
          sizes="(max-width: 640px) 200px, (max-width: 1280px) 300px, 450px"
          fetchPriority="high"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar max-sm:w-full   mt-4 sm:justify-between md:flex-col   xl:flex-1 ">
        {product.images.map((image, index) => (
          <div key={image}>
            <div
              className={`bg-[#F0EEED] rounded-[20px] relative   ${selectedImage === image ? "border border-[#000000]" : ""}  w-28 h-26.5 shrink-0  xl:w-38 xl:h-41.75 cursor-pointer overflow-hidden`}
            >
              {!loadedThumbs.has(image) && (
                <div className="absolute inset-0 bg-[#E0DDDA] animate-pulse rounded-[20px]" />
              )}
              <Image
                src={image}
                alt={product.title}
                fill
                onClick={() => setSelectedImage(image)}
                onLoad={() =>
                  setLoadedThumbs((prev) => new Set(prev).add(image))
                }
                className={`object-contain transition-opacity duration-200 ${
                  loadedThumbs.has(image) ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 640px) 200px, (max-width: 1280px) 300px, 450px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
