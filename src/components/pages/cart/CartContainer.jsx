import "./cartContainer.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Aca el carrito</h1>
      <Link to="/checkout" className="cart-checkout-button">
        Finalizar compra
      </Link>
    </div>
  );
};

export default CartContainer;
