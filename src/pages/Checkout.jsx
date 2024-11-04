// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your payment processing logic
    setPaymentSuccess(true);

    // Optional: Clear the cart after successful payment
    // navigate('/'); // Redirect to the homepage after payment
  };

  return (
    <div className="checkout-container">
      {paymentSuccess ? (
        <h2>Payment Successful!</h2>
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
          </div>
          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
