import React, { useState } from "react";

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "400px",
    boxSizing: "border-box",
  },
};

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  if (!isOpen) return null; // Don't render modal if not open

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here
    onSubmit(formData);
  };

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div
        style={modalStyles.content}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
      >
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "0.5rem" }}
              />
            </label>
          </div>
          <button type="submit" style={{ marginRight: "1rem" }}>
            Place Order
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
