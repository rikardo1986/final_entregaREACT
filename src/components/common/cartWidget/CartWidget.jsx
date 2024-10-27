import "./cartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link className="icono-carrito" to="/cart">
      <ShoppingCartIcon />
      <span>0</span>
    </Link>
  );
};
