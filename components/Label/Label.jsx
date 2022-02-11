import React from "react";
import classes from "./Label.module.css";

export const Label = ({ id, children }) => {
  return (
    <label htmlFor={id} className={classes.label}>
      {children}
    </label>
  );
};
