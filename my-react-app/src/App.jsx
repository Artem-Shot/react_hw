import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartModal from "./components/CartModal";
import HeaderTop from "./components/HeaderTop";
import HeaderBottom from "./components/HeaderBottom";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
      <Router>
        <HeaderTop />
        <HeaderBottom onCartClick={() => setShowCart(true)} />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>

        <CartModal show={showCart} handleClose={() => setShowCart(false)} />
        <Footer />
      </Router>
  );
}

export default App;
