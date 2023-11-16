import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <button className="pharma-button">Ⓜ️EDICAL</button>
      </div>
      <nav className="navbar-nav">
        <ul>
          <li>
            <Link to="/phd/src/Component/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/productListing">Product List</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
