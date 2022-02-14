import React from "react";
import { Header } from "../../common/Header/Header";
import { Main } from "../../common/Sections/Main/Main";
import { Choose } from "../../common/Sections/Choose/Choose";
import { Create } from "../../common/Sections/Create/Create";
import { History } from "../../common/Sections/History/History";
import { Travel } from "../../common/Sections/Travel/Travel";
import { Reviews } from "../../common/Sections/Reviews/Reviews";
import { Photos } from "../../common/Sections/Photos/Photos";
import { Footer } from "../../common/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <Choose />
      <Create />
      <Reviews />
      <Photos />
      <History />
      <Travel />
      <Footer />
    </>
  );
};
