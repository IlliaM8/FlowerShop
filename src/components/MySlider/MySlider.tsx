// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./MySlider.scss";

import { Navigation } from "swiper";
import { IProduct } from "Types/Index";
import ProductCard from "components/ProductCard/ProductCard";
import Right from "./ArrowL.svg";
import Left from "./ArrowR.svg";
const products: IProduct[] = [
  {
    name: "лучший день",
    img: "https://picsum.photos/350/450",
    price: 150,
  },
  {
    name: "лучший день",
    img: "https://picsum.photos/350/450",
    price: 150,
  },
  {
    name: "лучший день",
    img: "https://picsum.photos/350/450",
    price: 150,
  },
  {
    name: "лучший день",
    img: "https://picsum.photos/350/450",
    price: 150,
  },
  {
    name: "лучший деawdнь",
    img: "https://pawdawdicsum.photos/350/450",
    price: 1500,
  },
];

export default function MySlider() {
  return (
    <div className="slider-cont">
      <Swiper
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="slider"
        spaceBetween={30}
      >
        {products.map((pr) => (
          <SwiperSlide key={Date.now() + Math.random()}>
            <div
              style={{
                width: 350,
                height: 600,
              }}
            >
              <ProductCard img={pr.img} name={pr.name} price={pr.price} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider__navigator">
        <img className="swiper-button-prev button" src={Left} alt="Left" />
        <img className="swiper-button-next button" src={Right} alt="Left" />
      </div>
    </div>
  );
}
