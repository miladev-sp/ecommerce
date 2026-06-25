import { Product } from "@/src/types";
import { sortProducts } from "@/src/lib/api/dummyjson";
import ProductCard from "../../ui/product-card";
type Props = {
  product: Product;
};

export default async function SimilarProducts({ product }: Props) {
  const data = await sortProducts(product.category, 4);
  const similarProducts = data.products.filter(
    (item: Product) => item.id !== product.id,
  );
  return (
    <div className="my-18">
      <h2 className="font-integral text-[36px] text-center mb-8">
        You might also like
      </h2>

      <div className="flex gap-5  mt-15 overflow-x-auto  items-stretch xl:justify-center hide-scrollbar">
        {similarProducts.map((product: Product) => (
          <div
            className=" w-[clamp(11rem,25vw,20rem)] shrink-0"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
