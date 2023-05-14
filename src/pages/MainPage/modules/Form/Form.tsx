import Input from "components/Input/Input";
import MyButton from "components/myBytton/myButton";
import { FC, forwardRef } from "react";
import { motion } from "framer-motion";

import "./Form.scss";

const Form: FC = forwardRef<HTMLFormElement>(({}, ref) => {
  return (
    <form ref={ref} className="form">
      <div className="form__input">
        <Input placeholder="Ваше имя" secondary error={false} />
      </div>
      <div className="form__input">
        <Input placeholder="+38 (097) 094-24-67" secondary error={false} />
      </div>
      <div className="form__input-area">
        <Input
          type="textarea"
          placeholder="Ваш комментарий"
          secondary
          error={false}
        />
      </div>
      <div className="form__button">
        <MyButton primary>отправить</MyButton>
      </div>
      <p>
        Нажимая на кнопку «Отправить», я даю свое согласие на обработку
        персональных данных, в соответствии с Политикой конфиденциальности
      </p>
    </form>
  );
});
export const MForm = motion(Form);
export default Form;
