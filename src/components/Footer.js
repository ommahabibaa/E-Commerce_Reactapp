import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #000000, #8B0000)", // Black to dark red
        color: "#fff",
        textAlign: "center",
        padding: "2rem 0",
        marginTop: "2rem",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem", fontWeight: "bold", letterSpacing: "1px" }}>
        My Shop
      </h3>
      <p style={{ fontSize: "14px", color: "#e0e0e0", maxWidth: "600px", margin: "0 auto" }}>
        Made for passionate lovers of <strong>Shoes</strong>, <strong>Bags</strong> & <strong>Streetwear</strong> fashion.
        Discover your perfect style with us.
      </p>
      <hr style={{ margin: "1rem auto", width: "80%", borderColor: "#555" }} />
      <p style={{ fontSize: "13px", color: "#aaa" }}>
        &copy; {new Date().getFullYear()} My Shop — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
