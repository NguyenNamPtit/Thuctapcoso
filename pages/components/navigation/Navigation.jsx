import { Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import nav from "../navigation/Navigation.module.css";

const Navigation = () => {
  const router = useRouter();
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "var(--font-default)",
      }}
    >
      <Grid
        sx={{
          cursor: "pointer",
          height: { lg: "100%" },
          margin: { xs: "20px auto", lg: "0" },
          position: "relative",
          ":hover:after": {
            lg: {
              position: "absolute",
              left: 0,
              bottom: "-30px",
              borderBottom: "4px solid var(--blue)",
              borderRadius: "2px",
              width: "100%",
              content: '""',
            },
          },
          ":after": {
            position: "absolute",
            left: "-71px",
            bottom: "-22px",
            borderBottom: "1px solid var(--gray)",
            width: { xs: "248px", lg: 0 },
            content: '""',
          },
        }}
      >
        <Link
          className={router.pathname == "/" ? nav.active : nav.link}
          href={"/"}
        >
          Home
        </Link>
      </Grid>

      <Grid
        sx={{
          cursor: "pointer",
          height: { lg: "100%" },
          position: "relative",
          margin: { xs: "20px auto", lg: "0" },
          ":hover:after": {
            lg: {
              position: "absolute",
              left: 0,
              bottom: "-30px",
              borderBottom: "4px solid var(--blue)",
              borderRadius: "2px",
              width: "100%",
              content: '""',
            },
          },
          ":after": {
            position: "absolute",
            left: "-73px",
            bottom: "-22px",
            borderBottom: "1px solid var(--gray)",
            width: { xs: "248px", lg: 0 },
            content: '""',
          },
        }}
      >
        <Link
          className={router.pathname == "/games/Games" ? nav.active : nav.link}
          href={"/games/Games"}
        >
          Store
        </Link>
      </Grid>

      <Grid
        sx={{
          cursor: "pointer",
          height: { lg: "100%" },
          position: "relative",
          margin: { xs: "20px auto", lg: "0" },
          ":hover:after": {
            lg: {
              position: "absolute",
              left: 0,
              bottom: "-30px",
              borderBottom: "4px solid var(--blue)",
              borderRadius: "2px",
              width: "100%",
              content: '""',
            },
          },
          ":after": {
            position: "absolute",
            left: "-71px",
            bottom: "-22px",
            borderBottom: "1px solid var(--gray)",
            width: { xs: "248px", lg: 0 },
            content: '""',
          },
        }}
      >
        <Link
          className={router.pathname == "/about/About" ? nav.active : nav.link}
          href={"/about/About"}
        >
          About
        </Link>
      </Grid>

      <Grid
        sx={{
          cursor: "pointer",
          height: { lg: "100%" },
          position: "relative",
          margin: { xs: "20px auto", lg: "0" },
          ":hover:after": {
            lg: {
              position: "absolute",
              left: 0,
              bottom: "-30px",
              borderBottom: "4px solid var(--blue)",
              borderRadius: "2px",
              width: "100%",
              content: '""',
            },
          },
          ":after": {
            position: "absolute",
            left: "-64px",
            bottom: "-22px",
            borderBottom: "1px solid var(--gray)",
            width: { xs: "248px", lg: 0 },
            content: '""',
          },
        }}
      >
        <Link
          className={
            router.pathname == "/contact/Contact" ? nav.active : nav.link
          }
          href={"/contact/Contact"}
        >
          Contact
        </Link>
      </Grid>

      <Grid
        sx={{
          cursor: "pointer",
          height: { lg: "100%" },
          position: "relative",
          margin: { xs: "20px auto", lg: "0" },
          ":hover:after": {
            lg: {
              position: "absolute",
              left: 0,
              bottom: "-30px",
              borderBottom: "4px solid var(--blue)",
              borderRadius: "2px",
              width: "100%",
              content: '""',
            },
          },
          ":after": {
            position: "absolute",
            left: "-79px",
            bottom: "-22px",
            borderBottom: "1px solid var(--gray)",
            width: { xs: "248px", lg: 0 },
            content: '""',
          },
        }}
      >
        <Link
          className={router.pathname == "/blog/Blog" ? nav.active : nav.link}
          href={"/blog/Blog"}
        >
          Blog
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navigation;
