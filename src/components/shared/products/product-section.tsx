import { getFilteredProductss } from "@/src/lib/api/dummyjson";
import ProductGrid from "./products-grid";
import { useRouter } from "next/navigation";

type Props = {
  page: number;
  category: string;
  sort: string;
  order: string;
};

export default async function ProductsSection({
  page,
  category,
  sort,
  order,
}: Props) {
  const router = useRouter();
  const data = await getFilteredProductss({ page, category, sort, order });
  if (!data) {
    return (
      <div className="h-[70vh] w-full flex items-center">
        <h1>
          Failed to load products please{" "}
          <span
            className="underline text-bold"
            onClick={() => router.refresh()}
          >
            Refresh
          </span>{" "}
          the page
        </h1>
      </div>
    );
  }
  return <ProductGrid product={data} />;
}
