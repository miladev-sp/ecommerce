import { getFilteredProductss } from "@/src/lib/api/dummyjson";
import ProductGrid from "./products-grid";
import Pagination from "@/src/components/shared/products/pagination";

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
          <span className="underline font-bold">Refresh</span> the page
        </h1>
      </div>
    );
  }

  return (
    <>
      <ProductGrid product={data} />
      <hr className="text-[#0000001A] mt-5" />
      <Pagination
        currentPage={page}
        category={category}
        total={data.total}
        limit={12}
      />
    </>
  );
}
