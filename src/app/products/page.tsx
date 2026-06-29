import { getProductsList, getFilteredProductss } from "@/src/lib/api/dummyjson";
import ProductsTopBar from "@/src/components/shared/products/products-top-bar";
import ProductsFilters from "@/src/components/shared/products/products-filters";
import ProductsSkeleton from "@/src/components/shared/products/product-skeleton";
import ProductsSection from "@/src/components/shared/products/product-section";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { Suspense } from "react";

type Props = {
  searchParams: {
    category?: string;
    page?: string;
    sort?: string;
    order?: string;
    search?: string;
  };
};

type TopBarWrapperProps = {
  page: number;
  category: string;
  sort: string;
  order: string;
  search: string;
  categories: string[];
};

async function TopBarWrapper({
  page,
  category,
  sort,
  order,
  search,
  categories,
}: TopBarWrapperProps) {
  const data = await getFilteredProductss({
    page,
    category,
    sort,
    order,
    search,
  });

  return (
    <ProductsTopBar
      currentPage={page}
      category={category}
      data={data}
      categories={categories}
      order={order}
      sort={sort}
    />
  );
}

export default async function ProductsPage({ searchParams }: Props) {
  const { page, category, sort, order, search } = await searchParams;

  const categories = await getProductsList();

  const resolvedPage = Number(page) || 1;
  const resolvedCategory = category || "";
  const resolvedSort = sort || "rating";
  const resolvedOrder = order || "desc";
  const resolvedSearch = search || "";

  const suspenseKey = `${resolvedPage}-${resolvedCategory}-${resolvedSort}-${resolvedOrder}-${resolvedSearch}`;

  return (
    <>
      <div className="mx-8 lg:mx-20">
        <hr className="text-[#0000001A]" />
        <div className="flex items-center gap-2 mt-4 mb-4 overflow-x-auto hide-scrollbar">
          <Link
            href={"/"}
            className="text-[14px] text-[#00000099] font-satoshi font-normal xl:text-[16px]"
          >
            Home
          </Link>
          <FaAngleRight color="#00000099" size={14} className="xl:size-4" />
          <Link
            href={
              resolvedCategory
                ? `/products?category=${resolvedCategory}`
                : "/products"
            }
            className="text-[14px] text-[#00000099] font-satoshi font-bold xl:text-[16px]"
          >
            {resolvedCategory || "Products"}
          </Link>
        </div>
      </div>

      <div className="mx-7 md:mx-8 xl:mx-20 lg:flex lg:gap-8 mt-7">
        <div className="hidden lg:block">
          <ProductsFilters />
        </div>

        <div className="w-full">
          <div className="lg:ml-7">
            <Suspense
              key={suspenseKey}
              fallback={
                <div className="h-10 w-64 bg-gray-100 animate-pulse rounded-md" />
              }
            >
              <TopBarWrapper
                page={resolvedPage}
                category={resolvedCategory}
                sort={resolvedSort}
                order={resolvedOrder}
                search={resolvedSearch}
                categories={categories}
              />
            </Suspense>
          </div>

          <div className="mt-6 md:mx-16">
            <Suspense key={suspenseKey} fallback={<ProductsSkeleton />}>
              <ProductsSection
                page={resolvedPage}
                category={resolvedCategory}
                sort={resolvedSort}
                order={resolvedOrder}
                search={resolvedSearch}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
