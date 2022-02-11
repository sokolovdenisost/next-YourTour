import React from "react";
import classes from "./Travel.module.css";

import footer from "../../../public/footer.jpg";
import { H3, H5 } from "../../Headlines/Headlines";

export const Travel = () => {
  return (
    <section className={classes.travel}>
      <div className={classes.travelBlock}>
        <img src={footer.src} alt="" className={classes.travelImage} />
        <div className={classes.travelInfo}>
          <H3 className={classes.travelTitle}>Пора в путешествие вместе с нами!</H3>
          <H5 className={classes.travelSubtitle}>
            Напиши на почту и узнай подробности на <a href="mailto:yourtour@gmail.com">yourtour@gmail.com</a>
          </H5>
        </div>
      </div>
    </section>
  );
};
