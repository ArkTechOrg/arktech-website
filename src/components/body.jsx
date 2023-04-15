import React, { useState } from "react";
import Penguin from "../assets/section/linuxgang-penguin.svg";
import { AnimatePresence, motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 800,
  damping: 25,
  duration: 1,
};

const penguin = {
  type: "spring",
  stiffness: 50,
  damping: 25,
  duration: 2,
  scale: {
    type: "spring",
    stiffness: 800,
    damping: 25,
    duration: 0.2,
  },
};

export default function Body() {
  const [isClicked, setClicked] = useState(false);
  return (
    <React.Fragment>
      <motion.section layout>
        <h1>Join the GNU/Linux Gang</h1>
        <p>Collaborate with Developers and work on Open Source Projects</p>

        <div className="get__started__button__container">
          <AnimatePresence>
            {isClicked ? (
              <>
                <motion.button
                  transition={spring}
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="get__started__button"
                  onClick={() => setClicked(false)}
                >
                  WhatsApp
                </motion.button>
                <motion.button
                  transition={spring}
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="get__started__button"
                  onClick={() => setClicked(false)}
                >
                  Discord
                </motion.button>
              </>
            ) : (
              <motion.button
                transition={spring}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="get__started__button"
                onClick={() => setClicked(true)}
              >
                Get Started
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
      <div class="penguin_mobile">
        <motion.img
          transition={penguin}
          initial={{ y: 600 }}
          animate={{ y: 10 }}
          whileHover={{ scale: 1.5 }}
          src={Penguin}
          alt="Linux Gang Penguin"
        />
      </div>
      <div class="penguin_desktop">
        <motion.img
          transition={penguin}
          initial={{ x: -2000 }}
          animate={{ x: 10 }}
          whileHover={{ scale: 1.5 }}
          src={Penguin}
          alt="Linux Gang Penguin"
        />
      </div>
    </React.Fragment>
  );
}
