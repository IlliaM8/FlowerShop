import { FC } from "react";
import "./Order.scss";
import back from "./assets/back.png";
import boxes from "./assets/1.png";
import wreath from "./assets/2.png";
import MyButton from "components/myBytton/myButton";

interface OrderProps {}

export const Order: FC<OrderProps> = () => {
  return (
    <div className="order">
      <img className="order__back" src={back} alt="back" />
      <div className="order__container">
        <h1 className="order__title">
          Как сделать <span>заказ</span>
        </h1>
        <div className="order__steps">
          <div className="order__culum">
            <div className="order__step">
              <div className="order__sub">1 шаг</div>
              <div className="order__text">
                Выберите какие цветы или подарки вы хотите купить
              </div>
            </div>
            <div className="order__step">
              <div className="order__sub">2 шаг</div>
              <div className="order__text">
                Оформите заказ, и мы отправим вам подтверждение на электронную
                почту, а так же менеджер свяжется с вами по телефону или в
                WhatsApp
              </div>
            </div>
            <div className="order__step">
              <div className="order__sub">3 шаг</div>
              <div className="order__text">
                Наши флористы бережно подойдут к созданию букета цветов в самом
                начале дня или накануне
              </div>
            </div>
          </div>
          <div className="order__culum">
            <div className="order__step">
              <div className="order__sub">4 шаг</div>
              <div className="order__text">
                Один из наших курьеров или партнёров доставит ваш заказ по
                указанному адресу. Мы отправим вам сообщение в Whats App как
                только заказ будет доставлен
              </div>
            </div>
            <div className="order__step">
              <div className="order__sub">5 шаг</div>
              <div className="order__text">
                Наслаждайтесь цветами , если вы заказали их для дома или
                любовью, которой поделились, если вы заказали для друга начале
                дня или накануне
              </div>
            </div>
          </div>
        </div>
        <div className="special">
          <h1 className="special__title">
            особенный <span>повод?</span>
          </h1>
          <img className="special__img" src={boxes} alt="boxes" />
          <img className="special__img" src={wreath} alt="wreath" />
          <ul className="special__list">
            <div>
              Мы готовы прийти на помощь и собрать уникальный букет, на любой
              вкус, бюджет и для любого события по вашему индивидуальному
              заказу.
            </div>
            <li>учтем даже самые изысканные пожелания;</li>
            <li>
              подберем свежайшие цветы и сделаем уникальный букет или
              композицию;
            </li>
            <li>оплатить можно при получении или онлайн на сайте</li>
            <div className="special__link">
              <MyButton as="link" to="/" primary>
                собрать индивидуальный букет
              </MyButton>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
