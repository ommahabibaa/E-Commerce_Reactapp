import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price)
    };
    addProduct(newProduct);
    navigate("/");
  };

  // 🎨 Inline Style Objects
  const containerStyle = {
    maxWidth: "500px",
    margin: "3rem auto",
    padding: "2rem",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #fff, #f9f9f9)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif"
  };

  const titleStyle = {
    textAlign: "center",
    color: "#d32f2f",
    marginBottom: "1.5rem"
  };

  const inputStyle = {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "1rem",
    width: "100%",
    fontSize: "15px",
    boxSizing: "border-box"
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "80px"
  };

  const buttonStyle = {
    backgroundColor: "#d32f2f",
    color: "#fff",
    border: "none",
    padding: "0.9rem",
    width: "100%",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "1rem"
  };

  const previewImageStyle = {
    width: "150px",
    height: "auto",
    marginTop: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🛒 Create a New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          style={textareaStyle}
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            style={previewImageStyle}
          />
        )}
        <button type="submit" style={buttonStyle}>Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
