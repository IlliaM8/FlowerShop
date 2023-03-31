import { BlockWrapper } from "components/BlockWrapper";
import { SocialMediaLinks } from "components/SocialMediaLinks";

import { FC } from "react";
import "./loverFlower.scss";
import phone from "assets/phone.svg";
import MyButton from "components/myBytton/myButton";
import { useAppSelector } from "store/hooks";

export const LoverFlower: FC = () => {
  const ref = useAppSelector((state) => state.mainPage.ref);
  const scrol = () => ref.scrollIntoView();

  return (
    <div className="loverFlover">
      <div className="loverFlower__container">
        <h1 className="loverFlower__title">
          lover <span>flower</span>
        </h1>
        <p className="loverFlower__subtitle">
          Создаём для тех, кто ценит свежесть и изящество цветка
        </p>
        <div className="loverFlower__button">
          <MyButton onClick={scrol} primary as="button">
            смотреть каталог
          </MyButton>
        </div>
        <ul className="loverFlower__col ">
          <li>
            <h5 className="loverFlower__contacts-title ">
              zakaz@loverflower.by
            </h5>
            <p className="loverFlower__contacts-text">
              Доставка 24/7 по договоренности с оператором
            </p>
          </li>
          <li>
            <h5 className="loverFlower__contacts-title ">ул. Тимирязева 67</h5>
            <p className="loverFlower__contacts-text">10:00 до 21:00 </p>
            <p className="loverFlower__contacts-text">без выходных </p>
          </li>
          <li className="loverFlower__social">
            <BlockWrapper>
              <div className="loverFlower__social-links">
                <SocialMediaLinks gap={20} vertical={true} />
              </div>
            </BlockWrapper>
          </li>
          <li className="loverFlower__phone">
            <p className="loverFlower__contacts-title">+375 (29) 113-69-69</p>
            <BlockWrapper>
              <div className="loverFlower__phone-box">
                <img src={phone} alt="phone" />
                <p className="loverFlower__contacts-title">заказать звонок</p>
              </div>
            </BlockWrapper>
          </li>
        </ul>
      </div>
    </div>
  );
};
