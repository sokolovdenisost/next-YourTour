import React from "react";
import PropTypes from "prop-types";
import classes from "./ReviewsItem.module.css";

import { H3, H4, H6 } from "../../../Headlines/Headlines";

export const ReviewsItem = ({ children, name, tour, img }) => {
  return (
    <div className={classes.reviewsItem}>
      <H4 className={classes.reviewsText}>{children}</H4>
      <div className={classes.reviewsInfo}>
        <div className={classes.reviewsLeft}>
          <H3 className={classes.infoName}>{name}</H3>
          <H6 className={classes.infoTour}>{tour}</H6>
        </div>
        <div className={classes.reviewsRight}>
          <img src={img.src} className={classes.infoImg} alt="" />
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
