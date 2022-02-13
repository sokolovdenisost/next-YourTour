import React from "react";
import PropTypes from "prop-types";
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

ChooseItem.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
