import React from "react";
import { Container } from "@mui/material";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Box } from "@mui/material";
import partner from "../partner/Partner.module.css";

const Partner = () => {
  return (
    <div>
      <Container
        sx={{
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
        <div
          className="title-section"
          style={{
            textAlign: "center",
          }}
        >
          Partner developer
        </div>
        <Swiper
          className={partner["slider-news"]}
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
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Grid
              width={"100%"}
              sx={{
                width: "150px",
                height: "150px",
                overflow: "hidden",
                borderRadius: "20px",
                "& img": {
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <img
                src="/img/partner-1.jpg"
                alt="partner"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  transition: "all 0.2s linear",
                }}
              />
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"100%"}
              sx={{
                width: "150px",
                height: "150px",
                overflow: "hidden",
                borderRadius: "20px",
                "& img": {
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <img
                src="/img/partner-2.jpg"
                alt="partner"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  transition: "all 0.2s linear",
                }}
              />
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"100%"}
              sx={{
                width: "150px",
                height: "150px",
                overflow: "hidden",
                borderRadius: "20px",
                "& img": {
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <img
                src="/img/partner-3.jpg"
                alt="partner"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  transition: "all 0.2s linear",
                }}
              />
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"100%"}
              sx={{
                width: "150px",
                height: "150px",
                overflow: "hidden",
                borderRadius: "20px",
                "& img": {
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <img
                src="/img/partner-4.jpg"
                alt="partner"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  transition: "all 0.2s linear",
                }}
              />
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"100%"}
              sx={{
                width: "150px",
                height: "150px",
                overflow: "hidden",
                borderRadius: "20px",
                "& img": {
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <img
                src="/img/partner-5.jpg"
                alt="partner"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  transition: "all 0.2s linear",
                }}
              />
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid
              width={"100%"}
              sx={{
                width: "150px",
                height: "150px",
                overflow: "hidden",
                borderRadius: "20px",
                "& img": {
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <img
                src="/img/partner-6.jpg"
                alt="partner"
                style={{
                  maxWidth: "100%",
                  borderRadius: "20px",
                  transition: "all 0.2s linear",
                }}
              />
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Partner;
