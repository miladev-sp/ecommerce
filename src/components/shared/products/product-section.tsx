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

  if (data.total === 0) {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <h1 className="font-bold ">
          No products found for{" "}
          <span className="font-normal text-gray-700">{search}</span>
        </h1>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <h1>
          Failed to load products please
          <span className="font-bold">refresh</span>
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
