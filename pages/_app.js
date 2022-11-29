import { useState } from 'react';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("light");
  return <Component {...pageProps} />
}

export default MyApp
