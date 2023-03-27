import { ArrowProps } from "react-multi-carousel/lib/types";

import { FC } from "react";
import s from "./Arrow.module.scss";
interface LeftArrowProps extends ArrowProps {
  onClick(): void;
}
export const LeftArrow: FC<LeftArrowProps> = ({ onClick }) => {
  return (
    <img
      src="./ArrowL"
      alt="arrow"
      className={s.arrow}
      onClick={() => onClick()}
    ></img>
  );
};
