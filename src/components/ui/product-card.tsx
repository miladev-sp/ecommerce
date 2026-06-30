import { Product } from "@/src/types";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import {
  calculateDiscountAmount,
  calculateDiscountedPrice,
} from "@/src/lib/utils";

type Props = {
  product: Product;
  index: number;
};

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";

export default function ProductCard({ product, index }: Props) {
  const discountAmount = calculateDiscountAmount(
    product.price,
    product.discountPercentage,
  );

  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage,
  );
  const roundDiscountPercentage = Math.round(product.discountPercentage);

  return (
    <Link href={`/products/${product.id}`}>
      <div className="flex flex-col h-full gap-1">
        <div className="bg-[#F0EEED] p-3 rounded-[13px] flex items-center justify-center ">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={295}
            height={295}
            sizes="(max-width:768px) 45vw, 295px"
            fetchPriority={
              index === 0 || index === 1 || index === 2 ? "high" : "auto"
            }
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
        <p className="mt-2.5 font-satoshi font-bold text-[16px] line-clamp-2 min-h-12 lg:text-[20px] ">
          {product.title}
        </p>
        <div className="flex gap-1 items-center mt-1.5">
          {[...Array(5)].map((e: undefined, index: number) => {
            const starPercentrage = Math.max(
              0,
              Math.min(100, (product.rating - index) * 100),
            );

            return (
              <div key={index} className="relative">
                <FaStar className="size-4 text-gray-500 lg:size-5" />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${starPercentrage}%` }}
                >
                  <FaStar className="size-4 fill-yellow-400 text-yellow-400 lg:size-5" />
                </div>
              </div>
            );
          })}
          <span className="font-satoshi text-[12px] font-normal lg:text-[14px]">
            {product.rating}/
            <span className="font-satoshi text-[12px] font-normal lg:text-[14px] text-gray-700">
              5
            </span>
          </span>
        </div>
        <div className="mt-1.5 flex gap-1 items-center">
          <p className="font-satoshi font-bold text-[20px] lg:text-[24px]">
            {discountAmount ? `$${discountedPrice}` : `$${product.price}`}
          </p>
          <p className="line-through text-[#00000066] font-satoshi font-bold lg:text-[24px]">
            {discountAmount ? `$${product.price}` : ""}
          </p>
          {discountAmount ? (
            <p className="py-1.5 px-3.5 bg-[#FF33331A] text-[10px] font-satoshi font-medium rounded-[62px] text-[#FF3333] lg:text-[12px] lg:px-4 lg:py-1.5">
              {discountAmount ? `-${roundDiscountPercentage}%` : ""}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
}
