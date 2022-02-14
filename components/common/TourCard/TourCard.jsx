import React from "react";
import PropTypes from "prop-types";
import { Headline } from "../Headlines/Headlines";
import s from "./TourCard.module.scss";

import arrow from "../../../public/arrow.png";

export const TourCard = ({ img, title, price }) => {
  return (
    <div className={s.tourCard}>
      <img src={img.src} className={s.tourImage} />
      <div className={s.tourInfo}>
        <div className={s.tourTitle}>
          <Headline size="h3">{title}</Headline>
        </div>
        <div className={s.tourSubtitle}>
          <Headline size="h6">{price}</Headline>
        </div>
        <button className={s.tourMore}>
          <Headline size="h4">Подробнее</Headline>
          <img alt="arrow" src={arrow.src} className={s.tourArrow} />
        </button>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  img: PropTypes.shape({
    blurDataURL: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }),
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
