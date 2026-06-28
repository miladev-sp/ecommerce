"use client";

import { createContext, useContext, useEffect, useState } from "react";
type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  size: string;
  color: string;
  discountPercentage: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (
    id: number,
    quantity: number,
    size: string,
    color: string,
  ) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  function addToCart(item: CartItem) {
    setCartItems((prev) => {
      const exists = prev.find(
        (i) =>
          i.id === item.id && i.size === item.size && i.color === item.color,
      );

      if (exists) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      }
      return [...prev, item];
    });
  }
  function removeFromCart(id: number, color: string, size: string) {
    setCartItems((prev) =>
      prev.filter(
        (i) => !(i.id === id && i.size === size && i.color === color),
      ),
    );
  }

  function updateQuantity(
    id: number,
    quantity: number,
    size: string,
    color: string,
  ) {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size && i.color === color
          ? { ...i, quantity }
          : i,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
