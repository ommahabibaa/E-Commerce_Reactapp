import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <p style={{ textAlign: "center", marginTop: "3rem", color: "crimson" }}>❌ Product not found</p>;
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f4f4f4",
      minHeight: "90vh"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "1.5rem"
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "1rem"
          }}
        />
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{product.name}</h2>
        <p style={{ color: "#555", fontSize: "0.95rem", marginBottom: "1rem" }}>{product.description}</p>
        <p style={{ fontWeight: "bold", color: "#d32f2f", fontSize: "1.1rem" }}>${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "1rem",
            backgroundColor: "#d32f2f",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
            fontWeight: "600"
          }}
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
