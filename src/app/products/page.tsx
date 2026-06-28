import { getFilteredProducts } from "@/src/lib/api/dummyjson";
import Image from "next/image";
import Link from "next/link";
import filter from "@/public/icons/filter-icon.png";
import { FaAngleRight } from "react-icons/fa";
import ProductGrid from "@/src/components/shared/products/products-grid";
import Pagination from "@/src/components/shared/products/pagination";
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

  const resolvedPage = Number(page) || 1;
  const resolvedCategory = category || "";
  const resolvedSort = sort || "rating";
  const resolvedOrder = order || "desc";

  const data = await getFilteredProducts({
    page: resolvedPage,
    category: resolvedCategory,
    sort: resolvedSort,
    order: resolvedOrder,
  });
  const limit = 10;
  const start = (resolvedPage - 1) * limit + 1;
  const end = Math.min(resolvedPage * limit, data.total);
  return (
    <div className="mx-7 md:mx-8 xl:mx-20">
      <div className="lg:ml-7">
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
      <div className="flex items-start gap-1">
        <h2 className="font-satoshi font-bold text-2xl">
          {category || "Products"}
        </h2>
        <div className="flex items-center justify-between grow">
          <p className="font-satoshi text-[#00000099] text-sm">
            Showing {start}-{end} of {data.total} Products
          </p>
          <button
            type="button"
            className="bg-[#F0F0F0] w-10 h-10 flex items-center justify-center rounded-full lg:w-12 lg:h-12 cursor-pointer  "
          >
            <Image
              src={filter}
              alt="filter"
              width={20}
              height={20}
              className="lg:size-6"
            />
          </button>
        </div>
      </div>
      <div className="mt-6">
        <ProductGrid product={data} />
      </div>
      <div>
        <hr className="text-[#0000001A] mt-5" />
        <Pagination
          currentPage={resolvedPage}
          category={resolvedCategory}
          total={data.total}
          limit={10}
        />
      </div>
    </div>
  );
}
