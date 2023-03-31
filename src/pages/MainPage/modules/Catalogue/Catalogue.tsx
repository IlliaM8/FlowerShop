import { BlockWrapper } from "components/BlockWrapper";
import { FC, useRef, useEffect } from "react";
import "./Catalogue.scss";
import pink from "./assets/pink.png";
import green from "./assets/green.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { setRef } from "pages/MainPage/mainPageSlice";
import { motion } from "framer-motion";
import { plateAnim } from "animation";
export const Catalogue: FC = () => {
  const dispatch = useAppDispatch();
  const catalogueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(setRef(catalogueRef.current));
  }, [catalogueRef]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      ref={catalogueRef}
      className="catalogue"
    >
      <div className="catalogue__container">
        <img className="back__decor" src={pink} alt="pink" />
        <img className="back__decor" src={green} alt="green" />
        <motion.p
          custom={{ x: 1000, delay: 4 }}
          variants={plateAnim}
          className="catalogue__backword f"
        >
          букеты
        </motion.p>
        <motion.p
          custom={{ x: -1000, delay: 3 }}
          variants={plateAnim}
          className="catalogue__backword s"
        >
          Цветы
        </motion.p>
        <motion.p
          custom={{ y: 1000, delay: 5 }}
          variants={plateAnim}
          className="catalogue__backword t"
        >
          дополн
        </motion.p>
        <div className="catalogue__col">
          <motion.h1
            custom={{ y: -300, delay: 1 }}
            variants={plateAnim}
            className="catalogue__title"
          >
            каталог
          </motion.h1>
          <motion.p
            custom={{ x: -300, delay: 2 }}
            variants={plateAnim}
            className="catalogue__text"
          >
            У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
            всегда поможем вам подобрать букет для вашего события, наш менеджер
            вас проконсультирует и поможет определиться с выбором
            <span>Ознакомьтесь с нашими разделами каталога</span>
          </motion.p>
          <motion.article
            custom={{ x: -1000, delay: 3 }}
            variants={plateAnim}
            className="catalogue__plate"
          >
            <BlockWrapper>
              <div className="catalogue__plate-cont">
                <p className="plate__title">Цветы</p>
                <ul className="plate__list">
                  <li>для интерьера</li>
                  <li>для интерьера</li>
                  <li>Композиции из цветов</li>
                  <li>Розы</li>
                  <li>Свадебные</li>
                </ul>
                <Link className="plate__link" to="/">
                  смотреть каталог
                </Link>
              </div>
            </BlockWrapper>
          </motion.article>
        </div>
        <div className="catalogue__col">
          <motion.article
            custom={{ y: -1000, delay: 4 }}
            variants={plateAnim}
            className="catalogue__plate"
          >
            <BlockWrapper>
              <div className="catalogue__plate-cont">
                <p className="plate__title">готовые букеты из сухоцветов</p>
                <ul className="plate__list">
                  <li>букеты</li>
                  <li>для интерьера</li>
                  <li>Композиции</li>
                </ul>
                <Link className="plate__link" to="/">
                  смотреть каталог
                </Link>
              </div>
            </BlockWrapper>
          </motion.article>
          <motion.article
            custom={{ x: 1000, delay: 5 }}
            variants={plateAnim}
            className="catalogue__plate"
          >
            <BlockWrapper>
              <div className="catalogue__plate-cont">
                <p className="plate__title">дополнительно</p>
                <ul className="plate__list">
                  <li>шары</li>
                  <li>игрушки</li>
                  <li>открытки</li>
                  <li>упаковка</li>
                </ul>
                <Link className="plate__link" to="/">
                  смотреть каталог
                </Link>
              </div>
            </BlockWrapper>
          </motion.article>
        </div>
      </div>
    </motion.div>
  );
};
