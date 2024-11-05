import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  // Verificar si el usuario está autenticado guardando un estado en sessionStorage
  const isAuth = sessionStorage.getItem("isAuth") === "true";

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
