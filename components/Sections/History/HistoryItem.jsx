import React from "react";
import classes from "./History.module.css";

import arrow from "../../../public/arrow.png";
import { H3, H4, H5 } from "../../Headlines/Headlines";

export const HistoryItem = ({ children, title, img, list, links }) => {
  const mapList = list.map((l, idx) => (
    <li key={idx} className={classes.historyItemLi}>
      <H5>{l}</H5>
    </li>
  ));

  const mapLinks = links.map((link, idx) => (
    <div key={idx} className={classes.historySocial}>
      <H5>{link}</H5>
      <div className={classes.historySocialLine}></div>
    </div>
  ));

  return (
    <div className={classes.historyItem}>
      <img src={img.src} className={classes.historyImage} alt="history" />
      <div className={classes.historyItemInfo}>
        <H3 className={classes.historyItemTitle}>{title}</H3>
        <H5 className={classes.historyItemSubtitle}>{children}</H5>
        {list.length ? <ul className={classes.historyItemList}>{mapList}</ul> : null}
        <div className={classes.historyBottom}>
          <button className={classes.historyMore}>
            <H4>Подробнее</H4> <img src={arrow.src} alt="" className={classes.historyArrow} />
          </button>
          <div className={classes.historySocials}>{mapLinks}</div>
        </div>
      </div>
    </div>
  );
};
