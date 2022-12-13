import { useState, useEffect, Fragment } from "react";
import "../styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

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
        <link rel="icon" href="/logoicon.svg" width={100} height={100} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      <CustomCursor
        targets={["h2", "h3", "button"]}
        customClass="ring"
        dimensions={30}
        fill="#0000"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.9,
        }}
        targetOpacity={0.5}
      />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
