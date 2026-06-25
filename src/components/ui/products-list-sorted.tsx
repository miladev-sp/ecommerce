import { sortProducts } from "@/src/lib/api/dummyjson";
import ProductCard from "./product-card";
import { Product } from "@/src/types";
type Props = {
  limit: number;
  query: string;
};
export default async function ProductListSorted({ limit, query }: Props) {
  const products = await sortProducts(query, limit);
  return (
    <>
      <div className="flex gap-5 overflow-x-auto mt-15  mx-6 items-stretch xl:justify-center hide-scrollbar">
        {products.products.map((product: Product) => (
          <div
            className=" w-[clamp(11rem,25vw,20rem)] shrink-0"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
