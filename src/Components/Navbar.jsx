import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <button className="cart-button">
            <span className="cart-icon">🛒</span>
            CART
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
