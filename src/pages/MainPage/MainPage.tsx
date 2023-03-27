import { FC } from "react";

import { Catalogue, LoverFlower, Order, Popular } from "./modules";

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  return (
    <>
      <LoverFlower />
      <Catalogue />
      <Popular />
      <Order />
    </>
  );
};
