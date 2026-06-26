"use client";

import { createContext, useContext, useState } from "react";
type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  size: string;
  color: string;
  discountPercenrage: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
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
  function removeFromCart(id: number) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
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
