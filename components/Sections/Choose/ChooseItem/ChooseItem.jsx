import React from "react";
import classes from "./ChooseItem.module.css";

export const ChooseItem = ({ children, id, checked, onChange }) => {
  const changeHandler = (e) => {
    if (onChange) onChange(e);
  };

  return (
    <li className={classes.chooseItem}>
      <input onChange={changeHandler} name="tab-btn" checked={checked} id={id} type="radio" />
      <label htmlFor={id}>{children}</label>
    </li>
  );
};
