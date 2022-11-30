// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Services.module.scss";
// import { clients, comments, service } from "../../data/image";
// import Script from "next/script";
import CountUp from "react-countup";
// import 'react-select/dist/react-select.css'

// import Size from "../utils/ScreenSize";

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <Head>
        <title>Digiligence</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logoicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        <script>AOS.init();</script>
      </Head>

      <nav className={styles.nav}>
        <Image
          src="/./images/logo.svg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <div>
          <h6>Clients</h6>
          <h6>Contact</h6>
          <span></span>
        </div>
      </nav>
      <main>
        <section className={styles.Banner}>
          <div>
            <div>
              <h4>About Us</h4>
              <h2 className="animate__animated animate__fadeInUp">
                <span> We Are Digiligence </span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Any organization’s strength lies in the employees and rightly
                so, Team Digilligence is a power packed squad of Quaint Content
                Writers, Artistic Graphic Designers, experienced Content
                Strategists, technically sound UX/UI Designers, Skilled Website
                & Application Developers.
              </p>

              <button className="animate__animated animate__fadeInUp animate__delay-1s">
                Start Your Project
              </button>
            </div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={144} //Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
          </div>

          <h4>
            We make the ordinary look extraordinary with our designs. Taking
            Creativity to the levels not seen before!
          </h4>
        </section>
        <section className={styles.process}>
          <h5>Our Process</h5>
          <div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={144} //Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
            <h6>Identify the Target Audience</h6>
          </div>
        </section>
        <section className={styles.we}>
          <Image
            src="/./images/Banner/1.png" // Route of the image file
            height={144} //Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
            className="animate__animated animate__jackInTheBox"
          />
          <div>
            <h2>
              Team Digilligence believes in working Smart & putting in the
              productive hours to deliver result-driven
            </h2>
            <hr />
            <p>
              We ensure that you get the best ROI by achieving the results you
              desire for your Brand. We believe in numbers, which is why we are
              constantly on the hunt for delivering results for our clients.
            </p>
            <p>
              We believe in staying up to date with trending, interactive,
              innovative content we ensure that the audience gets hooked to your
              brand right from the beginning! We establish your brand in the
              market by creating an aura of regality around your brand, giving
              you an edge over your competitors and bringing you to the top of
              your game, ensuring that you stay there, on the top!
            </p>
          </div>
        </section>

        <section className={styles.we}>
          <div>
            <h2>
              Team Digilligence believes in working Smart & putting in the
              productive hours to deliver result-driven
            </h2>
            <hr />
            <p>
              We ensure that you get the best ROI by achieving the results you
              desire for your Brand. We believe in numbers, which is why we are
              constantly on the hunt for delivering results for our clients.
            </p>
            <p>
              We believe in staying up to date with trending, interactive,
              innovative content we ensure that the audience gets hooked to your
              brand right from the beginning! We establish your brand in the
              market by creating an aura of regality around your brand, giving
              you an edge over your competitors and bringing you to the top of
              your game, ensuring that you stay there, on the top!
            </p>
          </div>
          <Image
            src="/./images/Banner/1.png" // Route of the image file
            height={144} //Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
            className="animate__animated animate__jackInTheBox"
          />
        </section>

        <section className={styles.do}>
          <div>
            <hr />
            <h5>Our Process</h5>
            <hr />
          </div>
          <div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={144} //Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
            <h6>Identify the Target Audience</h6>
          </div>
        </section>

        <section className={styles.progress}>
          <ul>
            <li>
              <h3>
                <CountUp
                  start={0}
                  end={200}
                  duration={2}
                  separator=""
                  decimals={0}
                  decimal=","
                  suffix=" +"
                  enableScrollSpy={true}
                />
              </h3>

              <h6>Projects Completed</h6>
            </li>
            <hr />
            <li>
              <h3>
                {" "}
                <CountUp
                  start={0}
                  end={100}
                  duration={2.5}
                  separator=""
                  decimals={0}
                  decimal=","
                  suffix=" +"
                  enableScrollSpy={true}
                />
              </h3>
              <h6>Clients across the globe</h6>
            </li>
            <hr />
            <li>
              <h3>
                {" "}
                <CountUp
                  start={0}
                  end={200}
                  duration={3}
                  separator=""
                  decimals={0}
                  decimal=","
                  suffix=" +"
                  enableScrollSpy={true}
                />
              </h3>
              <h6>Digital Consultations</h6>
            </li>
            <hr />
            <li>
              <h3>
                <CountUp
                  start={0}
                  end={50}
                  duration={1.5}
                  separator=""
                  decimals={0}
                  decimal=","
                  suffix=" +"
                  enableScrollSpy={true}
                />
              </h3>
              <h6>Start-Ups kick started</h6>
            </li>
          </ul>
        </section>

        <section className={styles.Banner}>
          <div>
            <div>
              <h4>Branding & Designing</h4>
              <h2 className="animate__animated animate__fadeInUp">
                <span> We Are Digiligence </span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Any organization’s strength lies in the employees and rightly
                so, Team Digilligence is a power packed squad of Quaint Content
                Writers, Artistic Graphic Designers, experienced Content
                Strategists, technically sound UX/UI Designers, Skilled Website
                & Application Developers.
              </p>

              <button className="animate__animated animate__fadeInUp animate__delay-1s">
                View Portfolio
              </button>
            </div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={144} //Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
          </div>

          <h4>
            We make the ordinary look extraordinary with our designs. Taking
            Creativity to the levels not seen before!
          </h4>
        </section>

        <hr />

        <section className={styles.services}>
          <div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={144} //Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
            <h6>Identify the Target Audience</h6>
          </div>
        </section>

        <section className={styles.belowbanner}>
          <b>Let's connect over a cup of coffe</b>
          <button type="" data-aos="zoom-in">
            Book your Free Coffee
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <Image
            src="/./images/logo.svg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
          <p>
            Thane's Best Digital Marketing agency that believes in taking your
            ideas to the pinnacle of success.
          </p>
        </div>

        <ul>
          <li>Services</li>
          <li>Social Media Marketing</li>
          <li>Mobile Development</li>
          <li>Branding and Designing</li>
          <li>Website Development</li>
          <li>UI/UX Designing</li>
          <li>Search Engine Optimization </li>
        </ul>
        <ul>
          <li>Quick Links</li>
          <li>Our Work</li>
          <li>About Us</li>
          <li>Services</li>
          <li>
            Careers <span>We're hiring</span>
          </li>
        </ul>
        <ul>
          <li>Reach us</li>
          <li>
            <Image
              src="/./images/footericons/email.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            biz@digillence.in
          </li>
          <li>
            <Image
              src="/./images/footericons/location.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            +91 86559974455
          </li>
          <li>
            <Image
              src="/./images/footericons/phone.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            +91 86559974455
          </li>
        </ul>
      </footer>
      <div className={styles.bottom}>2022 , Digiligence copyright</div>
    </div>
  );
}
