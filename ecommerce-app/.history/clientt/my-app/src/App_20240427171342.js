import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
          <ProtectedRoute path="/profile" element={<Profile />} />
          <ProtectedRoute path="/admin" element={<Admin />} admin={true} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
