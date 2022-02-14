import React from "react";
import PropTypes from "prop-types";
import s from "./ReviewsItem.module.scss";

import { Headline } from "../../../Headlines/Headlines";

export const ReviewsItem = ({ children, name, tour, img }) => {
  return (
    <div className={s.reviewsItem}>
      <Headline size="h4" className={s.reviewsText}>
        {children}
      </Headline>
      <div className={s.reviewsInfo}>
        <div className={s.reviewsLeft}>
          <Headline size="h3" className={s.infoName}>
            {name}
          </Headline>
          <Headline size="h6" className={s.infoTour}>
            {tour}
          </Headline>
        </div>
        <div className={s.reviewsRight}>
          <img src={img.src} className={s.infoImg} alt="" />
        </div>
      </div>
    </div>
  );
};

ReviewsItem.propTypes = {
  img: PropTypes.shape({
    blurDataURL: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }),
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tour: PropTypes.string.isRequired,
};
