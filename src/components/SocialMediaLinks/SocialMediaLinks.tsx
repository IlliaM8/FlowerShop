import { FC } from "react";

import s from "./SocialMediaLinks.module.scss";
import inst from "./assets/inst.svg";
import viber from "./assets/viber.svg";
import whatsup from "./assets/whatsup.svg";

interface SocialMediaLinksProps {
  vertical?: boolean;
  gap: number;
}

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({
  vertical,
  gap,
}) => {
  return (
    <nav
      className={s.container}
      style={{ flexDirection: vertical ? "column" : "row", gap: gap }}
    >
      <a href="#">
        <img src={inst} alt="" />
      </a>
      <a href="#">
        <img src={viber} alt="" />
      </a>
      <a href="#">
        <img src={whatsup} alt="" />
      </a>
    </nav>
  );
};
