import React from "react";
import PropTypes from "prop-types";
import classes from "./Select.module.css";

export const Select = ({ id, options }) => {
  const mapOptions = options.map((opt) => (
    <option key={opt} value={opt} className={classes.option}>
      Пункт {opt}
    </option>
  ));

  return (
    <select id={id} defaultValue="" className={classes.select} required>
      <option value="" disabled hidden className={classes.option}>
        Куда хотите ехать
      </option>
      {mapOptions}
    </select>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
