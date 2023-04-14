import React from "react";
import navMenuIcon from "../assets/nav/nav-menu-icon.svg";
import githubMarkWhite from "../assets/nav/github-mark-white.svg";
import { AnimatePresence, motion } from "framer-motion";

const textHover = { scale: 1.1, textShadow: "#707070 0px 0px 10px" };

const spring = {
  type: "spring",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
};

function Navbar() {
  return (
    <AnimatePresence>
      <motion.nav initial={{ y: -30 }} animate={{ y: 0 }}>
        <div className="nav-menu">
          <img height="20px" width="30px" src={navMenuIcon} alt="Menu Icon" />
        </div>
        <div className="nav-content">
          <ul>
            <motion.li transition={spring} whileHover={textHover}>
              <a href="/">Home</a>
            </motion.li>
            <motion.li transition={spring} whileHover={textHover}>
              <a href="/">Get Started</a>
            </motion.li>
            <motion.li transition={spring} whileHover={textHover}>
              <a href="/">About Us</a>
            </motion.li>
          </ul>
        </div>
        <div className="nav-github">
          <motion.img
            whileHover={{ scale: 1.1, boxShadow: "#707070 0px 0px 10px" }}
            height="30x"
            width="30px"
            src={githubMarkWhite}
            alt="GitHub Link"
          />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Navbar;
