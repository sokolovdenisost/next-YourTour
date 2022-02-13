import React from "react";
import PropTypes from "prop-types";
import classes from "./Textarea.module.css";

export const Textarea = ({ id, placeholder, value, onChange }) => {
  const changeHandler = (e) => {
    if (onChange) onChange(e);
  };
  return (
    <textarea id={id} className={classes.textarea} value={value} onChange={changeHandler} placeholder={placeholder} required></textarea>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
