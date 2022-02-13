import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

export const Button = ({ className, children, color }) => {
  return <button className={[classes.button, classes[color], className].join(" ")}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
