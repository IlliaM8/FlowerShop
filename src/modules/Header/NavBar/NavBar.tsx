import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./NavBar.module.scss";
import logo from "assets/logo.svg";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className={s.navBar}>
      <ul className={s.navBar__list}>
        <li className={s.nav__link}>
          <Link to="/">
            <img src={logo} alt="LF" />
          </Link>
        </li>
        <li className={s.nav__link}>
          <NavLink to="catalog">Каталог</NavLink>
        </li>
        <li className={s.nav__link}>
          <NavLink to="delivery">Доставка и оплата </NavLink>
        </li>
        <li className={s.nav__link}>
          <NavLink to="about-us">О нас</NavLink>
        </li>
        <li className={s.nav__link}>
          <NavLink to="contacts">Контакты</NavLink>
        </li>
        <li className={s.nav__link}>
          <NavLink to="FAQ">FAQ</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
