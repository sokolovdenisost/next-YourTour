import React from "react";
import { H3, H4, H6 } from "../Headlines/Headlines";
import classes from "./TourCard.module.css";

import arrow from "../../public/arrow.png";

export const TourCard = ({ img, title, price }) => {
  return (
    <div className={classes.tourCard}>
      <img src={img.src} className={classes.tourImage} />
      <div className={classes.tourInfo}>
        <div className={classes.tourTitle}>
          <H3>{title}</H3>
        </div>
        <div className={classes.tourSubtitle}>
          <H6>{price}</H6>
        </div>
        <button className={classes.tourMore}>
          <H4>Подробнее</H4>
          <img alt="arrow" src={arrow.src} className={classes.tourArrow} />
        </button>
      </div>
    </div>
  );
};
