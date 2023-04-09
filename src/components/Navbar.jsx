// Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://via.placeholder.com/50x50" alt="Linux-Gang" />
        <h1>Linux-Gang</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
