import { Container, Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--dark)",
        color: "white",
        width: "100%",
        paddingBottom: "100px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "var(--font-default)",
        }}
      >
        <img
          src="https://res.cloudinary.com/drijkcrst/image/upload/v1672137456/Endless%20Games/404_300x300_crop_center_tss4ql.webp"
          alt="404"
          style={{
            width: "240px",
            verticalAlign: "middle",
            margin: "0 auto",
          }}
        />

        <Box
          sx={{
            maxWidth: "300px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-title)",
              fontWeight: "600",
              fontSize: "32px",
            }}
          >
            Not
            <span
              style={{
                color: "var(--blue)",
              }}
            >
              {" "}
              Found
            </span>
          </p>
          <p
            style={{
              color: "var(--gray)",
            }}
          >
            Sorry but the page you are looking for does not exist, have been
            removed, name changed or is temporarity unavailable.
          </p>
          <Link
            href={"/"}
            style={{
              color: "var(--blue)",
              borderBottom: "1px solid var(--blue)",
              paddingBottom: "2px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <strong>Go home</strong> <HomeIcon></HomeIcon>
            </div>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default NotFound;
