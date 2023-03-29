import { FC } from "react";

import { Catalogue, LoverFlower, Order, Popular, Question } from "./modules";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  document.title = "Головна";
  return (
    <>
      <LoverFlower />
      <Catalogue />
      <Popular />
      <Order />
      <Question />
    </>
  );
};
