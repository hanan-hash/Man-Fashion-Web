// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [OrderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
  };

  return (
    <div className="checkout-container">
      {OrderSuccess ? (
        <h2>Congartulation Order Successful!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <h3>Cash on Delievery</h3>
          </div>
          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
