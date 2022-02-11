import React from "react";
import { Form } from "../../Form/Form";
import { H2, H5 } from "../../Headlines/Headlines";
import classes from "./Create.module.css";

export const Create = () => {
  return (
    <section id="create-tour" className={classes.collect}>
      <div className="container">
        <H2 className={classes.collectTitle}>Собери свой тур</H2>
        <H5 className={classes.collectSubtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</H5>

        <Form />
      </div>
    </section>
  );
};
