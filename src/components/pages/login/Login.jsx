import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/compuenter_logo.png";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // simulamos el login y almacenamos el estado de autenticación
    sessionStorage.setItem("isAuth", "true");
    navigate("/checkout");
  };

  return (
    <div className="login-container">
      <img src={logo} alt="COMPUENTER Logo" className="login-logo" />
      <h2 className="login-title">Iniciar Sesión</h2>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="text"
          placeholder="Usuario"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
