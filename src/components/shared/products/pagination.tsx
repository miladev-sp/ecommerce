import build from "next/dist/build";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  currentPage: number;
  total: number;
  limit: number;
  category?: string;
};

function getPageNumbers(
  currentPage: number,
  total: number,
): (number | "...")[] {
  const pages: (number | "...")[] = [];
  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return pages;
}

export default function Pagination({
  currentPage,
  total,
  limit,
  category,
}: Props) {
  const totalPages = Math.ceil(total / limit);
  const pages = getPageNumbers(currentPage, totalPages);
  function buildUrl(page: number) {
    const params = new URLSearchParams();
    params.set("page", String(page));
    if (category) params.set("category", category);
    return `/products?${params.toString()}`;
  }
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  return (
    <div className="mx-8 mt-5 mb-11">
      <div className=" flex justify-center gap-2 ">
        <Link
          href={hasPrev ? buildUrl(currentPage - 1) : ""}
          className="flex justify-center items-center py-2 px-3.5 gap-2 font-satoshi font-medium text-[12px] rounded-lg border border-[#0000001A]"
        >
          <FaArrowLeft />
          Previous
        </Link>

        <div className="flex gap-1 justify-between ">
          {pages.map((page, i) =>
            page === "..." ? (
              <span
                key={page + i}
                className=" px-2 text-[#00000080] font-satoshi font-medium flex justify-center items-center rounded-lg"
              >
                ...
              </span>
            ) : (
              <Link
                key={page}
                href={buildUrl(page)}
                className={`px-2 flex justify-center items-center rounded-lg text-[12px] text-[#00000080]  ${currentPage === page ? "bg-[#0000000F] text-black " : ""}`}
              >
                {page}
              </Link>
            ),
          )}
        </div>
        <Link
          href={hasNext ? buildUrl(currentPage + 1) : ""}
          className="flex justify-center items-center py-2 px-3.5 gap-2 font-satoshi font-medium text-[12px] rounded-lg border border-[#0000001A]"
        >
          Next
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
