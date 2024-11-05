import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div>
      {!isLoginPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Layout;
