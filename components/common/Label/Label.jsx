import React from "react";
import PropTypes from "prop-types";
import s from "./Label.module.scss";

export const Label = ({ id, children }) => {
  return (
    <label htmlFor={id} className={s.label}>
      {children}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
