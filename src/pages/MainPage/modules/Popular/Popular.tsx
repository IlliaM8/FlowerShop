import { FC } from "react";
import "./Popular.scss";
import img from "./assets/p.png";
import { IProduct } from "Types/Index";
import MySlider from "components/MySlider/MySlider";
import { Link } from "react-router-dom";
import back from "./assets/back.png";
import green from "./assets/green.svg";
import pink from "./assets/pink.svg";
import { plateAnim } from "animation";
import { motion } from "framer-motion";

export const Popular: FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="popular"
    >
      <div className="popular__container">
        <img className="popular__back" src={back} alt="popular__back" />
        <img className="popular__pink" src={pink} alt="popular__pink" />
        <img className="popular__green" src={green} alt="popular__green" />
        <motion.div
          custom={{ y: -300, delay: 1 }}
          variants={plateAnim}
          className="popular__title-box"
        >
          <h1 className="popular__title">Популярные</h1>
          <h1 className="popular__title">Букеты</h1>
        </motion.div>
        <motion.p
          custom={{ y: -300, delay: 2 }}
          variants={plateAnim}
          className="popular__text"
        >
          Самые любимые композиции наших клиентов
        </motion.p>
        <motion.div
          custom={{ y: 1000, delay: 4 }}
          variants={plateAnim}
          className="popular__text"
        >
          <MySlider />
        </motion.div>

        <Link className="popular__link" to="/">
          <p>смотреть весь каталог</p>
          <svg
            width="40"
            height="6"
            viewBox="0 0 80 6"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};
