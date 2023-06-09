import { Container, Box, Grid } from "@mui/material";
import React from "react";
import feature from "../feature/Feature.module.css";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const Feature = () => {
  return (
    <div>
      <Container maxWidth={"xl"}>
        <div className={feature.title}>Features</div>
        <p className={feature.p}>
          We are constantly working to bring new updates and features to Steam,
          such as:
        </p>
        <Box className={feature["box-parent"]}>
          <Box className={feature.box}>
            <Grid className={feature["box-icon"]}>
              <GroupsRoundedIcon
                sx={{
                  fontSize: "50px",
                }}
              ></GroupsRoundedIcon>
            </Grid>
            <Grid
              fontSize={"24px"}
              fontFamily={"var(--font-title)"}
              fontWeight="700"
            >
              Game Hubs
            </Grid>
            <Grid>
              Everything about your game, all in one place. Join discussions,
              upload content, and be the first to know about new updates.
            </Grid>
            <Grid className={feature["btn-more"]}>
              <p>Learn more</p>
              <EastRoundedIcon className={feature.arrow}></EastRoundedIcon>
            </Grid>
          </Box>
          <Box className={feature.box}>
            <Grid className={feature["box-icon"]}>
              <AccessTimeRoundedIcon
                sx={{
                  fontSize: "50px",
                }}
              ></AccessTimeRoundedIcon>
            </Grid>
            <Grid
              fontSize={"24px"}
              fontFamily={"var(--font-title)"}
              fontWeight="700"
            >
              Early Access
            </Grid>
            <Grid>
              {
                "Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process."
              }
            </Grid>
            <Grid className={feature["btn-more"]}>
              <p>Learn more</p>
              <EastRoundedIcon className={feature.arrow}></EastRoundedIcon>
            </Grid>
          </Box>
          <Box className={feature.box}>
            <Grid className={feature["box-icon"]}>
              <CreditCardRoundedIcon
                sx={{
                  fontSize: "50px",
                }}
              ></CreditCardRoundedIcon>
            </Grid>
            <Grid
              fontSize={"24px"}
              fontFamily={"var(--font-title)"}
              fontWeight="700"
            >
              Purchases Made Easy
            </Grid>
            <Grid>
              Our storefront supports 100+ payment methods across over 35
              currencies, giving you the flexibility to pay how you want.
            </Grid>
            <Grid className={feature["btn-more"]}>
              <p>Learn more</p>
              <EastRoundedIcon className={feature.arrow}></EastRoundedIcon>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Feature;
