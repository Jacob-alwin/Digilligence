import { useState, useEffect, Fragment } from "react";
import "../styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [theme, setTheme] = useState("light");
  return (
    <Fragment>
      <Head>
        <title>Digiligence</title>
        <meta
          name="description"
          content="Digillence is an Digital Marketing Agency"
        />
        <link rel="icon" href="/logoicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
