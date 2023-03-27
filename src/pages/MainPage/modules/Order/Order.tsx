import { FC } from "react";
import "./Order.scss";
import back from "./assets/back.png";
interface OrderProps {}

export const Order: FC<OrderProps> = () => {
  return (
    <div className="order">
      <div className="order__container">
        <h1 className="order__title">
          Как сделать <span>заказ</span>
        </h1>
        <img className="order__back" src={back} alt="back" />
      </div>
    </div>
  );
};
