import { FC } from "react";
import NavBar from "./NavBar/NavBar";
import "./Header.scss";
import SearchInput from "./SearchInput/SearchInput";
interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header__container">
        <NavBar />
        <SearchInput />
      </div>
    </div>
  );
};
