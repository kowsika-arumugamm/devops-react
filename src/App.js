import React, { useState } from "react";
import "./App.css";

function App() {
  const [orderMessage, setOrderMessage] = useState(""); // State to handle message

  const handleOrderClick = () => {
    setOrderMessage("✅ Ordered Successfully!");
    setTimeout(() => setOrderMessage(""), 2000); // Message disappears after 2 seconds
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Foodie Delight 🍽️</h1>
        <p>Delicious meals, delivered fresh & fast!</p>
      </div>

      {/* Featured Food Section */}
      <div className="food-grid">
        <div className="food-item">
          <img src="https://cdn-icons-png.flaticon.com/128/1046/1046786.png" alt="Burger" />
          <h3>Classic Burger 🍔</h3>
          <p>Juicy beef patty with crispy lettuce.</p>
        </div>

        <div className="food-item">
          <img src="https://cdn-icons-png.flaticon.com/128/1046/1046784.png" alt="Pizza" />
          <h3>Margherita Pizza 🍕</h3>
          <p>Cheesy, fresh, and full of flavor.</p>
        </div>

        <div className="food-item">
          <img src="https://cdn-icons-png.flaticon.com/128/1046/1046792.png" alt="Donut" />
          <h3>Glazed Donut 🍩</h3>
          <p>Soft and sweet, with a perfect glaze.</p>
        </div>

        <div className="food-item">
          <img src="https://cdn-icons-png.flaticon.com/128/135/135702.png" alt="Sushi" />
          <h3>Sushi Platter 🍣</h3>
          <p>Fresh and authentic Japanese sushi.</p>
        </div>

        <div className="food-item">
          <img src="https://cdn-icons-png.flaticon.com/128/3075/3075977.png" alt="Ice Cream" />
          <h3>Vanilla Ice Cream 🍦</h3>
          <p>Creamy and delicious vanilla delight.</p>
        </div>

        <div className="food-item">
          <img src="https://cdn-icons-png.flaticon.com/128/3075/3075976.png" alt="Pasta" />
          <h3>Spaghetti Pasta 🍝</h3>
          <p>Rich tomato sauce with basil.</p>
        </div>
      </div>

      {/* Order Button & Success Message */}
      <button className="order-btn" onClick={handleOrderClick}>Order Now</button>
      {orderMessage && <p className="success-message">{orderMessage}</p>}
    </div>
  );
}

export default App;
