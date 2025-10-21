"use client";

import { createContext, useContext, useState } from "react";

type ProductBySize = {
  id: number;
  size: number;
};
type ProductContextType = {
  selectedProductSize: ProductBySize[];
  setSlectedSize: (product: ProductBySize) => void;
};
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedProductSize, setSelectedProductSize] = useState<
    ProductBySize[]
  >([]);

  const setSlectedSize = (product: ProductBySize) => {
    const existingItem = selectedProductSize.find(
      (item) => item.id === product.id && item.size === product.size
    );
    if (!existingItem) {
      setSelectedProductSize(() => [product]);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        setSlectedSize,
        selectedProductSize,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
