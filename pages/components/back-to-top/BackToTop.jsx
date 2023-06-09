import { Link } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";
import styles from "../back-to-top/BackToTop.module.css";

const BackToTop = () => {
  return (
    <Link className={styles.icon} href="#">
      <ArrowUpwardIcon></ArrowUpwardIcon>
    </Link>
  );
};

export default BackToTop;
