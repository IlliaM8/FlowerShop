import { Footer } from "modules/Footer";
import { Header } from "modules/Header";
import { FC } from "react";
import { Outlet } from "react-router";
const Layout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
