import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import count from "../Count/Count.module.css";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Count = () => {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "white",
        }}
      >
        <img
          src="/img/bg-count.png"
          alt="all-games"
          style={{
            maxWidth: "100%",
            verticalAlign: "middle",
            filter: "brightness(65%)",
          }}
        />
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            textAlign: "center",
            fontFamily: "var(--font-default)",
            position: "absolute",
          }}
        >
          <Grid xs={4} item={true} className={count.box}>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-default)",
                fontWeight: "500",
                gap: "20px",
                fontSize: {
                  xs: "36px",
                  sm: "48px",
                  md: "72px",
                },
              }}
            >
              <Grid>
                {" "}
                {CounterOn && (
                  <CountUp
                    start={0}
                    end={2023}
                    duration={3}
                    delay={0}
                  ></CountUp>
                )}
              </Grid>
              <SportsEsportsRoundedIcon
                sx={{
                  color: "orange",
                  fontSize: {
                    xs: "50px",
                    sm: "100px",
                    md: "150px",
                  },
                }}
              ></SportsEsportsRoundedIcon>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-title)",
                fontWeight: "400",
                gap: "15px",
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                  md: "36px",
                },
              }}
            >
              <Grid>Games</Grid>
            </Grid>
          </Grid>
          <Grid xs={4} item={true} className={count.box}>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-default)",
                fontWeight: "500",
                gap: "20px",
                fontSize: {
                  xs: "36px",
                  sm: "48px",
                  md: "72px",
                },
              }}
            >
              <Grid>
                {" "}
                {CounterOn && (
                  <CountUp
                    start={0}
                    end={1107}
                    duration={3}
                    delay={0}
                  ></CountUp>
                )}
              </Grid>
              <Groups2RoundedIcon
                sx={{
                  color: "orange",
                  fontSize: {
                    xs: "50px",
                    sm: "100px",
                    md: "150px",
                  },
                }}
              ></Groups2RoundedIcon>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-title)",
                fontWeight: "400",
                gap: "15px",
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                  md: "36px",
                },
              }}
            >
              <Grid>Customer</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ScrollTrigger>
  );
};

export default Count;
