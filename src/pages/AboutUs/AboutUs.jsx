import "./AboutUs.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
      <motion.section layout="size">
        <motion.h1 layout="position">About Us</motion.h1>
        <motion.p layout="position">Check this section later</motion.p>
      </motion.section>
    </React.Fragment>
  );
}
