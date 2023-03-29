import { FC } from "react";
import "./Question.scss";
import branch from "./Assets/branch.png";
import pink from "./Assets/pink.png";
import green from "./Assets/green.png";
import Form from "../Form/Form";
import ph1 from "./Assets/1.png";
import ph2 from "./Assets/2.png";
import ph3 from "./Assets/3.png";
import ph4 from "./Assets/4.png";
import greenL from "./Assets/greenLS.png";
import greenC from "./Assets/greenLr.png";
import pinkR from "./Assets/pinkR.png";
import { SocialMediaLinks } from "components/SocialMediaLinks";

interface QustionProps {}

export const Question: FC<QustionProps> = () => {
  return (
    <>
      <div className="question">
        <img className="question__branch" src={branch} alt="branch" />
        <div className="question__container">
          <img className="question__dec-p" src={pink} alt="pink" />
          <img className="question__dec-gr" src={green} alt="green" />
          <div className="question__cul">
            <h1 className="question__title">
              остались <span>вопросы?</span>
            </h1>
          </div>
          <div className="question__cul">
            <div className="question__text">
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму
              обратной связи, и наш специалист свяжется с вами в течение 15
              минут.
            </div>
            <Form />
          </div>
        </div>
      </div>
      <div className="inst">
        <div className="inst__container">
          <div className="inst__row">
            <img src={ph1} alt="ph" />
            <img src={ph2} alt="ph" />
            <img src={ph3} alt="ph" />
            <img src={ph4} alt="ph" />
            <div className="inst__photo-back">instagram</div>
          </div>
          <div className="inst__links">
            <SocialMediaLinks gap={30} />
          </div>
        </div>
      </div>
    </>
  );
};
