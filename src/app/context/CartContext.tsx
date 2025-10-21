"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type Product = {
  image: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  discount?: number | null;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + product.quantity);
    } else {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);
  const removeFromCart = (id: string | number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
