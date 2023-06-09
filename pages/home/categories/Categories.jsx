import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Grid } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import categories from "../categories/Categories.module.css";
import Link from "next/link";

const Categories = () => {
  return (
    <div>
      <Container
        sx={{
          textAlign: "center",
          color: "white",
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
        <div className="title-section">Browse by category</div>
        <Swiper
          slidesPerView="auto"
          centerInsufficientSlides={true}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
            clickable: true,
          }}
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
          }}
          modules={[Navigation, Autoplay]}
          className={categories["slider-categories"]}
        >
          <SwiperSlide>
            <Link
              href={"/games/Games"}
              style={{
                color: "white",
              }}
            >
              <Grid
                position={"relative"}
                sx={{
                  width: "max-content",
                  cursor: "pointer",
                  overflow: "hidden",
                  "& img": {
                    transition: "all 0.2s linear",
                  },
                  ":hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src="img/category-1.png" alt="categories" />
                <div
                  className=""
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgb(0,0,139)) 100%",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={categories["title-category"]}>Adventure</div>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href={"/games/Games"}
              style={{
                color: "white",
              }}
            >
              <Grid
                position={"relative"}
                sx={{
                  width: "max-content",
                  cursor: "pointer",
                  overflow: "hidden",
                  "& img": {
                    transition: "all 0.2s linear",
                  },
                  ":hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src="img/category-2.png" alt="categories" />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgb(184,134,11)) 100%",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={categories["title-category"]}>Rogue-Like</div>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href={"/games/Games"}
              style={{
                color: "white",
              }}
            >
              <Grid
                position={"relative"}
                sx={{
                  width: "max-content",
                  cursor: "pointer",
                  overflow: "hidden",
                  "& img": {
                    transition: "all 0.2s linear",
                  },
                  ":hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src="img/category-3.png" alt="categories" />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgb(139,0,139)) 100%",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={categories["title-category"]}>Open World</div>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href={"/games/Games"}
              style={{
                color: "white",
              }}
            >
              <Grid
                position={"relative"}
                sx={{
                  width: "max-content",
                  cursor: "pointer",
                  overflow: "hidden",
                  "& img": {
                    transition: "all 0.2s linear",
                  },
                  ":hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src="img/category-4.png" alt="categories" />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgb(0,100,0)) 100%",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={categories["title-category"]}>Action</div>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href={"/games/Games"}
              style={{
                color: "white",
              }}
            >
              <Grid
                position={"relative"}
                sx={{
                  width: "max-content",
                  cursor: "pointer",
                  overflow: "hidden",
                  "& img": {
                    transition: "all 0.2s linear",
                  },
                  ":hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src="img/category-5.png" alt="categories" />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgb(0,139,139)) 100%",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={categories["title-category"]}>Horror</div>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href={"/games/Games"}
              style={{
                color: "white",
              }}
            >
              <Grid
                position={"relative"}
                sx={{
                  width: "max-content",
                  cursor: "pointer",
                  overflow: "hidden",
                  "& img": {
                    transition: "all 0.2s linear",
                  },
                  ":hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <img src="img/category-6.png" alt="categories" />
                <div
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0), rgb(139,0,0)) 100%",
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={categories["title-category"]}>Survival</div>
              </Grid>
            </Link>
          </SwiperSlide>

          <div className={categories.control}>
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

export default Categories;
