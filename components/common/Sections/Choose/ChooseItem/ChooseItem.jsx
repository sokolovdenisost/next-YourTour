import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./ChooseItem.module.scss";

export const ChooseItem = ({ children, id, active, onClick }) => {
  const clickHandler = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <button id={id} onClick={clickHandler} className={classNames(s.chooseItem, { [s.active]: active })}>
      {children}
    </button>
  );
};

ChooseItem.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
