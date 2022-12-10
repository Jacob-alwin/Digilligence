// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Services.module.scss";
import CountUp from "react-countup";
// import Size from "../utils/ScreenSize";
import { allservices } from "../../data/services";
import Link from "next/link";

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
      <section className={styles.Banner}>
        <div>
          <div>
            <h4>Services</h4>
            <h2 className="animate__animated animate__fadeInUp">
              <span> Social Media Marketing </span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Any organization’s strength lies in the employees and rightly so,
              Team Digilligence is a power packed squad of Quaint Content
              Writers, Artistic Graphic Designers, experienced Content
              Strategists, technically sound UX/UI Designers, Skilled Website &
              Application Developers.
            </p>

            <button className="animate__animated animate__fadeInUp animate__delay-1s">
              Start Your Project
            </button>
          </div>
          <Image
            src="/./images/Banner/1.png" // Route of the image file
            height={1500} //Desired size with correct aspect ratio
            width={1500} // Desired size with correct aspect ratio
            alt="Your Name"
            data-aos="fade-right"
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
