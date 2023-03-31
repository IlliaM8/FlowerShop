import { FC } from "react";
import "./Order.scss";
import back from "./assets/back.png";
import boxes from "./assets/1.png";
import wreath from "./assets/2.png";
import MyButton from "components/myBytton/myButton";
import { motion } from "framer-motion";
import { plateAnim } from "animation";

interface OrderProps {}

export const Order: FC<OrderProps> = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="order"
    >
      <img className="order__back" src={back} alt="back" />
      <div className="order__container">
        <motion.h1
          custom={{ x: -300, delay: 1 }}
          variants={plateAnim}
          className="order__title"
        >
          Как сделать <span>заказ</span>
        </motion.h1>
        <div className="order__steps">
          <div className="order__culum">
            <motion.div
              custom={{ x: -300, delay: 3 }}
              variants={plateAnim}
              className="order__step"
            >
              <div className="order__sub">1 шаг</div>
              <div className="order__text">
                Выберите какие цветы или подарки вы хотите купить
              </div>
            </motion.div>
            <motion.div
              custom={{ x: -300, delay: 4 }}
              variants={plateAnim}
              className="order__step"
            >
              <div className="order__sub">2 шаг</div>
              <div className="order__text">
                Оформите заказ, и мы отправим вам подтверждение на электронную
                почту, а так же менеджер свяжется с вами по телефону или в
                WhatsApp
              </div>
            </motion.div>
            <motion.div
              custom={{ x: -300, delay: 5 }}
              variants={plateAnim}
              className="order__step"
            >
              <div className="order__sub">3 шаг</div>
              <div className="order__text">
                Наши флористы бережно подойдут к созданию букета цветов в самом
                начале дня или накануне
              </div>
            </motion.div>
          </div>
          <div className="order__culum">
            <motion.div
              custom={{ x: 300, delay: 6 }}
              variants={plateAnim}
              className="order__step"
            >
              <div className="order__sub">4 шаг</div>
              <div className="order__text">
                Один из наших курьеров или партнёров доставит ваш заказ по
                указанному адресу. Мы отправим вам сообщение в Whats App как
                только заказ будет доставлен
              </div>
            </motion.div>
            <motion.div
              custom={{ x: 300, delay: 7 }}
              variants={plateAnim}
              className="order__step"
            >
              <div className="order__sub">5 шаг</div>
              <div className="order__text">
                Наслаждайтесь цветами , если вы заказали их для дома или
                любовью, которой поделились, если вы заказали для друга начале
                дня или накануне
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="special"
        >
          <motion.div
            custom={{ y: -300, delay: 1 }}
            variants={plateAnim}
            className="special__title"
          >
            особенный <span>повод?</span>
          </motion.div>
          <motion.img
            custom={{ x: 300, delay: 2 }}
            variants={plateAnim}
            className="special__img"
            src={boxes}
            alt="boxes"
          />
          <motion.img
            custom={{ x: 300, delay: 3 }}
            variants={plateAnim}
            className="special__img"
            src={wreath}
            alt="wreath"
          />
          <ul className="special__list">
            <motion.div custom={{ x: -300, delay: 4 }} variants={plateAnim}>
              Мы готовы прийти на помощь и собрать уникальный букет, на любой
              вкус, бюджет и для любого события по вашему индивидуальному
              заказу.
            </motion.div>
            <motion.li custom={{ x: -300, delay: 5 }} variants={plateAnim}>
              учтем даже самые изысканные пожелания;
            </motion.li>
            <motion.li custom={{ x: -300, delay: 6 }} variants={plateAnim}>
              подберем свежайшие цветы и сделаем уникальный букет или
              композицию;
            </motion.li>
            <motion.li custom={{ x: -300, delay: 7 }} variants={plateAnim}>
              оплатить можно при получении или онлайн на сайте
            </motion.li>
            <motion.div
              custom={{ y: 300, delay: 8 }}
              variants={plateAnim}
              className="special__link"
            >
              <MyButton as="link" to="/" primary>
                собрать индивидуальный букет
              </MyButton>
            </motion.div>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};
