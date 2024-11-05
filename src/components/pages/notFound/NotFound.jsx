import logo from "../../../assets/compuenter_logo.png";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img src={logo} alt="COMPUENTER Logo" className="notfound-logo" />
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Página no encontrada</p>
    </div>
  );
};

export default NotFound;
