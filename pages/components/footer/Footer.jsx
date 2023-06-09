import { Container, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import footer from "../footer/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={footer.footer}>
      <img
        className={footer["bg-footer"]}
        src="/img/bg-footer.jpg"
        alt="bg-footer"
      />
      <div className={footer["footer-list"]}>
        <Container>
          <Grid container>
            <Grid
              item={true}
              xs={12}
              lg={4}
              textAlign={{ xs: "center", lg: "left" }}
            >
              <Link href={"/"}>
                <img
                  src="/img/logo.png"
                  alt="logo=footer"
                  className={footer.logo}
                ></img>
              </Link>

              <Grid className={footer.p} margin={{ xs: "auto", lg: "0" }}>
                A quality apparels will make use of premium materials to create
                a piece of clothings that you will be proud to call your own.
              </Grid>

              <Grid
                item={true}
                display={"flex"}
                flexDirection={"column"}
                gap={"8px"}
              >
                <Grid item={true}>
                  <p className={footer.title}>User Ratings</p>
                </Grid>
                <Grid
                  item={true}
                  display={"flex"}
                  alignItems={"center"}
                  margin={{ xs: "auto", lg: "0" }}
                >
                  <StarIcon className={footer["star-i"]}></StarIcon>
                  <StarIcon className={footer["star-i"]}></StarIcon>
                  <StarIcon className={footer["star-i"]}></StarIcon>
                  <StarIcon className={footer["star-i"]}></StarIcon>
                  <StarIcon className={footer["star-i"]}></StarIcon>
                </Grid>
                <Grid item={true}>
                  <span style={{ color: "#18c495" }}>(5.0) </span>
                  <span style={{ color: "#8c8c8c" }}>review based on 3550</span>
                </Grid>
              </Grid>

              <Grid
                width={"max-content"}
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                margin={{ xs: "32px auto", lg: "32px 0 0 0" }}
              >
                <LinkedInIcon className={footer.icon}></LinkedInIcon>
                <YouTubeIcon className={footer.icon}></YouTubeIcon>
                <TwitterIcon className={footer.icon}></TwitterIcon>
                <InstagramIcon className={footer.icon}></InstagramIcon>
                <GoogleIcon className={footer.icon}></GoogleIcon>
                <FacebookIcon className={footer.icon}></FacebookIcon>
              </Grid>
            </Grid>
            <Grid
              item={true}
              display={{ xs: "none", lg: "block" }}
              xs={0}
              lg={2}
              paddingLeft={"30px"}
            >
              <p className={footer.title}>Quick Links</p>
              <div className={footer.content}>
                <p className={footer.p}>
                  <a href="#">About company</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Labella professional</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Customer reviews</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Modern slavery act</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Gifts & vouchers</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Careers</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Contact us</a>
                </p>
              </div>
            </Grid>
            <Grid
              item={true}
              display={{ xs: "none", lg: "block" }}
              xs={0}
              lg={2}
              paddingLeft={"30px"}
            >
              <p className={footer.title}>Top categories</p>
              <div className={footer.content}>
                <p className={footer.p}>
                  <a href="#">Arcade</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Adventure</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Board</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Action</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Racing</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Simulation</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Strategy</a>
                </p>
              </div>
            </Grid>
            <Grid
              item={true}
              display={{ xs: "none", lg: "block" }}
              xs={0}
              lg={2}
              paddingLeft={"30px"}
            >
              <p className={footer.title}>My Account</p>
              <div className={footer.content}>
                <p className={footer.p}>
                  <a href="#">My order</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Track my order</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Help center</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Return policy</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Terms & condition</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Report a bug</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Blog</a>
                </p>
              </div>
            </Grid>
            <Grid
              item={true}
              display={{ xs: "none", lg: "block" }}
              xs={0}
              lg={2}
              paddingLeft={"30px"}
            >
              <p className={footer.title}>User Ratings</p>
              <div className={footer.content}>
                <p className={footer.p}>
                  <a href="#">About us</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Contact us</a>
                </p>
                <p className={footer.p}>
                  <a href="#">{"Faq's"}</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Payment policy</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Privacy policy</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Shipping policy</a>
                </p>
                <p className={footer.p}>
                  <a href="#">Sitemap</a>
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
