import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";  // import CartSidebar

function App() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <Navbar />

      <CartSidebar />  {/* <-- Add CartSidebar here */}
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
        <Route path="/create" element={<CreateProduct addProduct={addProduct} />} />
      </Routes>
         <Footer />
    </Router>
  );
}

export default App;
