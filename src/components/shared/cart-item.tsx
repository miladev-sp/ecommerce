"use client";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function CartItem() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  function addQuantityHandler(
    id: number,
    quantity: number,
    size: string,
    color: string,
  ) {
    updateQuantity(id, quantity + 1, size, color);
  }
  function decraseQuantityHandler(
    id: number,
    quantity: number,
    size: string,
    color: string,
  ) {
    if (quantity === 1) {
      return null;
    }
    updateQuantity(id, quantity - 1, size, color);
  }
  function deleteProductHandler(
    id: number,

    size: string,
    color: string,
  ) {
    removeFromCart(id, color, size);
  }
  return (
    <div className="flex-[60%]">
      {cartItems.length > 0 ? (
        <div className="border border-[#0000001A] p-3.5 rounded-[20px] flex flex-col gap-4 mt-4">
          {cartItems.map((cartItem) => (
            <div
              key={`${cartItem.id}-${cartItem.color}${cartItem.size}`}
              className="border-b pb-4 border-[#0000001A] flex gap-3 last:border-0"
            >
              <div className="w-25 h-25 bg-[#F0EEED] flex justify-center items-center rounded-[9px] relative lg:min-w-32.5 lg:min-h-32.5 ">
                <Link href={`/products/${cartItem.id}`}>
                  <Image
                    src={cartItem.thumbnail}
                    alt=""
                    className="object-contain"
                    fill
                  />
                </Link>
              </div>
              <div className="w-full">
                <div>
                  <div className="flex gap-1 justify-between">
                    <div>
                      <Link href={`/products/${cartItem.id}`}>
                        <h2 className="font-satoshi font-bold text-base lg:text-[20px]">
                          {cartItem.title}
                        </h2>
                      </Link>
                      <p className="font-satoshi font-normal text-[12px] lg:text-[14px]">
                        Size:{" "}
                        <span className="text-[#00000099] ">
                          {cartItem.size}
                        </span>
                      </p>
                      <p className="font-satoshi font-normal text-[12px] lg:text-[14px]">
                        Color:{" "}
                        <span className="text-[#00000099]">
                          {cartItem.color}
                        </span>
                      </p>
                    </div>
                    <div>
                      <MdDelete
                        color="red"
                        size={24}
                        onClick={() =>
                          deleteProductHandler(
                            cartItem.id,
                            cartItem.size,
                            cartItem.color,
                          )
                        }
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mt-2.5 lg:mt-5">
                      <p className="font-satoshi font-bold text-[20px] lg:text-[24px]">
                        ${cartItem.price}
                      </p>
                      <div className="flex items-center gap-4 bg-[#F0F0F0] py-1.5 px-5 rounded-[62px]">
                        <div className="size-4 lg:size-5">
                          <FaMinus
                            className="cursor-pointer"
                            onClick={() =>
                              decraseQuantityHandler(
                                cartItem.id,
                                cartItem.quantity,
                                cartItem.size,
                                cartItem.color,
                              )
                            }
                            size={20}
                          />
                        </div>
                        <span className="lg:text-[14px]">
                          {cartItem.quantity}
                        </span>
                        <div className="size-4 lg:size-5">
                          <FaPlus
                            className="cursor-pointer"
                            onClick={() =>
                              addQuantityHandler(
                                cartItem.id,
                                cartItem.quantity,
                                cartItem.size,
                                cartItem.color,
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-96 flex justify-center items-center">
          <p className="font-satoshi font-normal text-[#00000099] text-center mt">
            There is no product in your cart start adding some{" "}
            <Link href={"/products"} className="text-black font-bold underline">
              All Products
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
