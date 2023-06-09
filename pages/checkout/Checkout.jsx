import { Container, Box, Grid, FormControlLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import checkout from "../checkout/Checkout.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { app } from "../../lib/firebase";
import { selectUser } from "../../store/feature/auth/auth.slice";
import Swal from "sweetalert2";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import Banner from "../components/banner/Banner";

const Checkout = () => {
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

  const total = carts.reduce(
    (total, item) =>
      (total += item.price * (1 - item.sale / 100) * item.quantity),
    0
  );

  const deleteAll = async (id) => {
    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const clearCart = () => {
    carts.forEach((item) => deleteAll(item.id));
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  const date = () => {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      h = "" + d.getHours(),
      m = "" + d.getMinutes(),
      s = "" + d.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (h.length < 2) h = "0" + h;
    if (m.length < 2) m = "0" + m;
    if (s.length < 2) day = "0" + s;

    return [day, month, year].join("-") + " " + [h, m, s].join(":");
  };

  if (carts.length == 0) {
    return (
      <div className={checkout["no-game"]}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "var(--font-title)",
            }}
          >
            No game {":("}
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
      <Banner parent="Cart" linkChildren="Checkout" />

      <section className={checkout["section-checkout"]}>
        <Container>
          <Grid container width={"100%"}>
            <Grid
              item={true}
              xs={12}
              lg={6}
              padding={"16px"}
              order={{
                xs: 1,
                lg: 0,
              }}
            >
              <div className={checkout["box-left"]}>
                <p className={checkout.title}>Billing details</p>
                <br />
                <form
                  action=""
                  className="form"
                  onSubmit={handleSubmit((data) => {
                    Swal.fire({
                      title: "Do you want to payment ?",
                      showDenyButton: true,
                      confirmButtonText: "Yes",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire("OK!", "", "success");
                        const reference = collection(
                          getFirestore(app),
                          "checkout"
                        );
                        const bill = {
                          uid: user == null ? null : user.uid,
                          infor: data,
                          bill: carts,
                          date: date(),
                          total: total,
                        };

                        addDoc(reference, bill).catch(console.error);
                        clearCart();
                      }
                    });
                  })}
                >
                  <div className="box-form">
                    <div className="form-control">
                      <p>First name</p>
                      <input
                        type="text"
                        className="input"
                        name="firstname"
                        placeholder="First name"
                        {...register("fname", { required: true })}
                      />
                      {errors.fname && (
                        <div className="form-message">
                          This field is required
                        </div>
                      )}
                    </div>

                    <div className="form-control">
                      <p>Last name</p>
                      <input
                        type="text"
                        className="input"
                        name="lastname"
                        placeholder="Last name"
                        {...register("lname", { required: true })}
                      />
                      {errors.lname && (
                        <div className="form-message">
                          This field is required
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-control">
                    <p>{"Town / City"}</p>
                    <input
                      type="text"
                      className="input"
                      name="city"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                    {errors.city && (
                      <div className="form-message">This field is required</div>
                    )}
                  </div>

                  <div className="form-control">
                    <p>ZIP Code</p>
                    <input
                      type="text"
                      className="input"
                      name="zipcode"
                      placeholder="ZIP Code"
                      {...register("zipcode", {
                        required: "Please enter this field!",
                        pattern: {
                          value: /^\d{5}(?:[-\s]\d{4})?$/,
                          message: "This field must be zip code",
                        },
                      })}
                    />
                    {errors.zipcode && (
                      <div className="form-message">
                        {errors.zipcode.message}
                      </div>
                    )}
                  </div>

                  <div className="form-control">
                    <p>Phone</p>
                    <input
                      type="text"
                      className="input"
                      name="phone"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Please enter this field!",
                        pattern: {
                          value:
                            /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                          message: "This field must be phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="form-message">{errors.phone.message}</div>
                    )}
                  </div>

                  <div className="form-control">
                    <p>Email address</p>
                    <input
                      type="text"
                      className="input"
                      name="email"
                      placeholder="Email address"
                      {...register("email", {
                        required: "Please enter this field!",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "This field must be email!",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="form-message">{errors.email.message}</div>
                    )}
                  </div>

                  <Box
                    display={"flex"}
                    gap={"16px"}
                    padding={"10px"}
                    border={"1px solid var(--gray)"}
                    flexDirection={"column"}
                    width={"100%"}
                  >
                    <div className="form-control">
                      <p>Visa/MasterCard number</p>
                      <input
                        type="text"
                        className="input"
                        name="visa"
                        placeholder="Visa/MasterCard"
                        {...register("visanumber", {
                          required: "Please enter this field!",
                          pattern: {
                            value:
                              /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                            message: "This field must be visa number!",
                          },
                        })}
                      />
                      {errors.visanumber && (
                        <div className="form-message">
                          {errors.visanumber.message}
                        </div>
                      )}
                    </div>

                    <div className="box-form">
                      <div className="form-control">
                        <p>Month</p>
                        <input
                          type="text"
                          className="input"
                          name="firstname"
                          placeholder="Month"
                          {...register("month", {
                            required: "Please enter this field!",
                            pattern: {
                              value: /^(0?[1-9]|1[012])$/,
                              message: "This field must be month!",
                            },
                          })}
                        />
                        {errors.month && (
                          <div className="form-message">
                            {errors.month.message}
                          </div>
                        )}
                      </div>

                      <div className="form-control">
                        <p>Years</p>
                        <input
                          type="text"
                          className="input"
                          name="lastname"
                          placeholder="Years"
                          {...register("year", {
                            required: "Please enter this field!",
                            pattern: {
                              value: /^\d{4}$/,
                              message: "This field must be month!",
                            },
                          })}
                        />
                        {errors.year && (
                          <div className="form-message">
                            {errors.year.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </Box>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "var(--blue)",
                          }}
                          {...register("check", { required: true })}
                        />
                      }
                      label="I have read and agree to the website terms and conditions."
                    />
                    {errors.check && (
                      <div className="form-message">
                        you do not agree to our terms
                      </div>
                    )}
                  </div>
                  <button
                    className="btn"
                    style={{
                      width: "100%",
                    }}
                  >
                    Payment
                  </button>
                </form>
              </div>
            </Grid>
            <Grid
              item={true}
              xs={12}
              lg={6}
              padding={"16px"}
              order={{
                xs: 0,
                lg: 1,
              }}
            >
              <div className={checkout["box-right"]}>
                <p className={checkout.title}>Your order</p>
                <br />
                <div className={checkout["box-order"]}>
                  <div className={checkout["card-order"]}>
                    <Grid container>
                      <Grid
                        item={true}
                        xs={8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        <strong>Product</strong>
                      </Grid>
                      <Grid
                        item={true}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                        }}
                      >
                        <strong>Subtotal</strong>
                      </Grid>
                    </Grid>
                  </div>

                  {/* card */}
                  {carts.map((item) => (
                    <div className={checkout["card-order"]} key={item.id}>
                      <Grid container>
                        <Grid
                          item={true}
                          xs={8}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px",
                          }}
                        >
                          <img
                            src={item.img}
                            alt="img-game"
                            style={{
                              maxWidth: "40%",
                              verticalAlign: "midddle",
                            }}
                          />

                          <p>
                            {item.name}{" "}
                            <strong
                              style={{
                                color: "var(--blue)",
                              }}
                            >
                              x {item.quantity}
                            </strong>
                          </p>
                        </Grid>
                        <Grid
                          item={true}
                          xs={4}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px",
                          }}
                        >
                          {convertVnd(
                            item.quantity * item.price * (1 - item.sale / 100)
                          )}{" "}
                          đ
                        </Grid>
                      </Grid>
                    </div>
                  ))}

                  <div className={checkout["card-order"]}>
                    <Grid container>
                      <Grid
                        item={true}
                        xs={8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        <strong>SUBTOTAL</strong>
                      </Grid>
                      <Grid
                        item={true}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                        }}
                      >
                        <strong>{convertVnd(total)} đ</strong>
                      </Grid>
                    </Grid>
                  </div>

                  <div className={checkout["card-order"]}>
                    <Grid container>
                      <Grid
                        item={true}
                        xs={8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        <strong>TOTAL</strong>
                      </Grid>
                      <Grid
                        item={true}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                        }}
                      >
                        <strong>{convertVnd(total)} đ</strong>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
