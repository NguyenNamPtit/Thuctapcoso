import { Box, Container, Grid } from "@mui/material";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import offer from "../offer/Offer.module.css";
import Link from "next/link";
import { display } from "@mui/system";

const Offer = ({ games }) => {
  const gameOffer = games.filter((item) => item.genres == "Open World");
  const gameof1 = gameOffer.slice(0, 4);
  const gameof2 = gameOffer.slice(4, 8);
  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };
  return (
    <div>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-title)",
            fontSize: "36px",
            fontWeight: "700",
            color: "white",
            padding: "50px 0",
          }}
        >
          Special Offers
        </Box>
        <Grid container>
          <Grid
            item={true}
            xs={12}
            md={6}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              ":hover": {
                "& img": {
                  filter: "grayScale(60%)",
                },
              },
            }}
          >
            <Grid
              position={"relative"}
              width="100%"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Grid>
                <img
                  src="/img/bg-img-sale.png"
                  alt="bg-img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
              </Grid>
              <Grid
                sx={{
                  position: "absolute",
                  left: { xs: "0", md: "-20px", lg: "-40px" },
                  bottom: 0,
                }}
              >
                <img
                  src="/img/img-sale.png"
                  alt="bg-img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
              </Grid>
              <Grid
                width="100%"
                height={"100%"}
                sx={{
                  position: "absolute",
                  zIndex: "3",
                  top: 0,
                  left: 0,
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  paddingBottom: "40px",
                  gap: "30px",
                }}
              >
                <Grid
                  fontSize={"16px"}
                  fontWeight="700"
                  fontFamily={"var(--font-title)"}
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                  justifyContent="center"
                  gap={"12px"}
                >
                  <Grid>
                    <HorizontalRuleOutlinedIcon
                      sx={{ fontSize: "36px" }}
                    ></HorizontalRuleOutlinedIcon>
                  </Grid>
                  <Grid>Up to 50% flate</Grid>
                  <Grid>
                    <HorizontalRuleOutlinedIcon
                      sx={{ fontSize: "36px" }}
                    ></HorizontalRuleOutlinedIcon>
                  </Grid>
                </Grid>
                <Grid
                  fontSize={"50px"}
                  fontWeight="700"
                  fontFamily={"var(--font-title)"}
                >
                  Cyber monday sale
                </Grid>
                <Grid>
                  <Link href={"/games/Games"}>
                    <button className="btn">Purchase now</button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={6}
            paddingLeft={{ xs: 0, md: "30px" }}
            paddingTop={{ xs: "30px", md: 0 }}
          >
            <Swiper
              className={offer["slider-offer"]}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              slidesPerGroup={1}
              slidesPerView={1}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Grid container>
                  {gameof1.map((item) => (
                    <Grid
                      key={item.id}
                      xs={6}
                      item={true}
                      padding={{
                        xs: "8px 0",
                        sm: "13px 0",
                      }}
                    >
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
                            style={{
                              maxWidth: "100%",
                              verticalAlign: "middle",
                            }}
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
                                  <div>
                                    {convertVnd(
                                      (item.price * (100 - item.sale)) / 100
                                    )}{" "}
                                    ₫
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  {gameof2.map((item) => (
                    <Grid
                      key={item.id}
                      xs={6}
                      item={true}
                      padding={{
                        xs: "8px 0",
                        sm: "13px 0",
                      }}
                    >
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
                            style={{
                              maxWidth: "100%",
                              verticalAlign: "middle",
                            }}
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
                                  <div>
                                    {convertVnd(
                                      (item.price * (100 - item.sale)) / 100
                                    )}{" "}
                                    ₫
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Offer;
