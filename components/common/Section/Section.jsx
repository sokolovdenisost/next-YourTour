import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.scss";

import { Headline } from "../Headlines/Headlines";

export const Section = ({ id, title, subtitle, container = true, children }) => {
  return (
    <section id={id} className={s.section}>
      {container ? (
        <div className="container">
          <Headline size="h2" className={s.sectionTitle}>
            {title}
          </Headline>
          {subtitle && (
            <Headline size="h5" className={s.sectionSubtitle}>
              {subtitle}
            </Headline>
          )}
          {children}
        </div>
      ) : (
        <>
          <Headline size="h2" className={s.sectionTitle}>
            {title}
          </Headline>
          {subtitle && (
            <Headline size="h5" className={s.sectionSubtitle}>
              {subtitle}
            </Headline>
          )}
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
