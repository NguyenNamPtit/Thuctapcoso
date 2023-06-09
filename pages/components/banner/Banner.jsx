import React from "react";
import { Box, Container, Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import banner from "../banner/Banner.module.css";

const Banner = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        padding: " 70px 0",
        backgroundColor: "var(--dark)",
        color: "white",
      }}
    >
      <Grid
        fontFamily={"var(--font-title)"}
        fontSize={{
          xs: "24px",
          sm: "40px",
        }}
        fontWeight="bold"
        color={"white"}
      >
        <Box
          maxWidth={{
            xs: "240px",
            sm: "400px",
            md: "600px",
          }}
          margin="0 auto"
          className={banner.text}
        >
          {props.linkChildren}
        </Box>
      </Grid>
      <Grid
        sx={{
          fontFamily: "var(--font-default)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "500",
          gap: "16px",
        }}
      >
        <Grid color={"var(--gray)"}>{props.parent}</Grid>

        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

        <Grid
          color={"var(--blue)"}
          maxWidth={{
            xs: "240px",
            sm: "400px",
            md: "600px",
          }}
          className={banner.text}
        >
          {props.linkChildren}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
