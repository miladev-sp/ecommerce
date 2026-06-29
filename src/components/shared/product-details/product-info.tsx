import {
  calculateDiscountAmount,
  calculateDiscountedPrice,
} from "@/src/lib/utils";
import { Product } from "@/src/types";
import { FaStar } from "react-icons/fa";
type Prop = {
  product: Product;
};

export default function ProductInfo({ product }: Prop) {
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
    <div className=" mt-3">
      <h2 className="font-integral text-[24px] xl:text-[40px]">
        {product.title}
      </h2>

      <div className="flex gap-1 items-center  mt-2">
        {[...Array(5)].map((e: undefined, index: number) => {
          const starPercentrage = Math.max(
            0,
            Math.min(100, (product.rating - index) * 100),
          );

          return (
            <div key={index} className="relative">
              <FaStar className="size-4.5 text-gray-500 lg:size-5 xl:size-6" />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${starPercentrage}%` }}
              >
                <FaStar className="size-4.5 fill-yellow-400 text-yellow-400 lg:size-5 xl:size-6" />
              </div>
            </div>
          );
        })}
        <span className="font-satoshi text-[14px] font-normal lg:text-[14px] ml-2 xl:text-[16px]">
          {product.rating}/
          <span className="font-satoshi text-[14px] font-normal lg:text-[14px] text-gray-700 xl:text-[16px]">
            5
          </span>
        </span>
      </div>
      <div className="mt-2 flex gap-3 items-center">
        <p className="font-satoshi font-bold text-[24px] lg:text-[24px] xl:text-[32px]">
          {discountAmount ? `$${discountedPrice}` : product.price}
        </p>
        <p className="line-through text-[#00000066] font-satoshi text-[24px] font-bold lg:text-[24px] xl:text-[32px]">
          {discountAmount ? `$${product.price}` : ""}
        </p>
        {discountAmount ? (
          <p className="py-1.5 px-3.5 bg-[#FF33331A] text-[14px] font-satoshi font-medium rounded-[62px] text-[#FF3333] lg:text-[12px] lg:px-4 lg:py-1.5 xl:text-[16px]">
            {discountAmount ? `-${roundDiscountPercentage}%` : ""}
          </p>
        ) : (
          ""
        )}
      </div>
      <p className="mt-3 font-satoshi font-normal text-[14px] text-[#00000099] xl:text-[16px]">
        {product.description}
      </p>
    </div>
  );
}
