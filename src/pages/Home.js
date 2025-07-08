import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Home.css";

const Home = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="home-container">
      <div className="section-one">
        <div className="one-text">
          <h2>Explore Now</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <h2 className="section-title">Products</h2>

      <Link to="/create">
        <button className="create-btn">Create Product</button>
      </Link>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <Link to={`/product/${product.id}`} className="view-details-overlay">
                View Details
              </Link>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
