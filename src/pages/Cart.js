import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // State to toggle the customer form visibility
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  // State for customer form data
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
  });

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  // Handle form input changes
  const handleInputChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can add validation here if you want

    // After form filled, clear the cart
    clearCart();

    // Hide the form
    setShowCustomerForm(false);

    // Optionally reset form data
    setCustomerData({ name: "", email: "" });

    alert("Thank you! Cart has been cleared.");
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {!showCustomerForm && (
        <button onClick={() => setShowCustomerForm(true)}>Clear Cart</button>
      )}

      {showCustomerForm && (
        <form onSubmit={handleFormSubmit} style={{ marginTop: "1rem" }}>
          <h3>Customer Information</h3>
          <div>
            <label>
              Name:{" "}
              <input
                type="text"
                name="name"
                value={customerData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:{" "}
              <input
                type="email"
                name="email"
                value={customerData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Submit & Clear Cart</button>
          <button
            type="button"
            onClick={() => setShowCustomerForm(false)}
            style={{ marginLeft: "1rem" }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Cart;
