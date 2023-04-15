import React, { useState } from "react";
import navMenuIcon from "../assets/nav/nav-menu-icon.svg";
import githubMarkWhite from "../assets/nav/github-mark-white.svg";
import { AnimatePresence, motion } from "framer-motion";

const textHover = {
  type: "spring",
  scale: 1.1,
  textShadow: "#707070 0px 0px 10px",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
};

const spring = {
  type: "spring",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
};

const githubButtonHover = {
  type: "spring",
  scale: 1.1,
  boxShadow: "#707070 0px 0px 10px",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
  borderRadius: "50%",
};

const sidebar = {
  start: {},
  finished: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const sidebar_item = {
  start: {
    x: -200,
  },
  finished: {
    x: 0,
  },
};

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AnimatePresence>
      <motion.nav initial={{ y: -30 }} animate={{ y: 0 }}>
        <div class="nav-content">
          <AnimatePresence>
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
          </AnimatePresence>
        </div>
        <div className="nav-github">
          <motion.img
            initial={{ borderRadius: "50%" }}
            whileHover={githubButtonHover}
            height="30x"
            width="30px"
            src={githubMarkWhite}
            alt="GitHub Link"
            onClick={() => window.open("https://github.com/Linux-Gang")}
          />
        </div>
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              transition={{ type: "tween" }}
              className="sidebar"
              onClick={() => setShowSidebar(false)}
              initial={{ x: "-60vw" }}
              animate={{ x: 0 }}
              exit={{ x: "-60vw" }}
            >
              <AnimatePresence>
                <motion.ul
                  variants={sidebar}
                  initial="start"
                  animate="finished"
                >
                  <motion.li variants={sidebar_item}>
                    <a href="/">Home</a>
                  </motion.li>
                  <motion.li variants={sidebar_item}>
                    <a href="/">Get Started</a>
                  </motion.li>
                  <motion.li variants={sidebar_item}>
                    <a href="/">About Us</a>
                  </motion.li>
                </motion.ul>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={showSidebar ? "nav-menu open" : "nav-menu"}
          onClick={
            showSidebar
              ? () => setShowSidebar(false)
              : () => setShowSidebar(true)
          }
        >
          <div className="nav-menu_burger" />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Navbar;
