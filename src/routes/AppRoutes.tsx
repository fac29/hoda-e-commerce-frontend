import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Product from "../pages/Product/Product";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/product/:product" element={<Product />} />
    </Routes>
  );
}

export default AppRoutes;
