"use client";
import CartItem from "@/src/components/shared/cart-item";
import CartSummary from "@/src/components/shared/cart-summary";
import { useAuth } from "@/src/context/AuthContext";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function CartPage() {
  const { user, isAuthLoaded } = useAuth();
  if (!isAuthLoaded) return null;
  return (
    <div className="mx-6 md:mx-8 xl:mx-20">
      <div className="lg:ml-7">
        <hr className="text-[#0000001A]" />
        <div className="flex items-center  gap-2 mt-4 mb-1 overflow-x-auto hide-scrollbar">
          <Link
            href={"/"}
            className="text-[14px] text-[#00000099] font-satoshi font-normal lg:text-[16px]"
          >
            Home
          </Link>
          <FaAngleRight color="#00000099" size={14} className="xl:size-4" />
          <Link
            href={"/products"}
            className="text-[14px] text-[#00000099] font-satoshi font-normal lg:text-[16px]"
          >
            Shop
          </Link>
        </div>
      </div>
      <h2 className="font-integral text-[32px] lg:text-[40px]">Your cart</h2>
      <div className="flex flex-col items-center md:mb-20 ">
        {user ? (
          <div className="sm:w-2/3 md:flex md:w-full md:gap-3 lg:gap-5 ">
            <CartItem />
            <CartSummary />
          </div>
        ) : (
          <h2>
            For seeing your cart you should first Login{" "}
            <Link href={"/login"} className="font-bold underline">
              Login
            </Link>
          </h2>
        )}
      </div>
    </div>
  );
}
