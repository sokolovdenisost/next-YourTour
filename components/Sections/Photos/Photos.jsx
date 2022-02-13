import React from "react";
import classes from "./Photos.module.css";

import img1 from "../../../public/1.jpg";
import img2 from "../../../public/2.jpg";
import img3 from "../../../public/3.jpg";
import img4 from "../../../public/4.jpg";
import img5 from "../../../public/5.jpg";
import img6 from "../../../public/6.jpg";
import img7 from "../../../public/7.jpg";
import img8 from "../../../public/8.jpg";
import img13 from "../../../public/13.jpg";
import img9 from "../../../public/9.jpg";
import img10 from "../../../public/10.jpg";
import img11 from "../../../public/11.jpg";
import img12 from "../../../public/12.jpg";

import { H2, H5 } from "../../Headlines/Headlines";
import { Section } from "../../Section/Section";

export const Photos = () => {
  return (
    <Section
      id="photos"
      title="Фотографии путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
      container={false}
    >
      <div className={classes.photosItems}>
        <div className={classes.photosBig}>
          <img src={img1.src} className={classes.photoItemBig} alt="bigPhoto" />
          <img src={img2.src} className={classes.photoItemBig} alt="bigPhoto" />
          <img src={img3.src} className={[classes.photoItemBig, classes.mobile].join(" ")} alt="bigPhoto" />
          <img src={img4.src} className={[classes.photoItemBig, classes.desktop].join(" ")} alt="bigPhoto" />
        </div>
        <div className={classes.photosSmall}>
          <img src={img5.src} className={classes.photoItemSmall} alt="smallPhoto" />
          <img src={img6.src} className={classes.photoItemSmall} alt="smallPhoto" />
          <img src={img7.src} className={classes.photoItemSmall} alt="smallPhoto" />
          <img src={img8.src} className={[classes.photoItemSmall, classes.mobile].join(" ")} alt="smallPhoto" />
          <img src={img13.src} className={[classes.photoItemSmall, classes.desktop].join(" ")} alt="smallPhoto" />
        </div>
        <div className={classes.photosBig}>
          <img src={img9.src} className={classes.photoItemBig} alt="bigPhoto" />
          <img src={img10.src} className={classes.photoItemBig} alt="bigPhoto" />
          <img src={img11.src} className={[classes.photoItemBig, classes.mobile].join(" ")} alt="bigPhoto" />
          <img src={img12.src} className={[classes.photoItemBig, classes.desktop].join(" ")} alt="bigPhoto" />
        </div>
      </div>
    </Section>
  );
};
