import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container-navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://res.cloudinary.com/dmezvexmw/image/upload/v1731680129/logo/b54bnh9fdvpyyyjpji5h.png"
          alt="logo_compuenter"
        />
      </Link>
      <ul className="categories-list">
        <li>
          <Link className="category-link" to="/category/notebooks">
            Notebooks
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/category/discos">
            Discos duros
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/category/impresoras">
            Impresoras
          </Link>
        </li>
        <li>
          <Link className="category-link" to="/category/camaras">
            Cámaras Web
          </Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
