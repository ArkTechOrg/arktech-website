import React, { useState } from "react";
import Penguin from "../assets/section/linuxgang-penguin.svg";
import { AnimatePresence, motion } from "framer-motion";

const spring = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 800,
      damping: 25,
      duration: 0.2,
    },
  },
};

const spring_tran = {
  transition: 0.6,
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
        <motion.h1
          variants={spring}
          transition={{ delay: 0.2 }}
          initial="hidden"
          animate="show"
        >
          Join the GNU/Linux gang
        </motion.h1>
        <motion.p
          variants={spring}
          transition={{ delay: 0.4 }}
          initial="hidden"
          animate="show"
        >
          Collaborate with Developers and work on Open Source Projects
        </motion.p>

        <div className="get__started__button__container">
          <AnimatePresence>
            {isClicked ? (
              <>
                <motion.button
                  variants={spring}
                  transition={spring_tran}
                  whileHover={{ scale: 1.1 }}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="get__started__button"
                  onClick={() => setClicked(false)}
                >
                  WhatsApp
                </motion.button>
                <motion.button
                  variants={spring}
                  transition={spring_tran}
                  whileHover={{ scale: 1.1 }}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="get__started__button"
                  onClick={() => setClicked(false)}
                >
                  Discord
                </motion.button>
              </>
            ) : (
              <motion.button
                variants={spring}
                transition={spring_tran}
                whileHover={{ scale: 1.1 }}
                initial="hidden"
                animate="show"
                exit="exit"
                className="get__started__button"
                onClick={() => setClicked(true)}
              >
                Get Started
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
      <div className="penguin_mobile">
        <motion.img
          transition={penguin}
          initial={{ y: 600 }}
          animate={{ y: 10 }}
          whileHover={{ scale: 1.5 }}
          src={Penguin}
          alt="Linux Gang Penguin"
        />
      </div>
      <div className="penguin_desktop">
        <motion.img
          transition={penguin}
          initial={{ x: 600 }}
          animate={{ x: 10 }}
          whileHover={{ scale: 1.5 }}
          src={Penguin}
          alt="Linux Gang Penguin"
        />
      </div>
    </React.Fragment>
  );
}
