import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import styles from "../home-slider/HomeSlider.module.css";
import { Box } from "@mui/system";
import Link from "next/link";

const HomeSlider = () => {
  return (
    <div>
      <Box
        sx={{
          "& .swiper-pagination": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0 10px",
            padding: "40px 0",
          },
          "& .swiper-pagination-bullet": {
            width: "12px",
            height: "12px",
            backgroundColor: "white",
            opacity: 1,
          },
          "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
            backgroundColor: "var(--bg) !important",
            width: "20px",
            height: "20px",
            border: "2px solid var(--blue)",
          },
        }}
      >
        <Swiper
          className={styles["slider-home"]}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <Grid container>
              <Grid
                item={true}
                padding={{ xs: "15px", md: "45px", lg: "75px" }}
                xs={12}
                md={6}
                height={{
                  xs: "250px",
                  md: "450px",
                  lg: "650px",
                }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={{ xs: "center", lg: "flex-start" }}
                gap={{ xs: "20px", md: "30px", lg: "40px" }}
              >
                <Grid
                  maxWidth={"330px"}
                  sx={{
                    fontFamily: "var(--font-title)",
                    fontSize: { xs: "24px", md: "32px", lg: "40px" },
                    color: "white",
                    fontWeight: "700",
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                  }}
                >
                  {"Assassin's Creed® Odyssey"}
                </Grid>
                <Grid
                  maxWidth={"330px"}
                  sx={{
                    fontFamily: "var(--font-default)",
                    fontSize: { xs: "16px", md: "18px", lg: "20px" },
                    color: "white",
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                  }}
                >
                  One journay, two heroes, and hard definitions
                </Grid>
                <Grid>
                  <Link
                    as={"/game-detail/[gid]"}
                    href={{
                      pathname: "/game-detail/[gid]",
                      query: { gid: 30 },
                    }}
                  >
                    <button className={styles.button}>Purchase now</button>
                  </Link>
                </Grid>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <img
                  className={styles["img-thumbnail"]}
                  src="/img/img-slider-1.png"
                  alt="img-slider"
                />
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid
                item={true}
                padding={{ xs: "15px", md: "45px", lg: "75px" }}
                xs={12}
                md={6}
                height={{
                  xs: "250px",
                  md: "450px",
                  lg: "650px",
                }}
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                alignItems={{ xs: "center", lg: "flex-start" }}
                gap={{ xs: "20px", md: "30px", lg: "40px" }}
              >
                <Grid
                  maxWidth={"330px"}
                  sx={{
                    fontFamily: "var(--font-title)",
                    fontSize: { xs: "24px", md: "32px", lg: "40px" },
                    color: "white",
                    fontWeight: "700",
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                  }}
                >
                  {"Assassin's Creed Valhalla"}
                </Grid>
                <Grid
                  maxWidth={"330px"}
                  sx={{
                    fontFamily: "var(--font-default)",
                    fontSize: { xs: "16px", md: "18px", lg: "20px" },
                    color: "white",
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                  }}
                >
                  {"Valhalla is the ultimate Assassin's Creed experience"}
                </Grid>
                <Grid>
                  <Link
                    as={"/game-detail/[gid]"}
                    href={{
                      pathname: "/game-detail/[gid]",
                      query: { gid: 11 },
                    }}
                  >
                    <button className={styles.button}>Purchase now</button>
                  </Link>
                </Grid>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <img
                  className={styles["img-thumbnail"]}
                  src="/img/img-slider-2.png"
                  alt="img-slider"
                />
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  );
};

export default HomeSlider;
