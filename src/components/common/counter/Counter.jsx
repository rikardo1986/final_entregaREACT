import "./counter.css";
import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    stock > contador ? setContador(contador + 1) : alert("limite stock");
  };
  const restar = () => {
    setContador(contador - 1);
  };

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
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Counter;
