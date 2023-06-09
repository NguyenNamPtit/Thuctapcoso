import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "../game-detail/GameDetail.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
import Similar from "./similar/Similar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductById,
} from "../../store/feature/games/games.slice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { selectUser } from "../../store/feature/auth/auth.slice";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  query,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import Banner from "../components/banner/Banner";

const GameDetail = () => {
  const user = useSelector(selectUser);
  const [wishlist, setWishlist] = useState([]);

  const wishlistRef = collection(getFirestore(app), "wishlist");

  useEffect(() => {
    const q = query(wishlistRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setWishlist(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const router = useRouter();

  const dispatch = useDispatch();

  const {
    query: { gid },
  } = router;
  const game = useSelector(selectProductById(gid));
  const games = useSelector(selectAllProducts);
  const gameSimilar = games.filter((item) => item.genres == game.genres);
  const [qty, setQty] = useState(1);

  const changeImg = (e) => {
    document.querySelector(".big-img").src = e.target.src;
  };

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  // wishlist
  const handleAdd = async (game) => {
    const check = wishlist.filter(
      (item) => item.uid == user.uid && item.name == game.name
    );
    if (check.length > 0) {
      toast.error("The game is already on the wish list", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const reference = doc(wishlistRef);
      await setDoc(reference, {
        uid: user.uid,
        gameId: game.id,
        ...game,
      });
    }
  };

  // // check wishlist
  const checkWishlist = wishlist.filter((item) => item.gameId == gid).length;

  // cart
  const Msg = () => (
    <span
      style={{
        color: "var(--bg)",
      }}
    >
      {"Add" + game.name + "to cart successful!"}
    </span>
  );

  // cart

  const cartRef = collection(getFirestore(app), "cart");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const q = query(cartRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const handleAddCart = async (game) => {
    // message
    const Msg = () => (
      <span
        style={{
          color: "var(--bg)",
          fontFamily: "var(--font-default)",
        }}
      >
        <CheckCircleOutlineIcon
          sx={{
            color: "var(--green)",
          }}
        ></CheckCircleOutlineIcon>{" "}
        {"Add" + game.name + " to wishlist successful!"}
      </span>
    );

    // check game exist
    const check = cart.filter(
      (item) => item.uid == user.uid && item.name == game.name
    );
    if (check.length > 0) {
      const reference = doc(cartRef, check[0].id);
      await updateDoc(reference, {
        quantity: check[0].quantity + qty,
      });
      toast(<Msg></Msg>);
    } else {
      const reference = doc(cartRef);
      await setDoc(reference, {
        uid: user.uid,
        gameId: game.id,
        quantity: 1,
        ...game,
      });
      toast(<Msg></Msg>);
    }
  };

  return (
    <div>
      <Banner parent="Store" linkChildren={game.name} />

      <section className={styles["section-gamedetail"]}>
        <Container>
          <p
            className={styles.title}
            style={{
              marginLeft: "16px",
            }}
          >
            {game.name}
          </p>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </Grid>
            <Grid
              sx={{
                padding: "2px 8px",
                backgroundColor: "var(--blue)",
              }}
            >
              {game.rate}
            </Grid>
          </Grid>
          <Grid container>
            {/* left */}
            <Grid
              item={true}
              xs={12}
              lg={8}
              padding={"16px 0"}
              order={{
                xs: 1,
                lg: 0,
              }}
            >
              <section className={styles["container-left"]}>
                <img
                  className="big-img"
                  src={game.screen_shoot[0].img_shoot}
                  alt="img-game-detal"
                  style={{
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    marginBottom: "16px",
                  }}
                />

                {/* slider */}
                <Box
                  sx={{
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
                  <Swiper
                    className={styles["slider-img"]}
                    loop={true}
                    slidesPerView="auto"
                    centerInsufficientSlides={true}
                    spaceBetween={16}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      600: {
                        slidesPerView: 3,
                      },
                      900: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 5,
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
                    {game.screen_shoot.map((item) => (
                      <SwiperSlide key={item.id_img}>
                        <Grid width={"100%"}>
                          <Grid
                            width={"100%"}
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
                              src={item.img_shoot}
                              alt="img-shoot"
                              style={{
                                maxWidth: "100%",
                                verticalAlign: "middle",
                              }}
                              onClick={(e) => changeImg(e)}
                            />
                          </Grid>
                        </Grid>
                      </SwiperSlide>
                    ))}

                    <div className={styles.control}>
                      <div className="btn-next">
                        <WestRoundedIcon></WestRoundedIcon>
                      </div>
                      <div className="btn-prev">
                        <EastRoundedIcon></EastRoundedIcon>
                      </div>
                    </div>
                  </Swiper>
                </Box>

                <div className={styles["box-description"]}>
                  <p>
                    <strong>{game.name}</strong>
                  </p>
                  <br />
                  <p>{game.description}</p>
                </div>

                <div className={styles["box-system"]}>
                  <p>
                    <strong>SYSTEM REQUIREMENTS</strong>
                  </p>
                  <br />
                  <Grid
                    container
                    paddingTop={2}
                    borderTop={"1px solid var(--gray)"}
                  >
                    <Grid item={true} xs={6} fontSize={"15px"}>
                      <div className={styles["box-req"]}>
                        <p
                          style={{
                            fontFamily: "var(--font-title)",
                          }}
                        >
                          MINIMUM:
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            OS:{" "}
                          </span>{" "}
                          {game.minimum_system.os}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Processor:{" "}
                          </span>{" "}
                          {game.minimum_system.processor}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Memory:{" "}
                          </span>{" "}
                          {game.minimum_system.memory}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Storage:{" "}
                          </span>{" "}
                          {game.minimum_system.storage}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Direct X:{" "}
                          </span>
                          {"   "}
                          {game.minimum_system.direct}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Graphics:{" "}
                          </span>{" "}
                          {game.minimum_system.graphics}
                        </p>
                      </div>
                    </Grid>
                    <Grid item={true} xs={6} fontSize={"15px"}>
                      <div className={styles["box-req"]}>
                        <p
                          style={{
                            fontFamily: "var(--font-title)",
                          }}
                        >
                          RECOMMENDED:
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            OS:{" "}
                          </span>{" "}
                          {game.recommend_system.os}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Processor:{" "}
                          </span>{" "}
                          {game.recommend_system.processor}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Memory:{" "}
                          </span>{" "}
                          {game.recommend_system.memory}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Storage:{" "}
                          </span>{" "}
                          {game.recommend_system.storage}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Direct X:{" "}
                          </span>
                          {"   "}
                          {game.recommend_system.direct}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Graphics:{" "}
                          </span>{" "}
                          {game.recommend_system.graphics}
                        </p>
                      </div>
                    </Grid>

                    <p>
                      <span
                        style={{
                          color: "var(--gray)",
                          fontSize: "15px",
                        }}
                      >
                        Languages Supported:{" "}
                      </span>{" "}
                      {game.language_sp}
                    </p>
                  </Grid>
                </div>
              </section>
            </Grid>

            {/* rigt */}
            <Grid
              item={true}
              xs={12}
              lg={4}
              padding={2}
              order={{
                xs: 0,
                lg: 1,
              }}
            >
              <section className={styles["container-right"]}>
                <img
                  src={game.img_header}
                  alt="img-header"
                  style={{
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                />
                <div className={styles["box-price"]}>
                  <div className={styles["box-sale"]}>-{game.sale}%</div>
                  <div
                    style={{
                      color: "gray",
                      textDecoration: "line-through",
                    }}
                  >
                    {convertVnd(game.price)} đ
                  </div>
                  <div>
                    {convertVnd((game.price * (100 - game.sale)) / 100)} đ
                  </div>
                </div>

                <p>Sale ends 1/5/2023 at 11:00 PM</p>
                <br />
                <Grid container>
                  <Grid
                    item={true}
                    xs={4}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <input
                      readOnly
                      type="number"
                      className={styles["input-qty"]}
                      value={qty}
                    ></input>
                    <div className={styles["box-quanlity"]}>
                      <div
                        className={styles["icon-qty"]}
                        onClick={() => {
                          setQty(qty + 1);
                        }}
                      >
                        <AddIcon></AddIcon>
                      </div>
                      <div
                        className={styles["icon-qty"]}
                        onClick={() => {
                          if (qty > 1) {
                            setQty(qty - 1);
                          }
                        }}
                      >
                        <RemoveIcon></RemoveIcon>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item={true}
                    xs={8}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {checkWishlist > 0 ? (
                      <button
                        disabled={true}
                        className={styles["btn-disable-list"]}
                      >
                        In Whishlist
                      </button>
                    ) : (
                      <button
                        className={styles["btn-add-list"]}
                        onClick={() => {
                          if (user !== null) {
                            handleAdd(game);
                            const Msg = () => (
                              <span
                                style={{
                                  color: "var(--bg)",
                                  fontFamily: "var(--font-default)",
                                }}
                              >
                                <CheckCircleOutlineIcon
                                  sx={{
                                    color: "var(--green)",
                                  }}
                                ></CheckCircleOutlineIcon>{" "}
                                {"Add" + game.name + " to wishlist successful!"}
                              </span>
                            );
                            toast(<Msg></Msg>);
                          } else {
                            toast.warning(
                              "You need to login to perform this function",
                              {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              }
                            );
                          }
                        }}
                      >
                        Add to Whishlist
                      </button>
                    )}
                  </Grid>
                </Grid>
                <br />
                <button
                  className={styles["btn-add"]}
                  onClick={() => {
                    if (user !== null) {
                      handleAddCart(game);
                    } else {
                      toast.warning(
                        "You need to login to perform this function",
                        {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: false,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        }
                      );
                    }
                  }}
                >
                  Add to cart
                </button>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Genres
                  </div>
                  <div>{game.genres}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Developer
                  </div>
                  <div>{game.developer}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Publisher
                  </div>
                  <div>{game.publisher}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Release Date
                  </div>
                  <div>{game.release_date}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Platform
                  </div>
                  <div>{game.system}</div>
                </div>
                <div className={styles["container-box-share"]}>
                  <button className={styles["box-share"]}>
                    <ShareIcon></ShareIcon> Share
                  </button>
                  <button className={styles["box-share"]}>
                    <FlagIcon></FlagIcon> Repost
                  </button>
                </div>
              </section>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles["section-slider-similar"]}>
        <p className={styles.title}>MORE LIKE THIS</p>
        <Similar gameSimilar={gameSimilar}></Similar>
      </section>
    </div>
  );
};

export default GameDetail;
