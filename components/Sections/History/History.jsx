import React from "react";
import classes from "./History.module.css";
import { HistoryItem } from "./HistoryItem/HistoryItem";

import img1 from "../../../public/history-img1.jpg";
import img2 from "../../../public/history-img2.jpg";
import img3 from "../../../public/history-img3.jpg";
import { Section } from "../../Section/Section";

const histories = [
  {
    title: "Автостопом в Стамбул",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    img: img1,
    links: ["instagram", "facebook", "YouTube"],
    list: ["вкусная еда", "дешевый транспорт", "красивый город"],
  },
  {
    title: "Автостопом в Стамбул",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    img: img2,
    links: ["instagram", "ВКонтакте"],
    list: [],
  },
  {
    title: "Автостопом в Стамбул",
    subtitle:
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
    img: img3,
    links: ["instagram", "facebook", "ВКонтакте"],
    list: [],
  },
];

export const History = () => {
  const mapHistories = histories.map((history, idx) => (
    <HistoryItem key={idx} title={history.title} img={history.img} links={history.links} list={history.list}>
      {history.subtitle}
    </HistoryItem>
  ));

  return (
    <Section id="history" title="Истории путешествий" subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
      <div className={classes.historyItems}>{mapHistories}</div>
    </Section>
  );
};
