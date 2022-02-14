import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./Headlines.module.scss";

export const Headline = ({ children, className, size }) => {
  switch (size) {
    case "h1":
      return <h1 className={classNames(s.h1, className)}>{children}</h1>;

    case "h2":
      return <h2 className={classNames(s.h2, className)}>{children}</h2>;

    case "h3":
      return <h3 className={classNames(s.h3, className)}>{children}</h3>;

    case "h4":
      return <h4 className={classNames(s.h4, className)}>{children}</h4>;

    case "h5":
      return <h5 className={classNames(s.h5, className)}>{children}</h5>;

    case "h6":
      return <h6 className={classNames(s.h6, className)}>{children}</h6>;

    default:
      return;
  }
};

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string.isRequired,
};
