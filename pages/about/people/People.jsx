import { Container } from "@mui/material";
import React from "react";
import people from "../people/People.module.css";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Box } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import Link from "next/link";

const People = () => {
  return (
    <div>
      <Container
        sx={{
          textAlign: "center",
          color: "white",
          fontFamily: "var(--font-default)",
          padding: "20px 0",
          "& .swiper-slide": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .btn-next, & .btn-prev": {
            cursor: "pointer",
            width: "40px",
            height: "40px",
            border: "2px solid var(--gray)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .btn-next:hover, & .btn-prev:hover": {
            color: "white",
            backgroundColor: "var(--blue)",
            border: "2px solid var(--blue)",
          },
        }}
      >
        <div className="title-section">Key people</div>
        <Swiper
          className={people["slider-people"]}
          loop={true}
          slidesPerView="auto"
          centerInsufficientSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
            clickable: true,
          }}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <Grid width={"100%"}>
              <Grid
                width={"80%"}
                margin={"auto"}
                position={"relative"}
                sx={{
                  ":hover": {
                    "& img": {
                      opacity: 0.6,
                    },
                  },
                  cursor: "pointer",
                }}
              >
                <img
                  src="/img/people-1.jpg"
                  alt="img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
                <Grid
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignContent={"center"}
                  padding="20px"
                  gap={"8px"}
                >
                  <Grid
                    fontFamily={"var(--font-title)"}
                    fontWeight="700"
                    fontSize={"18px"}
                  >
                    John nicholson
                  </Grid>
                  <Grid color={"var(--blue)"}>CEO</Grid>
                </Grid>
              </Grid>
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"80%"}
              margin={"auto"}
              position={"relative"}
              sx={{
                ":hover": {
                  "& img": {
                    opacity: 0.6,
                  },
                },
                cursor: "pointer",
              }}
            >
              <img
                src="/img/people-2.jpg"
                alt="img-offer"
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
              />
              <Grid
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignContent={"center"}
                padding="20px"
                gap={"8px"}
              >
                <Grid
                  fontFamily={"var(--font-title)"}
                  fontWeight="700"
                  fontSize={"18px"}
                >
                  Sandra monroe
                </Grid>
                <Grid color={"var(--blue)"}>Marketing</Grid>
              </Grid>
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"80%"}
              margin={"auto"}
              position={"relative"}
              sx={{
                ":hover": {
                  "& img": {
                    opacity: 0.6,
                  },
                },
                cursor: "pointer",
              }}
            >
              <img
                src="/img/people-3.jpg"
                alt="img-offer"
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
              />
              <Grid
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignContent={"center"}
                padding="20px"
                gap={"8px"}
              >
                <Grid
                  fontFamily={"var(--font-title)"}
                  fontWeight="700"
                  fontSize={"18px"}
                >
                  Denisse macdonnell
                </Grid>
                <Grid color={"var(--blue)"}>Developer</Grid>
              </Grid>
            </Grid>
          </SwiperSlide>

          <div className={people.control}>
            <div className="btn-next">
              <WestRoundedIcon></WestRoundedIcon>
            </div>
            <div className="btn-prev">
              <EastRoundedIcon></EastRoundedIcon>
            </div>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default People;
