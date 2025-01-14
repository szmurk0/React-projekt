import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <button
            className="navbar-button"
            onClick={() => setActivePage('products')}
          >
            Produkty
          </button>
        </li>
        <li>
          <button
            className="navbar-button"
            onClick={() => setActivePage('orders')}
          >
            Historia zamówień
          </button>
        </li>
        <li>
          <button className="navbar-button" onClick={onLogout}>
            Wyloguj
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
