"use client";
import { PRODUCT_COLORS } from "@/src/constants";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { PRODUCT_SIZES } from "@/src/constants";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Product } from "@/src/types";
import { useCart } from "@/src/context/CartContext";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
type Props = {
  product: Product;
};
export default function DetailsSelector({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState(PRODUCT_COLORS[0]);
  const [selectedSize, setSelectedSize] = useState(PRODUCT_SIZES[1]);
  const [qty, setQty] = useState(1);
  const [pendingCart, setPendingCart] = useState(false);
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const productQty = cartItems.filter(
    (i) =>
      i.id === product.id &&
      i.color === selectedColor &&
      i.size === selectedSize,
  )[0]?.quantity;
  function addtoCartHandler() {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: qty,
      size: selectedSize,
      color: selectedColor,
      discountPercenrage: product.discountPercentage,
    };

    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size,
    );
    setPendingCart(true);
    setTimeout(() => {
      addToCart(item);
      if (!existingItem) {
        toast.success(`The ${product.title} Added to your cart!`);
      }
      setPendingCart(false);
    }, 2000);
  }
  function addQuantityHandler() {
    setPendingCart(true);
    setTimeout(() => {
      updateQuantity(product.id, productQty + 1, selectedSize, selectedColor);
      toast.success(`Quantity of ${product.title} in your cart updated!`);
      setPendingCart(false);
    }, 2000);
  }
  function decraseQuantityHandler() {
    setPendingCart(true);
    setTimeout(() => {
      updateQuantity(product.id, productQty - 1, selectedSize, selectedColor);
      toast.success(`Quantity of ${product.title} in your cart updated!`);
      setPendingCart(false);
    }, 2000);
  }
  function deleteProductHandler() {
    setPendingCart(true);
    setTimeout(() => {
      removeFromCart(product.id, selectedColor, selectedSize);
      toast.success(`${product.title} removed from your cart!`);
      setPendingCart(false);
    }, 2000);
  }
  return (
    <div>
      <div>
        <hr className="text-[#0000001A]  lg:mx-20 mt-4 xl:mx-0" />
        <div className="mt-3">
          <p className="font-satoshi text-[14px] font-normal text-[#00000099] xl:text-[16px]">
            Select Colors
          </p>
          <div className=" flex gap-3 mt-2.5">
            {PRODUCT_COLORS.map((color) => (
              <button
                className={`rounded-full w-9.75 h-9.75 cursor-pointer flex items-center justify-center `}
                key={color}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                type="button"
              >
                {selectedColor === color ? (
                  <FaCheck className="text-white" />
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <hr className="text-[#0000001A]  lg:mx-20 mt-4 xl:mx-0" />
        <div className="mt-3">
          <p className="font-satoshi text-[14px] font-normal text-[#00000099] xl:text-[16px]">
            Select Size
          </p>
          <div className="mt-2.5 flex gap-1.5">
            {PRODUCT_SIZES.map((size) => (
              <button
                type="button"
                className={`bg-[#F0F0F0] rounded-[62px] w-18.5 h-9.75 font-satoshi font-normal text-[14px] text-[#00000099] cursor-pointer ${selectedSize === size ? `bg-black text-white text-medium` : ""} xl:text-[16px] xl:w-26 xl:h-11.5`}
                key={size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <hr className="text-[#0000001A]  lg:mx-20 mt-4 xl:mx-0" />
        {cartItems.find(
          (i) =>
            i.id === product.id &&
            i.color === selectedColor &&
            i.size === selectedSize,
        ) ? (
          <div className="flex justify-center">
            <div className="flex justify-around items-center mt-4 gap-4 rounded-[62px] text-white bg-black w-1/2 p-2.5 ">
              <button className=" cursor-pointer">
                {productQty === 1 ? (
                  <MdDelete size={25} onClick={deleteProductHandler} />
                ) : (
                  <FaMinus size={25} onClick={decraseQuantityHandler} />
                )}
              </button>
              <span className="text-md lg:text-xl">
                {pendingCart ? (
                  <div className="w-6 h-6 rounded-full border-[3px] border-solid border-white border-r-transparent animate-spin"></div>
                ) : (
                  productQty
                )}
              </span>
              <button className=" cursor-pointer" onClick={addQuantityHandler}>
                <FaPlus size={25} />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex gap-3 xl:gap-4">
            <div className="flex items-center justify-center gap-3.5 bg-[#F0F0F0] rounded-[62px] py-3 px-4 flex-1 xl:justify-between">
              <FaMinus
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="cursor-pointer"
              />
              <span className="font-satoshi font-medium text-[14px] xl:text-[16px] prevent-select">
                {qty}
              </span>
              <FaPlus
                onClick={() => setQty((q) => q + 1)}
                className="cursor-pointer"
              />
            </div>
            <button
              className="flex-2 bg-black text-[white] py-4 px-12 rounded-[62px] font-satoshi font-normal xl:text-[16px] prevent-select cursor-pointer flex justify-center"
              onClick={addtoCartHandler}
            >
              {pendingCart ? (
                <div className="w-6 h-6 rounded-full border-[3px] border-solid border-white border-r-transparent animate-spin"></div>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
