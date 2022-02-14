import React from "react";
import PropTypes from "prop-types";
import s from "./Select.module.scss";

export const Select = ({ id, options }) => {
  const mapOptions = options.map((opt) => (
    <option key={opt} value={opt} className={s.option}>
      Пункт {opt}
    </option>
  ));

  return (
    <select id={id} defaultValue="" className={s.select} required>
      <option value="" disabled hidden className={s.option}>
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
