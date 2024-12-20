import "./checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();
    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <div className="voucher-container">
        <h2 className="voucher-title">🎉 ¡Gracias por tu compra! 🎉</h2>
        <p className="voucher-message">
          Tu número de orden es:
          <span className="voucher-order-id"> {orderId}</span>
        </p>
        <p className="voucher-note">
          Recibirás un correo electrónico con los detalles de tu compra.
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={capturarInfo}
          className="form-input"
        />
        <input
          type="email"
          placeholder="correo@compuenter.cl"
          name="email"
          onChange={capturarInfo}
          className="form-input"
        />
        <input
          type="text"
          placeholder="+56 9 98765438"
          name="phoneNumber"
          onChange={capturarInfo}
          className="form-input"
        />
        <div className="button-group">
          <button type="submit" className="submit-button">
            Pagar
          </button>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
