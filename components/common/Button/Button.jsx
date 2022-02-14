import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./Button.module.scss";

export const Button = ({ className, children, color }) => {
  return <button className={classNames(s.button, s[color], className)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
