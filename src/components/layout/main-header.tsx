"use client";

import Link from "next/link";
import navBar from "@/public/nav-menu.png";
import MobileNav from "./mobile-nav";
import search from "@/public/search.png";
import cart from "@/public/cart.png";
import usericon from "@/public/user.png";
import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "@/src/context/CartContext";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
export default function MainHeader() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const { cartItems } = useCart();
  const orderCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  function openMenuHandler() {
    setIsMenuOpen((prev) => !prev);
  }
  function searchSubmitHandleer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    router.push(`/products?search=${search}`);
  }
  return (
    <header>
      <MobileNav isOpen={isMenuOpen} onClose={openMenuHandler} />
      {user || !isBannerOpen ? null : (
        <div className="flex bg-black text-white h-8 justify-center items-center relative">
          <p className="font-satoshi font-normal text-[12px] lg:text-[14px] ">
            Sign up and get 20% off to your first order.
            <Link href={"/register"} className=" underline ml-0.5">
              Sign Up Now
            </Link>
          </p>
          <RxCross2
            className=" absolute right-20 hidden sm:block cursor-pointer"
            onClick={() => setIsBannerOpen(false)}
          />
        </div>
      )}
      <div className="flex justify-between items-center py-2.5 px-4 sm:px-8 md:justify-normal xl:mx-15 my-2 xl:my-3">
        <div className="flex gap-3 items-center   xl:grow-0.9 ">
          <Image
            src={navBar}
            alt="nav menu"
            priority
            width={24}
            height={24}
            className=" cursor-pointer sm:hidden"
            onClick={openMenuHandler}
          />
          <Link href={"/"}>
            <h2 className="font-integral text-[25.2px]">SHOP.CO</h2>
          </Link>
          <ul className="hidden sm:flex gap-5 ml-4 font-satoshi font-normal items-center justify-center xl:gap-11 xl:mr-7 md:gap-5">
            <li>
              <Link href={"/products"}>Shop</Link>
            </li>
            <li>
              <Link href={"/products?sale=true"}>On Sale</Link>
            </li>
            <li>
              <Link href={"/new-arrivals"}>New Arrivals</Link>
            </li>
            <li>
              <Link href={"/brands"}>Brands</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center  md:grow-5  ">
          <div className="md:block hidden  w-full xl:w-10/12 relative   ">
            <form onSubmit={searchSubmitHandleer}>
              <input
                type="text"
                placeholder="Search for products..."
                className=" font-satoshi border-0 outline-0 rounded-[62px]   ml-2.5  placeholder-[#00000066] pl-8 bg-[#F0F0F0]  w-[90%] py-2 xl:py-3 "
                name="search"
              />
              <CiSearch
                className=" absolute z-10  left-4.5 top-1/2 bottom-0 translate-y-[-50%] "
                size={20}
              />
            </form>
          </div>
          <Link href={"/"} className=" md:hidden">
            <Image src={search} alt="search" width={24} height={24} priority />
          </Link>
          <div className="relative">
            <Link href={"/cart"}>
              <Image src={cart} alt="cart" width={24} height={24} priority />
              {orderCount > 0 && (
                <div className=" absolute top-4 left-4 bg-[#F0F0F0] rounded-[62px] p-1 py-0 flex items-center justify-center font-satoshi">
                  <span>{orderCount}</span>
                </div>
              )}
            </Link>
          </div>
          <div className="relative">
            {user ? (
              <>
                <Image
                  src={user.image}
                  alt="user avatar"
                  width={30}
                  height={30}
                  className="cursor-pointer rounded-full"
                  onClick={() => setIsUserOpen((prev) => !prev)}
                />
                {isUserOpen && (
                  <div className="absolute top-9 right-0 bg-black text-white p-2 rounded-xl flex flex-col gap-2 z-50 w-28">
                    <button
                      onClick={() => {
                        logout();
                        setIsUserOpen(false);
                      }}
                      className="text-left cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <Image
                  src={usericon}
                  alt="user"
                  width={24}
                  height={24}
                  priority
                  className="cursor-pointer"
                  onClick={() => setIsUserOpen((prev) => !prev)}
                />
                {isUserOpen && (
                  <div className="absolute top-8 right-0 bg-black text-white p-2 rounded-xl flex flex-col gap-2 z-50 w-24">
                    <Link href="/login" onClick={() => setIsUserOpen(false)}>
                      Login
                    </Link>
                    <Link href="/register" onClick={() => setIsUserOpen(false)}>
                      Signup
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
