import React from 'react';
import navMenuIcon from '../assets/nav/nav-menu-icon.svg';
import githubMarkWhite from '../assets/nav/github-mark-white.svg';

function Navbar() {
  return (
    <nav>
      <div className="nav-menu">
        <img height="20px" width="30px" src={navMenuIcon} alt="Menu Icon" />
      </div>
      <div className="nav-content">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Get Started</a></li>
          <li><a href="/">About Us</a></li>
        </ul>
      </div>
      <div className="nav-github">
        <img height="30px" width="30px" src={githubMarkWhite} alt="GitHub Link" />
      </div>
    </nav>
  );
}

export default Navbar;
