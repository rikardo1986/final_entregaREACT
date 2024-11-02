import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuth = true;
  return <div>{isAuth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoutes;
