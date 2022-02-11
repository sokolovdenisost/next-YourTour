import React from "react";
import classes from "./Input.module.css";

export const Input = ({ placeholder, id, type = "text" }) => {
  return <input id={id} type={type} className={classes.input} placeholder={placeholder} required />;
};
