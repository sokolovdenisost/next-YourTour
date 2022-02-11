import React from "react";
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
