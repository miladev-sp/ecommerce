"use client";
import { useCart } from "@/src/context/CartContext";
import discountIcon from "@/public/icons/descount-icon.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function CartSummary() {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalDiscount = cartItems.reduce((sum, item) => {
    const discount = Math.round((item.discountPercentage / 100) * item.price);
    return sum + discount * item.quantity;
  }, 0);
  const discountPercentage = Number(
    ((totalDiscount / subtotal) * 100).toFixed(2),
  );
  const deliveryFee = 15;
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="border border-[#0000001A] px-3.5 py-5 rounded-[20px] flex flex-col  mt-4 mb-12 flex-[40%] h-max">
          <h2 className="font-satoshi font-bold text-[20px] lg:text-[24px]">
            Order Summary
          </h2>
          <div className=" flex flex-col gap-4 border-b border-[#0000001A] py-5 ">
            <div className="flex justify-between">
              <p className="font-satoshi text-[#00000099] text-base lg:text-[20px]">
                Subtotal
              </p>
              <span className="font-satoshi font-bold lg:text-[20px]">
                ${Number(subtotal.toFixed(1))}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="font-satoshi text-[#00000099] text-base lg:text-[20px]">
                Discount ({`-${discountPercentage}%`})
              </p>
              <span className="font-satoshi font-bold text-[#FF3333] lg:text-[20px]">
                -${totalDiscount}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="font-satoshi text-[#00000099] text-base lg:text-[20px]">
                Delivery Fee
              </p>
              <span className="font-satoshi font-bold lg:text-[20px]">
                ${deliveryFee}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-3.5">
            <p className="font-satoshi text-baselg:text-[20px] ">Total</p>
            <span className="font-satoshi font-bold text-xl lg:text-[24px] ">
              ${Number((subtotal - totalDiscount + deliveryFee).toFixed(2))}
            </span>
          </div>
          <div className="flex  mt-4 gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Add promo code"
                className="px-10 py-3 bg-[#F0F0F0] font-satoshi rounded-[62px] lg:text-[base]"
              />
              <Image
                src={discountIcon}
                alt=""
                className="absolute left-3 top-[29%] "
                width={20}
                height={20}
              />
            </div>
            <button
              type="button"
              className="py-3 px-4 bg-black text-white font-satoshi text-[14px] rounded-[62px] w-full cursor-pointer lg:text-base"
            >
              Apply
            </button>
          </div>
          <div className="mt-4">
            <button className="bg-black text-white font-satoshi font-medium text-[14px] px-13.5 py-4 rounded-[62px] w-full text-center flex justify-center items-center gap-2.5 cursor-pointer lg;text-base">
              Go to Checkout <FaArrowRight size={20} color="white" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
