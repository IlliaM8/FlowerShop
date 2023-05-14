import { FC } from "react";
import "./Question.scss";
import branch from "./Assets/branch.png";
import pink from "./Assets/pink.png";
import green from "./Assets/green.png";
import { MForm } from "../Form/Form";
import ph1 from "./Assets/1.png";
import ph2 from "./Assets/2.png";
import ph3 from "./Assets/3.png";
import ph4 from "./Assets/4.png";
import { motion } from "framer-motion";

import { SocialMediaLinks } from "components/SocialMediaLinks";
import { plateAnim } from "animation";

export const Question: FC = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="question"
      >
        <img className="question__branch" src={branch} alt="branch" />
        <div className="question__container">
          <img className="question__dec-p" src={pink} alt="pink" />
          <img className="question__dec-gr" src={green} alt="green" />
          <div className="question__cul">
            <motion.h1
              custom={{ y: -300, delay: 1 }}
              variants={plateAnim}
              className="question__title"
            >
              остались <span>вопросы?</span>
            </motion.h1>
          </div>
          <div className="question__cul">
            <motion.div
              custom={{ x: 300, delay: 2 }}
              variants={plateAnim}
              className="question__text"
            >
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму
              обратной связи, и наш специалист свяжется с вами в течение 15
              минут.
            </motion.div>

            <MForm custom={{ x: 300, delay: 3 }} variants={plateAnim} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inst"
      >
        <div className="inst__container">
          <div className="inst__row">
            <motion.img
              custom={{ y: 300, delay: 1 }}
              variants={plateAnim}
              src={ph1}
              alt="ph"
            />
            <motion.img
              custom={{ y: 300, delay: 2 }}
              variants={plateAnim}
              src={ph2}
              alt="ph"
            />
            <motion.img
              custom={{ y: 300, delay: 3 }}
              variants={plateAnim}
              src={ph3}
              alt="ph"
            />
            <motion.img
              custom={{ y: 300, delay: 4 }}
              variants={plateAnim}
              src={ph4}
              alt="ph"
            />
            <motion.div
              custom={{ x: -300, delay: 2 }}
              variants={plateAnim}
              className="inst__photo-back"
            >
              instagram
            </motion.div>
          </div>
          <motion.div
            custom={{ x: 300, delay: 5 }}
            variants={plateAnim}
            className="inst__links"
          >
            <SocialMediaLinks gap={30} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
