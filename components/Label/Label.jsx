import React from "react";
import PropTypes from "prop-types";
import classes from "./Label.module.css";

export const Label = ({ id, children }) => {
  return (
    <label htmlFor={id} className={classes.label}>
      {children}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
