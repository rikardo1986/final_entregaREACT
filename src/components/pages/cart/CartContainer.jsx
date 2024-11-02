import "./cartContainer.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu carrito de compras</h1>

      {cart.length === 0 ? (
        <p className="cart-empty">No tienes productos en el carrito 🛒😔</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="cart-item-info">
              <h2>{product.title}</h2>
              <h3>Cantidad: {product.quantity}</h3>
            </div>
            <button
              onClick={() => removeById(product.id)}
              className="cart-remove-button"
            >
              Eliminar
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button onClick={resetCart} className="cart-reset-button">
          Limpiar carrito
        </button>
      )}
      <h2 className="cart-total">El total a pagar es {totalEnElCarrito}</h2>

      <Link to="/checkout" className="cart-checkout-button">
        Finalizar compra
      </Link>
    </div>
  );
};

export default CartContainer;
