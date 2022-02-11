import React from "react";
import classes from "./Main.module.css";

import { H1, H5 } from "../../Headlines/Headlines";

export const Main = () => {
  return (
    <section id="main" className={classes.main}>
      <div className={classes.mainBody}>
        <div className={classes.mainTitle}>
          <H1>Идеальные путешествия существуют</H1>
        </div>
        <div className={classes.mainSubtitle}>
          <H5>Идейные соображения высшего порядка, а также рамки и место обучения кадров</H5>
        </div>
        <button className={classes.mainButton}>Найти тур</button>
      </div>
    </section>
  );
};
