import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          background: "linear-gradient(to right, #000000, #8B0000)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        <h2 style={{ margin: 0, fontWeight: "bold" }}>🛍️ My Shoes...</h2>
        <div>
          <Link
            to="/"
            style={{
              marginRight: "1.5rem",
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
            }}
          >
            Home
          </Link>

          {/* Toggle Cart Sidebar from here */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              padding: "6px 12px",
              marginRight:"120px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            🛒 Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
