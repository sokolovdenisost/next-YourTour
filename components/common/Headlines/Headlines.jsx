import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./Headlines.module.scss";

export const Headline = ({ children, className, size: Tag }) => {
  return <Tag className={classNames(s[Tag], className)}>{children}</Tag>;
};

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string.isRequired,
};
