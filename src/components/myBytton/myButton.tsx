import { ComponentProps, ElementType } from "react";
import { Link } from "react-router-dom";
import s from "./myButton.module.scss";
type ButtonOwnProps<E extends ElementType = ElementType & "Link"> = {
  children?: string;
  primary?: true;
  secondary?: true;
  to?: string;
  as?: E;
};
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";
export default function MyButton<
  E extends ElementType = typeof defaultElement
>({ children, secondary, primary, as, to, ...otherProps }: ButtonProps<E>) {
  const TagName = as || defaultElement;
  const rootClass = [s.button];
  if (primary) rootClass.push(s.primary);
  if (secondary) rootClass.push(s.secondary);

  return as === "link" ? (
    <Link className={rootClass.join(" ")} to={to ? to : "/"}>
      {children}
    </Link>
  ) : (
    <TagName className={rootClass.join(" ")} {...otherProps}>
      {children}
    </TagName>
  );
}
