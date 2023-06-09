import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import cart from "../cart/Cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
  updateDoc,
  query,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import { selectUser } from "../../store/feature/auth/auth.slice";
import Banner from "../components/banner/Banner";

const Cart = () => {
  const user = useSelector(selectUser);
  // cart
  const cartRef = collection(getFirestore(app), "cart");
  const [carts, setCart] = useState([]);

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

  // update cart

  const incrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: quantity + 1,
    });
  };

  const DecrementCart = async (id, quantity) => {
    const reference = doc(cartRef, id);
    await updateDoc(reference, {
      quantity: quantity - 1,
    });
  };

  // delete cart item
  const Delete = async (id) => {
    const reference = doc(cartRef, id);
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

  const total = carts.reduce(
    (total, item) =>
      (total += item.price * (1 - item.sale / 100) * item.quantity),
    0
  );

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  if (carts.length == 0) {
    return (
      <div className={cart["no-game"]}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "var(--font-title)",
            }}
          >
            No game in cart
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
      <Banner parent="Home" linkChildren="Cart" />

      <section className={cart["section-cart"]}>
        <Container>
          <Grid container>
            <Grid item={true} xs={12} md={9} padding={2}>
              <div className={cart["box-left"]}>
                <Grid container borderBottom={"1px solid var(--gray)"}>
                  {/* head */}
                  <Grid
                    item={true}
                    xs={8}
                    sx={{
                      padding: "20px 0",
                      textAlign: "center",
                      borderRight: "1px solid var(--gray)",
                    }}
                  >
                    <p className={cart.title}>Game</p>
                  </Grid>
                  <Grid
                    item={true}
                    xs={3}
                    sx={{
                      padding: "20px 0",
                      textAlign: "center",
                      borderRight: "1px solid var(--gray)",
                    }}
                  >
                    <p className={cart.title}>Total</p>
                  </Grid>
                  <Grid item={true} xs={1}></Grid>
                </Grid>

                {/* body */}
                {carts.map((item) => (
                  <Grid
                    key={item.id}
                    container
                    borderBottom={"1px solid var(--gray)"}
                  >
                    <Grid
                      item={true}
                      xs={8}
                      sx={{
                        borderRight: "1px solid var(--gray)",
                      }}
                    >
                      <Grid
                        container
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                      >
                        <Grid
                          item={true}
                          xs={12}
                          md={8}
                          container
                          borderRight={{ xs: "0", md: "1px solid var(--gray)" }}
                          borderBottom={{
                            xs: "1px solid var(--gray)",
                            md: "0",
                          }}
                          padding={"10px"}
                        >
                          <Grid item={true} xs={12} lg={5}>
                            <Link href={"/game-detail/GameDetail"}>
                              <img
                                src={item.img}
                                alt="img-game-cart"
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                              />
                            </Link>
                          </Grid>
                          <Grid
                            item={true}
                            xs={12}
                            lg={7}
                            padding={{
                              xs: "20px 0 0 0",
                              lg: "0 0 0 20px",
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            <p>
                              <span className={cart.title}>Name: </span>{" "}
                              <span
                                style={{
                                  color: "var(--gray)",
                                }}
                              >
                                {item.name}
                              </span>
                            </p>
                            <p>
                              <span className={cart.title}>Platform: </span>{" "}
                              <span
                                style={{
                                  color: "var(--gray)",
                                }}
                              >
                                {item.system}
                              </span>
                            </p>
                            <p>
                              <span className={cart.title}>Sale: </span>{" "}
                              <span
                                style={{
                                  color: "var(--green)",
                                }}
                              >
                                -{item.sale}%
                              </span>
                            </p>
                            <p>
                              <span className={cart.title}>Price: </span>{" "}
                              <span
                                style={{
                                  color: "var(--blue)",
                                }}
                              >
                                {convertVnd(item.price * (1 - item.sale / 100))}{" "}
                                ₫
                              </span>
                            </p>
                          </Grid>
                        </Grid>
                        <Grid
                          item={true}
                          xs={12}
                          md={4}
                          width={"max-content"}
                          padding={"10px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          gap={"10px"}
                        >
                          <input
                            readOnly
                            type="number"
                            className={cart["input-qty"]}
                            value={item.quantity}
                          ></input>
                          <div className={cart["box-quanlity"]}>
                            <div
                              className={cart["icon-qty"]}
                              onClick={() => {
                                incrementCart(item.id, item.quantity);
                              }}
                            >
                              <AddIcon></AddIcon>
                            </div>
                            <div
                              className={cart["icon-qty"]}
                              onClick={() => {
                                if(item.quantity > 1) DecrementCart(item.id, item.quantity);
                              }}
                            >
                              <RemoveIcon></RemoveIcon>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={3}
                      item={true}
                      sx={{
                        padding: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRight: "1px solid var(--gray)",
                      }}
                    >
                      <p>
                        {convertVnd(
                          item.price * (1 - item.sale / 100) * item.quantity
                        )}{" "}
                        <span>₫</span>
                      </p>
                    </Grid>
                    <Grid
                      xs={1}
                      item={true}
                      sx={{
                        padding: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div onClick={() => handleDelete(item.id)}>
                        <DeleteIcon
                          sx={{
                            ":hover": {
                              color: "var(--blue)",
                            },
                            cursor: "pointer",
                          }}
                        ></DeleteIcon>
                      </div>
                    </Grid>
                  </Grid>
                ))}

                {/* footer */}
                <Grid
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"20px"}
                  display="flex"
                >
                  <div className={cart["box-coupon"]}>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Coupon code"
                        className={cart["input-coupon"]}
                      />
                    </div>
                    <div>
                      <button className="btn">Apply Coupon</button>
                    </div>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid item={true} xs={12} md={3} padding={"15px 20px"}>
              <div className={cart["cart-total"]}>
                <p className={cart.title}>Cart total</p>
                <Box
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"16px 0 0 0"}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <div className={cart.title}>Subtotal : </div>
                  <div
                    style={{
                      color: "var(--blue)",
                    }}
                  >
                    {" "}
                    {convertVnd(total)} ₫
                  </div>
                </Box>
                <Box
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"16px 0 0 0"}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <div className={cart.title}>Total : </div>
                  <div
                    style={{
                      color: "var(--blue)",
                    }}
                  >
                    {" "}
                    {convertVnd(total)} ₫
                  </div>
                </Box>
                <Box
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"16px 0 0 0"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Link href={"/checkout/Checkout"}>
                    <button className="btn">Checkout</button>
                  </Link>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
