import Layout from "pages/Layout";
import { MainPage } from "pages/MainPage";
import { FC } from "react";
import { Route, Routes } from "react-router";
const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" />
        <Route path="delivery" />
        <Route path="about-us" />
        <Route path="contacts" />
        <Route path="FAQ" />
      </Route>
    </Routes>
  );
};

export default App;
