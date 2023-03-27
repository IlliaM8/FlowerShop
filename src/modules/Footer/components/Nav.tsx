import { FC } from "react";
import { Link } from "react-router-dom";

const Nav: FC = () => {
  return (
    <>
      <li className="footer__link">
        <Link to="delivery">Доставка и оплата </Link>
      </li>
      <li className="footer__link">
        <Link to="about-us">О нас</Link>
      </li>
      <li className="footer__link">
        <Link to="FAQ">FAQ</Link>
      </li>
      <li className="footer__link">
        <Link to="contacts">Контакты</Link>
      </li>
      <li className="footer__link">
        <Link to="FAQ">
          для корпоративных <br /> клиентов
        </Link>
      </li>
    </>
  );
};

export default Nav;
