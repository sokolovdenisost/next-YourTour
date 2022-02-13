import React from "react";
import PropTypes from "prop-types";
import classes from "./Section.module.css";

import { H2, H5 } from "../Headlines/Headlines";

export const Section = ({ id, title, subtitle, container = true, children }) => {
  return (
    <section id={id} className={classes.section}>
      {container ? (
        <div className="container">
          <H2 className={classes.sectionTitle}>{title}</H2>
          {subtitle && <H5 className={classes.sectionSubtitle}>{subtitle}</H5>}
          {children}
        </div>
      ) : (
        <>
          <H2 className={classes.sectionTitle}>{title}</H2>
          {subtitle && <H5 className={classes.sectionSubtitle}>{subtitle}</H5>}
          {children}
        </>
      )}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  container: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Section.defaultProps = {
  container: true,
};
