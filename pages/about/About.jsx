import React from "react";
import { Container, Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import about from "../about/About.module.css";
import AllGame from "./all-games/AllGame";
import People from "./people/People";
import Feature from "./feature/Feature";
import Count from "./Count/Count";
import Banner from "../components/banner/Banner";

const About = () => {
  return (
    <div>
      <Banner parent="Home" linkChildren="About" />

      <section className={about["seciton-all-games"]}>
        <AllGame></AllGame>
      </section>

      <section className={about["section-feature"]}>
        <Feature></Feature>
      </section>

      <section className={about["section-count"]}>
        <Count></Count>
      </section>

      <section className={about["section-people"]}>
        <People></People>
      </section>
    </div>
  );
};

export default About;
