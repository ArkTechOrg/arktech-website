import "./Home.scss";
import HomeContent from "../../assets/data/HomeContent";
import Button from "../../components/Button/Button";
import { AnimatePresence, motion } from "framer-motion";

const penguinAnimation = {
  initial: {
    y: 350,
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header__head">{HomeContent.header.head}</h1>
        <h3 className="home__header__subhead">{HomeContent.header.subHead}</h3>
        <Button text={HomeContent.header.button.text} />
      </div>
      <div className="home__penguin">
        <AnimatePresence>
          <motion.img
            className="home__penguin__image"
            src={HomeContent.penguinVector}
            alt="Penguin"
            variants={penguinAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;