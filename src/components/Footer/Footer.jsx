import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>&copy; ArkTech {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
