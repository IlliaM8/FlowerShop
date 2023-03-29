import { FC } from "react";

import { Catalogue, LoverFlower, Order, Popular, Question } from "./modules";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
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
