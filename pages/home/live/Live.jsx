import { Box, Container, Grid, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import live from "../live/Live.module.css";

const Live = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const scroll = {
    width: "100%",
    overflow: "auto",
    height: "100%",
  };
  return (
    <div className={live["container-live"]}>
      <img
        src="/img/bg-live.jpg"
        alt="bg-live"
        style={{
          width: "100%",
          verticalAlign: "middle",
          filter: "brightness(60%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          zIndex: "2",
        }}
      >
        <Grid>
          <PlayCircleOutlineRoundedIcon
            onClick={handleOpen}
            sx={{
              cursor: "pointer",
              fontSize: { xs: "50px", md: "100px" },
              transition: "all 0.2s linear",
              ":hover": {
                color: "var(--blue)",
              },
            }}
          ></PlayCircleOutlineRoundedIcon>
        </Grid>
        <Grid
          fontSize={{ xs: "24px", sm: "36px" }}
          marginTop={{ xs: "15px", sm: "30px" }}
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: "700",
          }}
        >
          What Live stream
        </Grid>
        <Modal open={open} onClose={handleClose} sx={scroll}>
          <Box className={live.modal}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <Grid style={{ cursor: "pointer" }} onClick={handleClose}>
                <CloseIcon
                  sx={{
                    ":hover": {
                      color: "var(--blue)",
                    },
                  }}
                ></CloseIcon>
              </Grid>
            </Box>
            <Box
              width={{
                xs: "350px",
                sm: "500px",
                md: "750px",
                lg: "1000px",
              }}
              height={{
                xs: "200px",
                sm: "300px",
                md: "500px",
                lg: "600px",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3FwLWwWvNes?start=10"
                title="God of war"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  padding: 0,
                  border: 0,
                }}
              ></iframe>
            </Box>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default Live;
