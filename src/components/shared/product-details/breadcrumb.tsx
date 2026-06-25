import { Product } from "@/src/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
type Prop = {
  product: Product;
};
export default function BreadCrumb({ product }: Prop) {
  const category = product.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="lg:ml-7">
      <hr className="text-[#0000001A] mx-6 lg:mx-5" />
      <div className="flex items-center  gap-2 mt-4 mb-4 overflow-x-auto hide-scrollbar">
        <Link
          href={"/"}
          className="text-[14px] text-[#00000099] font-satoshi font-normal xl:text-[16px]"
        >
          Home
        </Link>
        <FaAngleRight color="#00000099" size={14} className="xl:size-4" />
        <Link
          href={"/products"}
          className="text-[14px] text-[#00000099] font-satoshi font-normal xl:text-[16px]"
        >
          Shop
        </Link>
        <FaAngleRight color="#00000099" size={14} className="xl:size-4" />
        <Link
          href={`/products?category=${product.category}`}
          className="text-[14px] text-[#00000099] font-satoshi font-normal text-nowrap xl:text-[16px]"
        >
          {category}
        </Link>
        <FaAngleRight color="#00000099" size={14} className="xl:size-4" />
        <p className="text-[14px] text-black font-satoshi font-normal text-nowrap xl:text-[16px]">
          {product.title}
        </p>
      </div>
    </div>
  );
}
