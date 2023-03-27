import { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "assets/logo.svg";
import BouquetsList from "./components/BouquetsList";
import CatalogueList from "./components/CatalogList";
import { bouquets, catalogue } from "./constants";
import Nav from "./components/Nav";
import { SocialMediaLinks } from "components/SocialMediaLinks";
export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="footer__col requsits">
          <li>
            <Link to="/">
              <img src={logo} alt="LF" />
              <title></title>
            </Link>
          </li>
          <li>
            <p className="footer__subtitle ">реквизиты</p>
          </li>
          <li>
            <p className="footer__requsits text">
              ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
              Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
              BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
              Минск, улица Толстого
            </p>
          </li>
        </ul>
        <ul className="footer__col catalog">
          <p className="footer__subtitle ">Каталог</p>
          <CatalogueList cotalogue={catalogue} />
        </ul>
        <ul className="footer__col bouquets">
          <p className="footer__subtitle">Букет</p>
          <BouquetsList bouquets={bouquets} />
        </ul>
        <ul className="footer__col nav">
          <Nav />
        </ul>
        <ul className="footer__col contacts">
          <li>
            <h5 className="contacts__subtitle">zakaz@loverflower.by</h5>
            <p className="contacts__text">
              Доставка 24/7 по договоренности с оператором
            </p>
          </li>
          <li>
            <h5 className="contacts__subtitle">ул. Тимирязева 67</h5>
            <p className="contacts__text">10:00 до 21:00 </p>
            <p className="contacts__text">без выходных </p>
          </li>
          <li>
            <h5 className="contacts__subtitle ">+375 (29) 113-69-69</h5>
            <p className="contacts__text">прием звонков круглосуточно </p>
          </li>
          <li>
            <SocialMediaLinks gap={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};
