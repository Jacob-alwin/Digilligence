import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Clients.module.scss";
import { serve, grew, social, develop, Ui } from "../../data/clients";

import Link from "next/link";

// import Size from "../utils/ScreenSize";

export default function Clients() {
  return (
    <div className={styles.HomeContainer}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
          Digilligence | Best Digital Marketing Agency in Thane | Clients
        </title>
        <meta
          name="description"
          content="With a wide experience across niches and a proven track record, Digilligence boasts to be one of Thane's Best Digital Marketing Agencies with a wide range of clients."
        />
        <meta
          name="keywords"
          content="digital marketing agency in Mumbai, digital marketing company in Mumbai, digital marketing agencies in Mumbai, Digital Marketing Agency in Thane, Best Digital marketing agency in mumbai, The Intelligent Digital Marketing Agency"
        />
      </Head>
      <main>
        <section className={styles.serve}>
          <h2>INDUSTRIES WE SERVE</h2>
          <ul>
            {serve.map((list, index) => (
              <li key={index}>
                <div>
                  <Image
                    src={list.img} // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt="Your Name"
                    priority
                  />
                </div>

                <p>{list.caption}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.grew}>
          <h2>START-UPS WE GREW WITH</h2>
          <ul>
            {grew.map((list, index) => (
              <li key={index}>
                <Image
                  src={list} // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.market}>
          <h2>MOBILE APP & WEBSITE DEVELOPMENT</h2>
          <ul>
            {develop.map((list, index) => (
              <li key={index}>
                {list.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <Image
                      src={img} // Route of the image file
                      height={1000} // Desired size with correct aspect ratio
                      width={1000} // Desired size with correct aspect ratio
                      alt="Your Name"
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.grid}>
          <h2>UX/UI DESIGNING</h2>
          <ul>
            <li></li>
            {social.map((list, index) => (
              <li key={index}>
                <Image
                  src={list} // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.belowbanner}>
          <h4 data-aos="zoom-out">All Big things start</h4>
          <b>Let's connect over a cup of coffe</b>
          <button type="" data-aos="zoom-in">
          <Link href="/contact-the-best-digital-marketing-agency-in-thane-mumbai">
              Book your Free Coffee
            </Link>          </button>
        </section>
      </main>
    </div>
  );
}
