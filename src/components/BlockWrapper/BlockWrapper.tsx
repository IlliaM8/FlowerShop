import { FC, ReactNode } from "react";
import s from "./BlockWrapper.module.scss";
interface BlockWrapperProps {
  children: ReactNode;
}

export const BlockWrapper: FC<BlockWrapperProps> = ({ children }) => {
  return <div className={s.blockWrapper}>{children}</div>;
};
