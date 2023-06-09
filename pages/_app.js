import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/200.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/500.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";
import "react-toastify/dist/ReactToastify.css";
import "./components/load/LoadAnimation.css";
import Layout from "./components/Layout";
import { StyledEngineProvider } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Endless Games</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
    </Provider>
  );
}

export default MyApp;
