import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/feature/games/games.slice";
import home from "../home/HomePage.module.css";
import Categories from "./categories/Categories";
import Comments from "./comments/Comments";
import HomeSlider from "./home-slider/HomeSlider";
import Live from "./live/Live";
import News from "./news/News";
import Offer from "./offer/Offer";
import Partner from "./partner/Partner";
import Sales from "./sales/Sales";
import Service from "./service/Service";

const HomePage = () => {
  const games = useSelector(selectAllProducts);
  return (
    <div>
      <section className={home["section-sldier"]}>
        <img
          className={home["bg-slider"]}
          src="/img/bg-slider.jpg"
          alt="bg-footer"
        />
        <div className={home["Container-slider"]}>
          <Container>
            <HomeSlider></HomeSlider>
          </Container>
        </div>
      </section>

      <section className={home["section-service"]}>
        <Service></Service>
      </section>

      <section className={home["section-offer"]}>
        <Offer games={games}></Offer>
      </section>

      <section className={home["section-categories"]}>
        <Categories></Categories>
      </section>

      <section className={home["section-sale"]}>
        <Sales></Sales>
      </section>

      <section className={home["section-news"]}>
        <News games={games}></News>
      </section>

      <section className={home["section-live"]}>
        <Live></Live>
      </section>

      <section className={home["section-comments"]}>
        <Comments></Comments>
      </section>

      <section className={home["section-dev"]}>
        <Partner></Partner>
      </section>
    </div>
  );
};

export default HomePage;
