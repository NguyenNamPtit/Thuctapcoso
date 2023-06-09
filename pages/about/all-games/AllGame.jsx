import { Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

const AllGame = () => {
  return (
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
        src="/img/bg-full-games.png"
        alt="all-games"
        style={{
          maxWidth: "100%",
          verticalAlign: "middle",
          filter: "brightness(30%)",
        }}
      />
      <Box
        gap={{ xs: "16px", sm: "20px", md: "30px" }}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          fontFamily: "var(--font-default)",
          position: "absolute",
          padding: "20px",
        }}
      >
        <Grid
          fontFamily={"var(--font-title)"}
          fontWeight="700"
          fontSize={{
            xs: "20px",
            sm: "40px",
            md: "60px",
          }}
        >
          Access Games Instantly
        </Grid>
        <Grid
          maxWidth={"600px"}
          fontSize={{
            sm: "20px",
            xs: "14px",
          }}
        >
          With nearly 30,000 games from AAA to indie and everything in-between.
          Enjoy exclusive deals, automatic game updates, and other great perks.
        </Grid>
        <Grid>
          <Link href={"/games/Games"}><button className="btn">Browse to Store </button></Link>
        </Grid>
      </Box>
    </Box>
  );
};

export default AllGame;
