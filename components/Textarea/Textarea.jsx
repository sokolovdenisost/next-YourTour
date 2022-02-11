import React from "react";
import classes from "./Textarea.module.css";

export const Textarea = ({ id, placeholder }) => {
  return <textarea id={id} className={classes.textarea} placeholder={placeholder} required></textarea>;
};
