import React from "react";
import s from "./Main.module.scss";

import { Button } from "../../Button/Button";
import { Headline } from "../../Headlines/Headlines";

export const Main = () => {
  return (
    <section id="main" className={s.main}>
      <div className={s.mainBody}>
        <div className={s.mainTitle}>
          <Headline size="h1">Идеальные путешествия существуют</Headline>
        </div>
        <div className={s.mainSubtitle}>
          <Headline size="h5">Идейные соображения высшего порядка, а также рамки и место обучения кадров</Headline>
        </div>
        <Button color="main" className={s.mainButton}>
          Найти тур
        </Button>
      </div>
    </section>
  );
};
