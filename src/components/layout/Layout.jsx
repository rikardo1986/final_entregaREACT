import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="layout-container">
      {!isLoginPage && <Navbar />}
      <main className="content">
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Layout;
