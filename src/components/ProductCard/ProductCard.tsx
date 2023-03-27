import MyButton from "components/myBytton/myButton";
import { FC } from "react";
import s from "./ProductCard.module.scss";
interface ProductCardProps {
  name: string;
  price: number;
  img: string;
}

const ProductCard: FC<ProductCardProps> = ({ name, price, img }) => {
  return (
    <div className={s.productCard}>
      <img src={img} alt={name} />
      <p className={s.name}>{name}</p>
      <p className={s.price}>{price}Грн</p>
      <div className={s.button__wrapper}>
        <MyButton secondary={true} as="button">
          В корзину
        </MyButton>
      </div>
    </div>
  );
};

export default ProductCard;
