import "./checkout.css";
import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log("se envia");
    console.log(userInfo);
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

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
            Comprar
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
