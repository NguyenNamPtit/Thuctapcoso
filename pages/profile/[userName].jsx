import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import profile from "../profile/Profile.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/feature/auth/auth.slice";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import Banner from "../components/banner/Banner";

const Profile = () => {
  const user = useSelector(selectUser);
  const [bill, setBill] = useState([]);
  const checkoutRef = collection(getFirestore(app), "checkout");
  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",") + " đ";
  };
  useEffect(() => {
    const q = query(checkoutRef);
    const pay = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setBill(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => pay();
  }, []);

  return (
    <div>
      <Banner parent="Profile" linkChildren={user && user.displayName} />

      <section className={profile["section-profile"]}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p className={profile.title}>My profile</p>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <div className="form-control">
                <p>Email:</p>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input"
                  value={user && user.email}
                  readOnly
                />
              </div>
              <div className="form-control">
                <p>Name:</p>
                <input
                  type="text"
                  placeholder="Your Password"
                  className="input"
                  value={user && user.displayName}
                  readOnly
                />
              </div>
            </form>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p className={profile.title}>Purchase history </p>

            <Box
              textAlign={"center"}
              width={"100%"}
              border={"1px solid var(--gray)"}
            >
              <Grid container>
                <Grid item={true} padding={"10px"} xs={3}>
                  Date
                </Grid>
                <Grid item={true} padding={"10px"} xs={6}>
                  Game
                </Grid>
                <Grid item={true} padding={"10px"} xs={3}>
                  Total
                </Grid>
              </Grid>

              {bill.map((i, index) => (
                <Grid
                  key={index}
                  container
                  sx={{
                    borderTop: "1px solid var(--gray)",
                  }}
                >
                  <Grid
                    item={true}
                    padding={"10px"}
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {i.date}
                  </Grid>
                  <Grid item={true} padding={"10px"} xs={6}>
                    {i.bill.map((item) => (
                      <Box key={item && item.id}>
                        <strong>{item && item.name}</strong> {"x"}{" "}
                        <span
                          style={{
                            color: "var(--blue)",
                          }}
                        >
                          {item && item.quantity}
                        </span>
                      </Box>
                    ))}
                  </Grid>
                  <Grid
                    item={true}
                    padding={"10px"}
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i.total && convertVnd(i.total)}
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Profile;
