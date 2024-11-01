import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const resetCart = () => {
    setCart([]);
  };

  // elminar del carrito
  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };

  let data = { cart, addToCart, removeById, resetCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
