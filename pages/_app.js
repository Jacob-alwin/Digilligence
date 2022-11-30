import { useState, useEffect } from "react";
import "../styles/globals.scss";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  },[]);

  const [theme, setTheme] = useState("light");
  return <Component {...pageProps} />;
}

export default MyApp;
