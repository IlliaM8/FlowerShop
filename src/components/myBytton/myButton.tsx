import { ComponentProps, ElementType } from "react";
import s from "./myButton.module.scss";
type ButtonOwnProps<E extends ElementType = ElementType> = {
  children?: string;
  primary?: true;
  secondary?: true;
  as?: E;
};
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";
export default function MyButton<
  E extends ElementType = typeof defaultElement
>({ children, secondary, primary, as, ...otherProps }: ButtonProps<E>) {
  const TagName = as || defaultElement;
  const rootClass = [s.button];
  if (primary) rootClass.push(s.primary);
  if (secondary) rootClass.push(s.secondary);
  return (
    <TagName className={rootClass.join(" ")} {...otherProps}>
      {children}
    </TagName>
  );
}
