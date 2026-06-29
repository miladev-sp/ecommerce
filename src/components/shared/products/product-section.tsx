import { getFilteredProductss } from "@/src/lib/api/dummyjson";
import ProductGrid from "./products-grid";

type Props = {
  page: number;
  category: string;
  sort: string;
  order: string;
  search: string;
};

export default async function ProductsSection({
  page,
  category,
  sort,
  order,
  search,
}: Props) {
  const data = await getFilteredProductss({
    page,
    category,
    sort,
    order,
    search,
  });
  if (!data) {
    return (
      <div className="h-[70vh] w-full flex items-center">
        <h1>
          Failed to load products please{" "}
          <span className="underline text-bold">Refresh</span> the page
        </h1>
      </div>
    );
  }
  return <ProductGrid product={data} />;
}
