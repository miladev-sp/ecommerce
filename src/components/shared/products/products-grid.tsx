"use client";

import useSWR from "swr";
import { Product, ProductsResponse } from "@/src/types";
import ProductCard from "../../ui/product-card";
type Props = {
  product: ProductsResponse;
};

export default function ProductGrid({ product }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-7 gap-x-4 min-[1211px]:grid-cols-3 ">
        {product.products.map((product: Product) => (
          <div className=" w-full shrink-0" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
