import React from "react";
import classes from "./Select.module.css";

export const Select = ({ id, options }) => {
  return (
    <select id={id} defaultValue="0" className={classes.select} required>
      <option value="0" disabled hidden>
        Куда хотите ехать
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          Пункт {opt}
        </option>
      ))}
    </select>
  );
};
