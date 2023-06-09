import * as React from "react";
import help from "../help/Help.module.css";
import { Box, Container, Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Banner from "../components/banner/Banner";

const Help = () => {
  const [active, setActive] = React.useState([]);
  const data = [
    {
      id: 1,
      title: "Purchases",
      content: [
        {
          id: 1,
          p: "I can't complete my purchase on the Steam Store",
        },
        {
          id: 2,
          p: "I need help with a Gift Card or Wallet Code",
        },
        {
          id: 3,
          p: "I have charges from Steam that I didn't make",
        },
        {
          id: 4,
          p: "View complete purchasing history",
        },
      ],
    },
    {
      id: 2,
      title: "My Games, Software, etc.",
      content: [
        {
          id: 1,
          p: "Counter-Strike: Global Offensive",
        },
        {
          id: 2,
          p: "Dota 2",
        },
        {
          id: 3,
          p: "PUBG: BATTLEGROUNDS",
        },
        {
          id: 4,
          p: "Grand Theft Auto V",
        },
      ],
    },
    {
      id: 3,
      title: "Endless games Winter Sale and Rewards",
      content: [
        {
          id: 1,
          p: "Help with Purchase Issues",
        },
        {
          id: 2,
          p: "Help with Gifting",
        },
        {
          id: 3,
          p: "View your Winter Sale badge progress",
        },
      ],
    },
    {
      id: 4,
      title: "My Account",
      content: [
        {
          id: 1,
          p: "Manage Account Details (email, phone, payment, country)",
        },
        {
          id: 2,
          p: "Phone Number",
        },
        {
          id: 3,
          p: "My account is stolen or hijacked",
        },
        {
          id: 4,
          p: "Help me sign in to my account",
        },
        {
          id: 5,
          p: "Data Related to Your elgames Account",
        },
      ],
    },
    {
      id: 5,
      title: "Endless games Client",
      content: [
        {
          id: 1,
          p: "Endless games Client Crashes",
        },
        {
          id: 2,
          p: "Endless games Can't Contact Login Servers",
        },
        {
          id: 3,
          p: "Endless games Cloud",
        },
        {
          id: 4,
          p: "Endless games Gift Card or Wallet Code",
        },
      ],
    },
    {
      id: 6,
      title: "I have charges from elgames that I didn't make",
      content: [
        { id: 1, p: "I have a elgames account" },
        {
          id: 2,
          p: "I am not a elgames user",
        },
        {
          id: 3,
          p: "I have a different payment issue",
        },
      ],
    },
  ];
  const handleToggle = (id) => {
    console.log(id);
    setActive((prev) => {
      const isActive = active.includes(id);
      if (isActive) {
        return active.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div>
      <Banner parent="Home" linkChildren="Help" />

      <section className={help["section-help"]}>
        <Container>
          <p className={help.title}>Help</p>
          <br />
          <br />
          <Box
            sx={{
              backgroundColor: "var(--dark-2)",
              padding: "20px 20px 40px 20px",
            }}
          >
            {data.map((item) => (
              <Box
                key={item.id}
                sx={{
                  padding: "20px 10px 20px 15px",
                  borderBottom: "1px solid var(--gray)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    ":hover": {
                      color: "var(--blue)",
                    },
                  }}
                  onClick={() => handleToggle(item.id)}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-title)",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    {item.title}
                  </p>
                  <KeyboardArrowDownIcon
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        color: "var(--blue)",
                      },
                      transform: active.includes(item.id)
                        ? "rotate(180deg)"
                        : "rotate(0)",
                    }}
                  />
                </Box>
                <Box
                  display={active.includes(item.id) ? "block" : "none"}
                  sx={{
                    marginTop: "16px",
                    color: "var(--gray)",
                    paddingLeft: "20px",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {item.content.map((i) => (
                      <li key={i.id}>{i.p}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Help;
