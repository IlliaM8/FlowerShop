import ProductCard from "components/ProductCard/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IProduct } from "Types/Index";
import { FC } from "react";
import { RightArrow } from "./RightArrow";
import { LeftArrow } from "./LeftArrow";
interface SliderProps {
  products: IProduct[];
}

const Slider: FC<SliderProps> = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel renderArrowsWhenDisabled={true} responsive={responsive}>
      {products.map((pr) => (
        <div
          style={{
            width: 350,
            height: 600,
          }}
          key={Date.now()}
          className="popular__product-box"
        >
          <ProductCard img={pr.img} name={pr.name} price={pr.price} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
