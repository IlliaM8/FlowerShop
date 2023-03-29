import Input from "components/Input/Input";
import MyButton from "components/myBytton/myButton";
import { FC } from "react";
import "./Form.scss";
interface FormProps {}

const Form: FC<FormProps> = () => {
  return (
    <form className="form">
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
};

export default Form;
