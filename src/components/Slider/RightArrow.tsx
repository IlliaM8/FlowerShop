import { ArrowProps } from "react-multi-carousel/lib/types";

import { FC } from "react";
import s from "./Arrow.module.scss";
interface RightArrowProps extends ArrowProps {
  onClick(): void;
}
export const RightArrow: FC<RightArrowProps> = ({ onClick }) => {
  return (
    <img
      src="./ArrowR"
      alt="arrow"
      className={s.arrow}
      onClick={() => onClick()}
    ></img>
  );
};
