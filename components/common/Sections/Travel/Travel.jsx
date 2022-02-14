import React from "react";
import s from "./Travel.module.scss";

import footer from "../../../../public/footer.jpg";
import { Headline } from "../../Headlines/Headlines";

export const Travel = () => {
  return (
    <section className={s.travel}>
      <div className={s.travelBlock}>
        <img src={footer.src} alt="" className={s.travelImage} />
        <div className={s.travelInfo}>
          <Headline size="h3" className={s.travelTitle}>
            Пора в путешествие вместе с нами!
          </Headline>
          <Headline size="h5" className={s.travelSubtitle}>
            Напиши на почту и узнай подробности на <a href="mailto:yourtour@gmail.com">yourtour@gmail.com</a>
          </Headline>
        </div>
      </div>
    </section>
  );
};
