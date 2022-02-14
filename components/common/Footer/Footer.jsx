import React from "react";
import { Headline } from "../Headlines/Headlines";
import s from "./Footer.module.scss";

import inst from "../../../public/inst.png";
import fb from "../../../public/fb.svg";
import vk from "../../../public/vk.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerBlock}>
          <Headline size="h5" className={s.footerTitle}>
            Наши социальные сети
          </Headline>
          <div className={s.footerSocials}>
            <a href="#" className={s.footerSocial}>
              <img src={inst.src} alt="inst" />
              <Headline size="h5" className={s.footerSocialTitle}>
                instagram
              </Headline>
            </a>
            <a href="#" className={s.footerSocial}>
              <img src={fb.src} alt="fb" />
              <Headline size="h5" className={s.footerSocialTitle}>
                facebook
              </Headline>
            </a>
            <a href="#" className={s.footerSocial}>
              <img src={vk.src} alt="vk" />
              <Headline size="h5" className={s.footerSocialTitle}>
                vkontakte
              </Headline>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
