import "./cartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link className="icono-carrito" to="/cart">
      {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
      <ShoppingCartIcon className="cart-icon" />
    </Link>
  );
};
