import React, { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import favorites from "../favorites/Favorites.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { selectUser } from "../../store/feature/auth/auth.slice";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import Banner from "../components/banner/Banner";

const Favorites = () => {
  const user = useSelector(selectUser);

  // wishlist
  const wishlistRef = collection(getFirestore(app), "wishlist");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const q = query(wishlistRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setWishlist(
        data.filter((item) => item.uid == (user && user.uid))
      );
    });
    return () => wishlist();
  }, []);

  const Delete = async (id) => {
    const reference = doc(wishlistRef, id);
    await deleteDoc(reference);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        Delete(id);
      }
    });
  };

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  if (wishlist.length == 0) {
    return (
      <div className={favorites["no-game"]}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "var(--font-title)",
            }}
          >
            No game in Wishlist
          </p>
        </div>
        <div>
          <Link href={"/games/Games"}>
            <button className="btn">Go to Store</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Banner parent="Home" linkChildren="Wishlist" />

      <section className={favorites["section-wishlist"]}>
        <Container>
          <p className={favorites.title}>Wishlist</p>
          <br />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "16px",
              flexDirection: "column",
            }}
          >
            {wishlist.map((item) => (
              <Grid
                key={item.id}
                container
                width={"100%"}
                sx={{
                  backgroundColor: "var(--dark-2)",
                }}
              >
                <Grid item={true} xs={12} sm={6} md={2} padding={"24px 24px"}>
                  <img
                    src={item.img}
                    alt="img-game"
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  item={true}
                  md={5}
                  padding={"24px 24px"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p>
                    <strong>{item.name}</strong>
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Genres:
                    </span>{" "}
                    {item.genres}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Developer:
                    </span>{" "}
                    {item.developer}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Publisher:
                    </span>{" "}
                    {item.publisher}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      OS:
                    </span>{" "}
                    {item.system}
                  </p>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  item={true}
                  md={5}
                  padding={"24px 24px"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div className={favorites["box-price-wishlist"]}>
                      <div className={favorites["box-sale"]}>-{item.sale}%</div>
                      <div className={favorites["box-price"]}>
                        <p className={favorites["text-sale"]}>
                          {convertVnd(item.price)} đ
                        </p>
                        <p>
                          {convertVnd((item.price * (100 - item.sale)) / 100)} đ
                        </p>
                      </div>
                      <Link
                        as={"/game-detail/[gid]"}
                        href={{
                          pathname: "/game-detail/[gid]",
                          query: {
                            gid: item.gameId,
                          },
                        }}
                      >
                        <div className={favorites["box-view"]}>View detail</div>
                      </Link>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      className={favorites["box-remove"]}
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </button>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Favorites;
