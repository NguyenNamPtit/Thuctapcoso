import React, { useEffect, useState } from "react";
import sales from "../sales/Sales.module.css";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { width } from "@mui/system";
import { Grid } from "@mui/material";
import Link from "next/link";

const Sales = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("09/09/2023").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <div className={sales["container-sale"]}>
      <img
        src="/img/bg-big-sale.jpg"
        alt="sale"
        style={{
          width: "100%",
          verticalAlign: "middle",
          objectFit: 'cover',
          minHeight: "400px",
          filter: "brightness(50%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          zIndex: "2",
        }}
      >
        <Grid textAlign={"center"}>
          <Grid>
            <Grid
              fontSize={{ xs: "24px", sm: "36px" }}
              marginBottom={{ xs: "15px", sm: "30px" }}
              style={{
                fontFamily: "var(--font-title)",
                fontWeight: "700",
              }}
            >
              Lunar New Year sales
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "16px", sm: "32px" },
            }}
          >
            <Grid
              sx={{
                padding: { xs: "7px", sm: "15px" },
                backgroundColor: "var(--gray)",
                borderRadius: "15px",
                width: { xs: "60px", sm: "90px" },
              }}
            >
              <Grid
                fontSize={{ xs: "30px", sm: "40px" }}
                style={{
                  fontFamily: "var(--font-title)",
                  fontWeight: "600",
                }}
              >
                {state.days || "0"}
              </Grid>

              <Grid
                fontSize={{ xs: "10px", sm: "16px" }}
                style={{
                  fontFamily: "var(--font-default)",
                }}
              >
                Days
              </Grid>
            </Grid>

            <Grid
              sx={{
                padding: { xs: "7px", sm: "15px" },
                backgroundColor: "var(--gray)",
                borderRadius: "15px",
                width: { xs: "60px", sm: "90px" },
              }}
            >
              <Grid
                fontSize={{ xs: "30px", sm: "40px" }}
                style={{
                  fontFamily: "var(--font-title)",
                  fontWeight: "600",
                }}
              >
                {state.hours || "00"}
              </Grid>

              <Grid
                fontSize={{ xs: "10px", sm: "16px" }}
                style={{
                  fontFamily: "var(--font-default)",
                }}
              >
                Hours
              </Grid>
            </Grid>

            <Grid
              sx={{
                padding: { xs: "7px", sm: "15px" },
                backgroundColor: "var(--gray)",
                borderRadius: "15px",
                width: { xs: "60px", sm: "90px" },
              }}
            >
              <Grid
                fontSize={{ xs: "30px", sm: "40px" }}
                style={{
                  fontFamily: "var(--font-title)",
                  fontWeight: "600",
                }}
              >
                {state.minutes || "00"}
              </Grid>

              <Grid
                fontSize={{ xs: "10px", sm: "16px" }}
                style={{
                  fontFamily: "var(--font-default)",
                }}
              >
                Minutes
              </Grid>
            </Grid>

            <Grid
              sx={{
                padding: { xs: "7px", sm: "15px" },
                backgroundColor: "var(--gray)",
                borderRadius: "15px",
                width: { xs: "60px", sm: "90px" },
              }}
            >
              <Grid
                fontSize={{ xs: "30px", sm: "40px" }}
                style={{
                  fontFamily: "var(--font-title)",
                  fontWeight: "600",
                }}
              >
                {state.seconds || "00"}
              </Grid>

              <Grid
                fontSize={{ xs: "10px", sm: "16px" }}
                style={{
                  fontFamily: "var(--font-default)",
                }}
              >
                Seconds
              </Grid>
            </Grid>
          </Grid>
          <Grid
            marginTop={{
              xs: "15px",
              sm: "30px",
            }}
          >
            <Link href={"/games/Games"}>
              <button className="btn">View Sales</button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Sales;
