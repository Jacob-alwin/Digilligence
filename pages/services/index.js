// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Services.module.scss";
import CountUp from "react-countup";
// import Size from "../utils/ScreenSize";

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

        <hr />
      </section>

      <section className={styles.process}>
        <hr />
        <h5>Our Process</h5>
        <div>
          <div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={50} //Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
            <h6>Identify the Target Audience</h6>
          </div>
          <div>
            <Image
              src="/./images/Banner/1.png" // Route of the image file
              height={50} //Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
            <h6>Strategizing & Developing a Plan</h6>
          </div>
        </div>
        <hr />
      </section>

      <section className={styles.blog}>
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
            market by creating an aura of regality around your brand, giving you
            an edge over your competitors and bringing you to the top of your
            game, ensuring that you stay there, on the top!
          </p>
        </div>
      </section>

      <section className={styles.blog}>
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
            market by creating an aura of regality around your brand, giving you
            an edge over your competitors and bringing you to the top of your
            game, ensuring that you stay there, on the top!
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
          <h5>What can we do for your business</h5>
          <hr />
        </div>
        <div>
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
        </div>
      </section>

      <section className={styles.progress}>
        <div>
          <hr />
          <h5>Our Strength</h5>
          <hr />
        </div>
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
            <h6> Clients across the globe</h6>
          </li>
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

      <section className={styles.project}>
        <h5>Projects</h5>
        <div>
          <div>
            <h4>Branding & Designing</h4>
            <h2 className="animate__animated animate__fadeInUp">
              <span> We Are Digiligence </span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Any organization’s strength lies in the employees and rightly so,
              Team Digilligence is a power packed squad of Quaint Content
              Writers, Artistic Graphic Designers, experienced Content
              Strategists, technically sound UX/UI Designers, Skilled Website &
              Application Developers.
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
          <h6>Social Media Marketing</h6>
        </div>
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
