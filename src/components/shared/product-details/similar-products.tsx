import { Product } from "@/src/types";
import { getProductsByCategory, sortProducts } from "@/src/lib/api/dummyjson";
import ProductCard from "../../ui/product-card";
type Props = {
  category: string;
  products: Product;
};

export default async function SimilarProducts({ category, products }: Props) {
  const data = await getProductsByCategory(category, 4);
  const productsFiltered: Product[] = data.products.filter(
    (product: Product) => product.id !== products.id,
  );
  return (
    <div className="my-18">
      <h2 className="font-integral text-[36px] text-center mb-8">
        You might also like
      </h2>

      <div className="flex gap-5  mt-15 overflow-x-auto  items-stretch xl:justify-center hide-scrollbar">
        {productsFiltered.map((product: Product) => (
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
