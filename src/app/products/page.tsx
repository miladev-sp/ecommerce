import { getFilteredProductss, getProductsList } from "@/src/lib/api/dummyjson";
import ProductGrid from "@/src/components/shared/products/products-grid";
import Pagination from "@/src/components/shared/products/pagination";
import ProductsTopBar from "@/src/components/shared/products/products-top-bar";
import ProductsFilters from "@/src/components/shared/products/products-filters";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { Suspense } from "react";
import ProductsSkeleton from "@/src/components/shared/products/product-skeleton";
import ProductsSection from "@/src/components/shared/products/product-section";
type Props = {
  searchParams: {
    category?: string;
    page?: string;
    sort?: string;
    order?: string;
    search: string;
  };
};
export default async function ProductsPage({ searchParams }: Props) {
  const { page, category, sort, order } = await searchParams;
  const categories = await getProductsList();
  const resolvedPage = Number(page) || 1;
  const resolvedCategory = category || "";
  const resolvedSort = sort || "rating";
  const resolvedOrder = order || "desc";

  const data = await getFilteredProductss({
    page: resolvedPage,
    category: resolvedCategory,
    sort: resolvedSort,
    order: resolvedOrder,
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

  return (
    <>
      <div className="mx-8 lg:mx-20">
        <hr className="text-[#0000001A] " />
        <div className="flex items-center  gap-2 mt-4 mb-4 overflow-x-auto hide-scrollbar">
          <Link
            href={"/"}
            className="text-[14px] text-[#00000099] font-satoshi font-normal xl:text-[16px]"
          >
            Home
          </Link>
          <FaAngleRight color="#00000099" size={14} className="xl:size-4" />
          <Link
            href={category ? `/products?category=${category}` : "/products"}
            className="text-[14px] text-[#00000099] font-satoshi font-bold xl:text-[16px]"
          >
            {category || "Products"}
          </Link>
        </div>
      </div>
      <div className="mx-7 md:mx-8 xl:mx-20 lg:flex lg:gap-8 mt-7">
        <div className="hidden lg:block">
          <ProductsFilters />
        </div>
        <div className="w-full">
          <div className="lg:ml-7">
            <ProductsTopBar
              currentPage={resolvedPage}
              category={resolvedCategory}
              data={data}
              categories={categories}
              order={resolvedOrder}
              sort={resolvedSort}
            />
          </div>
          <div className="mt-6 md:mx-16">
            <Suspense
              key={`${resolvedPage}-${resolvedCategory}-${resolvedSort}-${resolvedOrder}`}
              fallback={<ProductsSkeleton />}
            >
              <ProductsSection
                page={resolvedPage}
                category={resolvedCategory}
                sort={resolvedSort}
                order={resolvedOrder}
              />
            </Suspense>
          </div>
          <div>
            <hr className="text-[#0000001A] mt-5" />
            <Pagination
              currentPage={resolvedPage}
              category={resolvedCategory}
              total={data.total}
              limit={12}
            />
          </div>
        </div>
      </div>
    </>
  );
}
