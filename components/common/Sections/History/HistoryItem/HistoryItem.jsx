import React from "react";
import PropTypes from "prop-types";
import s from "./HistoryItem.module.scss";

import arrow from "../../../../../public/arrow.png";
import { Headline } from "../../../Headlines/Headlines";

export const HistoryItem = ({ children, title, img, list, links }) => {
  const mapList = list.map((l, idx) => (
    <li key={idx} className={s.historyItemLi}>
      <Headline size="h5">{l}</Headline>
    </li>
  ));

  const mapLinks = links.map((link, idx) => (
    <div key={idx} className={s.historySocial}>
      <Headline size="h5">{link}</Headline>
      <div className={s.historySocialLine}></div>
    </div>
  ));

  return (
    <div className={s.historyItem}>
      <img src={img.src} className={s.historyImage} alt="history" />
      <div className={s.historyItemInfo}>
        <Headline size="h3" className={s.historyItemTitle}>
          {title}
        </Headline>
        <Headline size="h5" className={s.historyItemSubtitle}>
          {children}
        </Headline>
        {list.length ? <ul className={s.historyItemList}>{mapList}</ul> : null}
        <div className={s.historyBottom}>
          <button className={s.historyMore}>
            <Headline size="h4">Подробнее</Headline> <img src={arrow.src} alt="" className={s.historyArrow} />
          </button>
          <div className={s.historySocials}>{mapLinks}</div>
        </div>
      </div>
    </div>
  );
};

HistoryItem.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.shape({
    blurDataURL: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }),
  list: PropTypes.array,
  links: PropTypes.array,
};
