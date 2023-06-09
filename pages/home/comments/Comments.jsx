import React from "react";
import { Container } from "@mui/material";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Box } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import comments from "../comments/Comments.module.css";

const Comments = () => {
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
          Users Rate
        </div>
        <Swiper
          className={comments["slider-news"]}
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
                width={"90%"}
                height={"max-content"}
                margin={"auto"}
                sx={{
                  ":hover": {
                    opacity: 0.6,
                  },
                  cursor: "pointer",
                  backgroundColor: "var(--dark-2)",
                  padding: "50px 30px",
                }}
                container
              >
                <Grid item={true} xs={3}>
                  <img
                    src="/img/user-1.jpg"
                    alt="user"
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                      borderRadius: "15px",
                    }}
                  />
                </Grid>
                <Grid item={true} xs={9} sx={{ padding: "0 20px" }}>
                  <Box>
                    <p
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      This is the ultimate version of Dark Souls thanks to its
                      vast and gigantic open world.
                    </p>
                  </Box>
                  <Box marginTop={3}>
                    <h3
                      style={{
                        fontWeight: "var(--font-title)",
                        fontWeight: "700",
                      }}
                    >
                      Van Thuan
                    </h3>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "14px",
                        color: "var(--blue)",
                      }}
                    >
                      Elden ring
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid width={"100%"}>
              <Grid
                width={"90%"}
                height={"max-content"}
                margin={"auto"}
                sx={{
                  ":hover": {
                    opacity: 0.6,
                  },
                  cursor: "pointer",
                  backgroundColor: "var(--dark-2)",
                  padding: "50px 30px",
                }}
                container
              >
                <Grid item={true} xs={3}>
                  <img
                    src="/img/user-2.jpg"
                    alt="user"
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                      borderRadius: "15px",
                    }}
                  />
                </Grid>
                <Grid item={true} xs={9} sx={{ padding: "0 20px" }}>
                  <Box>
                    <p
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Cyberpunk 2077 is the game we were waiting for: big,
                      funny, full of quests and with a lot of RPG aspects
                      perfectly integrated in the gameplay.
                    </p>
                  </Box>
                  <Box marginTop={3}>
                    <h3
                      style={{
                        fontWeight: "var(--font-title)",
                        fontWeight: "700",
                      }}
                    >
                      Joker
                    </h3>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "14px",
                        color: "var(--blue)",
                      }}
                    >
                      Cyberpunk 2077
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid width={"100%"}>
              <Grid
                width={"90%"}
                height={"max-content"}
                margin={"auto"}
                sx={{
                  ":hover": {
                    opacity: 0.6,
                  },
                  cursor: "pointer",
                  backgroundColor: "var(--dark-2)",
                  padding: "50px 30px",
                }}
                container
              >
                <Grid item={true} xs={3}>
                  <img
                    src="/img/user-3.jpg"
                    alt="user"
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                      borderRadius: "15px",
                    }}
                  />
                </Grid>
                <Grid item={true} xs={9} sx={{ padding: "0 20px" }}>
                  <Box>
                    <p
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Best game of all time, this is definitely worth your money
                      if you are looking for a amazing open world game has a
                      really good story.
                    </p>
                  </Box>
                  <Box marginTop={3}>
                    <h3
                      style={{
                        fontWeight: "var(--font-title)",
                        fontWeight: "700",
                      }}
                    >
                      Mina hollace
                    </h3>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "14px",
                        color: "var(--blue)",
                      }}
                    >
                      Red Dead Redemption 2
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </SwiperSlide>

          <div className={comments.control}>
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

export default Comments;
