import { ElementType, ComponentProps } from "react";
import s from "./Input.module.scss";

interface InputOwnProps<T extends ElementType = "input"> {
  primary?: true;
  secondary?: true;
  error: boolean;
  label?: true;
  children?: string;
}
type InputProps<T extends ElementType> = InputOwnProps<T> & ComponentProps<T>;

export default function Input<T extends ElementType = "input">({
  primary,
  secondary,
  label,
  error,
  children,
  ...otherProps
}: InputProps<T>) {
  const rootClass = [s.input];
  if (primary) rootClass.push(s.primary);
  if (secondary) rootClass.push(s.secondary);
  if (error) rootClass.push(s.error);
  return (
    <div className={s.input__cont}>
      <label>{children}</label>
      <input className={rootClass.join(" ")} {...otherProps} />
      {error ? <span>!</span> : ""}
    </div>
  );
}
