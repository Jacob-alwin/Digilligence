// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Services.module.scss";
import CountUp from "react-countup";
// import Size from "../utils/ScreenSize";
import { allservices } from "../../data/services";
import Link from "next/link";
import Particules from "../../common/Particules";

export default function Services() {
  // .box {
  //   width: 500px;
  //   height: 100px;
  //   border: solid 5px #000;
  //   border-color: #000 transparent transparent transparent;
  //   border-radius: 50%/100px 100px 0 0;
  // }

  return (
    <div className={styles.ServiceContainer}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
          Digilligence | Thane's Best Digital Marketing Agency | Services
        </title>
        <meta
          name="description"
          content="You're selecting Thane's Best Digital Marketing agency that provides premier result-oriented Digital Marketing services to clients across the globe."
        />
        <meta
          name="keywords"
          content="digital marketing agency in Mumbai, digital marketing company in Mumbai, digital marketing agencies in Mumbai, Digital Marketing Agency in Thane, Best Digital marketing agency in mumbai, The Intelligent Digital Marketing Agency"
        />
      </Head>

      {/* <Particules /> */}

      <section className={styles.Banner}>
        <div>
          <div>
            <h4>Services</h4>
            <h2 className="animate__animated animate__fadeInUp">
              <span> Crafting beautiful brands and engaging websites </span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Digilligence, the best Digital Marketing Agency in Mumbai, will
              build your brand for you. We cover the whole spectrum of Digital
              Marketing, from SEO optimization to Social Media Marketing and
              much more!
            </p>
            <Link href="/contact-the-best-digital-marketing-agency-in-thane-mumbai">
              <button className="animate__animated animate__fadeInUp animate__delay-1s">
                Start Your Project
              </button>
            </Link>
          </div>
          <Image
            src="/images/Banner/1.png" // Route of the image file
            height={1500} //Desired size with correct aspect ratio
            width={1500} // Desired size with correct aspect ratio
            alt="Your Name"
            data-aos="fade-right"
            priority
          />
        </div>

        <h4>
          We make the ordinary look extraordinary with our designs. Taking
          Creativity to the levels not seen before!
        </h4>

        <hr />
      </section>

      <section className={styles.mainservices}>
        {allservices.map((list, index) => (
          <div key={index}>
            <Link href={list.link}>
              <Image
                src={list.img} // Route of the image file
                height={1500} //Desired size with correct aspect ratio
                width={1500} // Desired size with correct aspect ratio
                alt={list.Head}
                data-aos="zoom-out-down"
              />
              <h6>{list.Head}</h6>
              <p>{list.paragraph}</p>
            </Link>
          </div>
        ))}
      </section>

      <section className={styles.belowbanner}>
        <b>Let's connect over a cup of coffe</b>
        <button type="" data-aos="zoom-in">
          Book your Free Coffee
        </button>
      </section>
    </div>
  );
}
