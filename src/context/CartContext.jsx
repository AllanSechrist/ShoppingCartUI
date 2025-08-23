import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {

  }, [cart])

  return (
    <CartContext.Provider value={{cart}}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)
}
