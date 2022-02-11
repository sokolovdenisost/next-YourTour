import React, { useState } from "react";
import { TourCard } from "../../TourCard/TourCard";
import classes from "./Choose.module.css";
import { ChooseItem } from "./ChooseItem";

import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import img5 from "../../../public/img5.jpg";
import img6 from "../../../public/img6.jpg";
import { H2 } from "../../Headlines/Headlines";

const tours = [
  { id: 1, title: "Путешествие в горы", price: "от 80 000 руб", img: img1 },
  { id: 2, title: "Путешествие в горы", price: "от 80 000 руб", img: img2 },
  { id: 3, title: "Путешествие в горы", price: "от 80 000 руб", img: img3 },
  { id: 4, title: "Путешествие в горы", price: "от 80 000 руб", img: img4 },
  { id: 5, title: "Путешествие в горы", price: "от 80 000 руб", img: img5 },
  { id: 6, title: "Путешествие в горы", price: "от 80 000 руб", img: img6 },
];

export const Choose = () => {
  const [sections, setSections] = useState({
    popular: true,
    copyright: false,
    hiking: false,
    alloys: false,
    biking: false,
  });

  const changeSection = (e) => {
    const { id } = e.target;
    Object.keys(sections).forEach((section) => (sections[section] = false));
    setSections({ ...sections, [id]: !sections[id] });
  };

  const mapTours = tours.map((tour) => <TourCard img={tour.img} title={tour.title} price={tour.price} key={tour.id} />);

  return (
    <section id="tours" className={classes.choose}>
      <div className="container">
        <H2 className={classes.chooseTitle}>Выбери свой тур</H2>
        <ul className={classes.chooseItems}>
          <ChooseItem onChange={changeSection} checked={sections.popular} id="popular">
            Популярные
          </ChooseItem>
          <ChooseItem onChange={changeSection} checked={sections.copyright} id="copyright">
            Авторские
          </ChooseItem>
          <ChooseItem onChange={changeSection} checked={sections.hiking} id="hiking">
            Походы
          </ChooseItem>
          <ChooseItem onChange={changeSection} checked={sections.alloys} id="alloys">
            Сплавы
          </ChooseItem>
          <ChooseItem onChange={changeSection} checked={sections.biking} id="biking">
            Велопрогулки
          </ChooseItem>
        </ul>
        <div className={classes.chooseTours}>{mapTours}</div>
      </div>
    </section>
  );
};
