import React from "react";
import PropTypes from "prop-types";
import classes from "./Headlines.module.css";

export const H1 = ({ children, className }) => {
  return <h1 className={[classes.h1, className].join(" ")}>{children}</h1>;
};

export const H2 = ({ children, className }) => {
  return <h2 className={[classes.h2, className].join(" ")}>{children}</h2>;
};

export const H3 = ({ children, className }) => {
  return <h3 className={[classes.h3, className].join(" ")}>{children}</h3>;
};

export const H4 = ({ children, className }) => {
  return <h4 className={[classes.h4, className].join(" ")}>{children}</h4>;
};

export const H5 = ({ children, className }) => {
  return <h5 className={[classes.h5, className].join(" ")}>{children}</h5>;
};

export const H6 = ({ children, className }) => {
  return <h6 className={[classes.h6, className].join(" ")}>{children}</h6>;
};

H1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
};

H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
};

H3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
};

H4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
};

H5.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
};

H6.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
};
