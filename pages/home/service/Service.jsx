import { Container, Grid } from "@mui/material";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import React from "react";

const Service = () => {
  return (
    <main>
      <Container
        sx={{
          backgroundColor: "var(--dark)",
          color: "white",
          fontFamily: "var(--font-default)",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center",
            gap: "32px",
          }}
        >
          <Grid padding={"30px 60px"}>
            <Grid>
              <PaymentOutlinedIcon
                sx={{
                  fontSize: "70px",
                  color: "var(--blue)",
                  cursor: "pointer",
                  ":hover": {
                    opacity: 0.6,
                  },
                }}
              ></PaymentOutlinedIcon>
            </Grid>
            <Grid
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "8px",
                marginTop: "16px",
              }}
            >
              Secure Payment
            </Grid>
            <Grid>Accept VISA & Master Card</Grid>
          </Grid>
          <Grid padding={"30px 60px"}>
            <Grid>
              <CurrencyExchangeOutlinedIcon
                sx={{
                  fontSize: "70px",
                  color: "var(--blue)",
                  cursor: "pointer",
                  ":hover": {
                    opacity: 0.6,
                  },
                }}
              ></CurrencyExchangeOutlinedIcon>
            </Grid>
            <Grid
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "8px",
                marginTop: "16px",
              }}
            >
              Money Guarantee
            </Grid>
            <Grid>100% Money Back Guarantee</Grid>
          </Grid>
          <Grid padding={"30px 60px"}>
            <Grid>
              <SupportAgentOutlinedIcon
                sx={{
                  fontSize: "70px",
                  color: "var(--blue)",
                  cursor: "pointer",
                  ":hover": {
                    opacity: 0.6,
                  },
                }}
              ></SupportAgentOutlinedIcon>
            </Grid>
            <Grid
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "8px",
                marginTop: "16px",
              }}
            >
              Online Support
            </Grid>
            <Grid>24/7 Online Support Day</Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Service;
