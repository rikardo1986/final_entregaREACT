import "./counter.css";
import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (stock - totalInCart > contador) {
      setContador(contador + 1);
    } else {
      alert("Límite de stock alcanzado");
    }
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  const isOutOfStock = totalInCart + contador > stock;

  return (
    <div className="counter-container">
      <div className="counter-controls">
        <button className="counter-button" onClick={restar}>
          -
        </button>
        <h2 className="counter-display">{contador}</h2>
        <button className="counter-button" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => agregarAlCarrito(contador)}
        disabled={isOutOfStock}
        style={{ backgroundColor: isOutOfStock ? "#ccc" : "#28a745" }}
      >
        {isOutOfStock ? "Sin stock" : "Agregar al Carrito"}
      </button>
    </div>
  );
};

export default Counter;
