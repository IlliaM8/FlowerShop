import { BlockWrapper } from "components/BlockWrapper";
import { FC } from "react";
import "./Catalogue.scss";
import pink from "./assets/pink.png";
import green from "./assets/green.png";
import { Link } from "react-router-dom";

interface CatalogueProps {}

export const Catalogue: FC<CatalogueProps> = () => {
  document.title = "Каталог";
  return (
    <div className="catalogue">
      <div className="catalogue__container">
        <img className="back__decor" src={pink} alt="pink" />
        <img className="back__decor" src={green} alt="green" />
        <p className="catalogue__backword f">букеты</p>
        <p className="catalogue__backword s">Цветы</p>
        <p className="catalogue__backword t">дополн</p>
        <div className="catalogue__col">
          <h1 className="catalogue__title">каталог</h1>
          <p className="catalogue__text">
            У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
            всегда поможем вам подобрать букет для вашего события, наш менеджер
            вас проконсультирует и поможет определиться с выбором
            <span>Ознакомьтесь с нашими разделами каталога</span>
          </p>
          <article className="catalogue__plate">
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
          </article>
        </div>
        <div className="catalogue__col">
          <article className="catalogue__plate">
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
          </article>
          <article className="catalogue__plate last">
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
          </article>
        </div>
      </div>
    </div>
  );
};
