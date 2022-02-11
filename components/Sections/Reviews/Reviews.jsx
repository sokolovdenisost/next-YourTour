import React from "react";
import classes from "./Reviews.module.css";

import { H2, H5 } from "../../Headlines/Headlines";
import { ReviewsItem } from "./ReviewsItem";

import com from "../../../public/com.png";
import comment from "../../../public/comment.png";

export const Reviews = () => {
  return (
    <section id="comments" className={classes.reviews}>
      <div className="container">
        <H2 className={classes.reviewsTitle}>Отзывы наших путешественников</H2>
        <H5 className={classes.reviewsSubtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</H5>
        <div className={classes.reviewsItems}>
          <ReviewsItem name="Мария" tour="Тур: Вдали от дома" img={com}>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции
            позволяет оценить значение модели развития.
          </ReviewsItem>
          <ReviewsItem name="Павел" tour="Тур: Путешествие в горы" img={comment}>
            Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения
            кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм
            деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика
            показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.
          </ReviewsItem>
        </div>
      </div>
    </section>
  );
};
