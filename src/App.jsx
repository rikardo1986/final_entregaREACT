import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";
import { routes } from "./routes/routes";
import Layout from "./components/layout/Layout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Toaster duration={2000} richColors position="top-center" />
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
            <Route element={<ProtectedRoutes />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
