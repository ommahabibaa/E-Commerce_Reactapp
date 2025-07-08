import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrderPlace = (customerData) => {
    alert(
      `Order placed!\nName: ${customerData.name}\nEmail: ${customerData.email}\nAddress: ${customerData.address}\nTotal: $${totalPrice.toFixed(2)}`
    );
    clearCart();
    setIsCheckoutOpen(false);
    onClose();
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-400px",
          width: "360px",
          height: "100vh",
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.85)",
          boxShadow: "-6px 0 15px rgba(0, 0, 0, 0.2)",
          padding: "2rem 1.5rem",
          transition: "right 0.4s ease",
          zIndex: 999,
          overflowY: "auto",
        }}
      >
        <h2 style={{ margin: "2rem 0 1rem", color: "#d32f2f", fontSize: "22px" }}>
          🛍️ Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p style={{ color: "#777", fontStyle: "italic", textAlign: "center" }}>
            Your cart is empty.
          </p>
        ) : (
          <>
            {/* Header Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              fontWeight: "600",
              fontSize: "14px",
              borderBottom: "2px solid #ccc",
              paddingBottom: "0.5rem",
              marginBottom: "0.5rem",
            }}>
              <span>Product</span>
              <span>Price</span>
              <span>Qty</span>
              <span>Remove</span>
            </div>

            {/* Item List */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  alignItems: "center",
                  fontSize: "14px",
                  padding: "0.8rem 0",
                  borderBottom: "1px dashed #ddd",
                }}
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      background: "#eee",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    style={{
                      background: "#eee",
                      border: "none",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >+</button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  title="Remove"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#d32f2f",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  ✖
                </button>
              </div>
            ))}

            {/* Total & Checkout */}
            <div style={{
              borderTop: "1px solid #bbb",
              marginTop: "1.5rem",
              paddingTop: "1rem",
              textAlign: "center"
            }}>
              <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                Total: <span style={{ color: "#d32f2f" }}>${totalPrice.toFixed(2)}</span>
              </p>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                style={{
                  backgroundColor: "#d32f2f",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.2rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "1rem",
                  fontWeight: "600",
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                }}
              >
                🚚 Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleOrderPlace}
      />
    </>
  );
};

export default CartSidebar;
