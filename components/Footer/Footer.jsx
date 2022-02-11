import React from "react";
import { H5 } from "../Headlines/Headlines";
import classes from "./Footer.module.css";

import inst from "../../public/inst.png";
import fb from "../../public/fb.svg";
import vk from "../../public/vk.svg";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerBlock}>
          <H5 className={classes.footerTitle}>Наши социальные сети</H5>
          <div className={classes.footerSocials}>
            <a href="#" className={classes.footerSocial}>
              <img src={inst.src} alt="inst" />
              <H5 className={classes.footerSocialTitle}>instagram</H5>
            </a>
            <a href="#" className={classes.footerSocial}>
              <img src={fb.src} alt="fb" />
              <H5 className={classes.footerSocialTitle}>facebook</H5>
            </a>
            <a href="#" className={classes.footerSocial}>
              <img src={vk.src} alt="vk" />
              <H5 className={classes.footerSocialTitle}>vkontakte</H5>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
