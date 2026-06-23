import Link from "next/link";
import ProductList from "../ui/products-list";

export default function NewArrivals() {
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="font-integral text-[32px] lg:text-[48px]">
          NEW ARRIVALS
        </h2>
      </div>

      <ProductList />
      <div className="text-center mt-12 mb-10">
        <Link
          href={"/products"}
          className="border border-[#0000001A] px-[35%] py-4  max-w-89.5  text-[13px] font-satoshi font-medium rounded-[62px] cursor-pointer lg:w-54.5 lg:px-30 lg:text-16px"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
