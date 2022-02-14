import React from "react";
import PropTypes from "prop-types";
import s from "./Input.module.scss";

export const Input = ({ placeholder, id, type = "text", onChange, value }) => {
  const changeHandler = (e) => {
    if (onChange) onChange(e);
  };

  return <input id={id} type={type} className={s.input} value={value} placeholder={placeholder} onChange={changeHandler} required />;
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
};
