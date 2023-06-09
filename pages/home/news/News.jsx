import { Container } from "@mui/material";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Box } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import news from "../news/News.module.css";
import Link from "next/link";

const News = ({ games }) => {
  const gameNew = games.slice(0, 8);
  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };
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
        <div className="title-section">New and trending</div>
        <Swiper
          className={news["slider-news"]}
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
          {gameNew.map((item) => (
            <SwiperSlide key={item.id}>
              <Grid width={"100%"}>
                <Link
                  as={"/game-detail/[gid]"}
                  href={{
                    pathname: "/game-detail/[gid]",
                    query: { gid: item.id },
                  }}
                  style={{ color: "white" }}
                >
                  <Grid
                    width={"90%"}
                    margin={"auto"}
                    position={"relative"}
                    maxWidth="360px"
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
                      src={item.img}
                      alt="img-offer"
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                    />
                    <Grid
                      width={"100%"}
                      position="absolute"
                      left={0}
                      bottom={0}
                      display={"flex"}
                    >
                      <Grid
                        sx={{
                          backgroundColor: "gray",
                          width: "100%",
                          padding: "10px",
                        }}
                      >
                        {item.name}
                        <Grid container marginTop={"5px"}>
                          <Grid
                            padding="5px"
                            sx={{
                              backgroundColor: "green",
                              fontWeight: "600",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div>-{item.sale}%</div>
                          </Grid>
                          <Grid
                            padding="5px 10px"
                            sx={{
                              backgroundColor: "var(--dark)",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "12px",
                                textDecoration: "line-through",
                                color: "var(--gray)",
                                textAlign: "center",
                              }}
                            >
                              {convertVnd(item.price)} ₫
                            </div>
                            {convertVnd((item.price * (100 - item.sale)) / 100)}{" "}
                            ₫
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <Link href={"/game-detail/GameDetail"} style={{ color: "white" }}>
              <Grid
                width={"90%"}
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
                  src="/img/game-10.jpg"
                  alt="img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
                <Grid
                  width={"100%"}
                  position="absolute"
                  left={0}
                  bottom={0}
                  display={"flex"}
                >
                  <Grid
                    sx={{
                      backgroundColor: "gray",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    Cyberpunk 2077
                    <Grid container marginTop={"5px"}>
                      <Grid
                        padding="5px"
                        sx={{
                          backgroundColor: "green",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>-50%</div>
                      </Grid>
                      <Grid
                        padding="5px 10px"
                        sx={{
                          backgroundColor: "var(--dark)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            textDecoration: "line-through",
                            color: "var(--gray)",
                            textAlign: "center",
                          }}
                        >
                          {"990,000 ₫"}
                        </div>
                        {"495,000 ₫"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/game-detail/GameDetail"} style={{ color: "white" }}>
              <Grid
                width={"90%"}
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
                  src="/img/game-11.jpg"
                  alt="img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
                <Grid
                  width={"100%"}
                  position="absolute"
                  left={0}
                  bottom={0}
                  display={"flex"}
                >
                  <Grid
                    sx={{
                      backgroundColor: "gray",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    {"Assassin's Creed® Valhalla"}
                    <Grid container marginTop={"5px"}>
                      <Grid
                        padding="5px"
                        sx={{
                          backgroundColor: "green",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>-67%</div>
                      </Grid>
                      <Grid
                        padding="5px 10px"
                        sx={{
                          backgroundColor: "var(--dark)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            textDecoration: "line-through",
                            color: "var(--gray)",
                            textAlign: "center",
                          }}
                        >
                          {"990,000 ₫"}
                        </div>
                        {"326,700 ₫"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/game-detail/GameDetail"} style={{ color: "white" }}>
              <Grid
                width={"90%"}
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
                  src="/img/game-12.jpg"
                  alt="img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
                <Grid
                  width={"100%"}
                  position="absolute"
                  left={0}
                  bottom={0}
                  display={"flex"}
                >
                  <Grid
                    sx={{
                      backgroundColor: "gray",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    Watch Dogs: Legion Standard Edition
                    <Grid container marginTop={"5px"}>
                      <Grid
                        padding="5px"
                        sx={{
                          backgroundColor: "green",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>-75%</div>
                      </Grid>
                      <Grid
                        padding="5px 10px"
                        sx={{
                          backgroundColor: "var(--dark)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            textDecoration: "line-through",
                            color: "var(--gray)",
                            textAlign: "center",
                          }}
                        >
                          {"990,000 ₫"}
                        </div>
                        {"247,500 ₫"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/game-detail/GameDetail"} style={{ color: "white" }}>
              <Grid
                width={"90%"}
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
                  src="/img/game-13.jpg"
                  alt="img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
                <Grid
                  width={"100%"}
                  position="absolute"
                  left={0}
                  bottom={0}
                  display={"flex"}
                >
                  <Grid
                    sx={{
                      backgroundColor: "gray",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    Red Dead Redemption 2
                    <Grid container marginTop={"5px"}>
                      <Grid
                        padding="5px"
                        sx={{
                          backgroundColor: "green",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>-60%</div>
                      </Grid>
                      <Grid
                        padding="5px 10px"
                        sx={{
                          backgroundColor: "var(--dark)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            textDecoration: "line-through",
                            color: "var(--gray)",
                            textAlign: "center",
                          }}
                        >
                          {"1,000,800 ₫"}
                        </div>
                        {"400,000 ₫"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href={"/game-detail/GameDetail"} style={{ color: "white" }}>
              <Grid
                width={"90%"}
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
                  src="/img/game-14.jpg"
                  alt="img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
                <Grid
                  width={"100%"}
                  position="absolute"
                  left={0}
                  bottom={0}
                  display={"flex"}
                >
                  <Grid
                    sx={{
                      backgroundColor: "gray",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    Need for Speed™ Unbound
                    <Grid container marginTop={"5px"}>
                      <Grid
                        padding="5px"
                        sx={{
                          backgroundColor: "green",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>-10%</div>
                      </Grid>
                      <Grid
                        padding="5px 10px"
                        sx={{
                          backgroundColor: "var(--dark)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            textDecoration: "line-through",
                            color: "var(--gray)",
                            textAlign: "center",
                          }}
                        >
                          {"1,090,000 ₫"}
                        </div>
                        {"981,000 ₫"}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </SwiperSlide> */}

          <div className={news.control}>
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

export default News;
