// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { clients, comments, service } from "../data/home";
// import Script from "next/script";
import CountUp from "react-countup";
// import Size from "../utils/ScreenSize";
import Carousel from "nuka-carousel";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Particules from "../common/Particules";

const img = ["/images/Banner/2.png", "/images/Banner/3.png"];
export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>
          Best Digital Marketing Agency in Thane, Mumbai | |Digilligence – The
          Digital Marketing Company
        </title>
        <link rel="icon" href="/logoicon.svg" width={5000} height={5000} />

        <meta
          name="description"
          content="Experience working with the Best Digital Marketing Agency in Mumbai,Thane specializing in Social Media Marketing & Mobile App Development Services. Book a Free Consultation call :+91 8655997455"
        />
        <meta
          name="keywords"
          content="digital marketing agency in Mumbai, digital marketing company in Mumbai, digital marketing agencies in Mumbai, Digital Marketing Agency in Thane, Best Digital marketing agency in mumbai, The Intelligent Digital Marketing Agency"
        />
      </Head>
      <Particules />

      <main>
        <Carousel
          animation="fade"
          autoplay={true}
          pauseOnHover={false}
          wrapAround={true}
          autoplayInterval={10000}
          // adaptiveHeight={true}
          withoutControls={true}
        >
          <section className={styles.Banner}>
            <div>
              <div>
                <div className={styles.head}>
                  <h2 className="animate__animated animate__fadeInUp">
                    Sky-Rocketing
                    <br />
                    <span> your Business to </span>
                    <br />
                    Digital heights
                  </h2>
                </div>

                <div
                  className={
                    styles.writing + " animate__animated animate__fadeInUp"
                  }
                >
                  Building Robust Marketing strategies for your Businesses &
                  Brands to deliver Best ROI with accelerated and sustainable
                  growth.
                </div>

                {/* <Typewriter
                options={{
                  strings: ["", "", ""],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
                <button className="animate__animated animate__fadeInUp animate__delay-1s">
                  <Link href="/about-us">Know More</Link>
                </button>
                <button className="animate__animated animate__fadeInUp animate__delay-2s">
                  <Link href="/contact-the-best-digital-marketing-agency-in-thane-mumbai">
                    Start Your Project
                  </Link>
                </button>
              </div>
              <div className={styles.imgholder}>
                <Image
                  // loading=""
                  src="/images/Banner/1.png" // Route of the image file
                  height={2000} //Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                  placeholder="blur"
                  blurDataURL="/images/logoicon.svg"
                  data-aos="fade-up"
                  className="animate__animated animate__jackInTheBox"
                  priority
                />
              </div>
            </div>
          </section>
          <section className={styles.Banner}>
            <div>
              <div>
                <div className={styles.head}>
                  <h2 className="animate__animated animate__fadeInUp">
                    <span>Bringing your </span>
                    Ideas
                    <br />
                    <span>to life with </span>
                    Next-gen
                    <br />
                    <span> Mobile Apps</span>
                  </h2>
                </div>

                <div
                  className={
                    styles.writing + " animate__animated animate__fadeInUp"
                  }
                >
                  One of Mumbai's Best Digital Marketing Agency that gives you
                  the best of both, Marketing & Development!
                </div>

                {/* <Typewriter
                options={{
                  strings: ["", "", ""],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
                <button className="animate__animated animate__fadeInUp animate__delay-1s">
                  <Link href="/about-us">Know More</Link>
                </button>
                <button className="animate__animated animate__fadeInUp animate__delay-2s">
                  <Link href="/contact-the-best-digital-marketing-agency-in-thane-mumbai">
                    Start Your Project
                  </Link>
                </button>
              </div>
              <div className={styles.imgholder}>
                <Image
                  // loading=""
                  src="/images/Banner/2.png" // Route of the image file
                  height={2000} //Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                  placeholder="blur"
                  blurDataURL="/images/logoicon.svg"
                  data-aos="fade-up"
                  className="animate__animated animate__jackInTheBox"
                  priority
                />
              </div>
            </div>
          </section>
          <section className={styles.Banner}>
            <div>
              <div>
                <div className={styles.head}>
                  <h2 className="animate__animated animate__fadeInUp">
                    <span>
                      Your Digital Partner for cooking
                      <br />
                      Marketing{" "}
                    </span>{" "}
                    Recipes
                    <br />
                    <span> to Designing </span> Mobile APPS
                  </h2>
                </div>

                <div
                  className={
                    styles.writing + " animate__animated animate__fadeInUp"
                  }
                >
                  We design & develop Hybrid Mobile Apps using Google's advanced
                  framework with the Best Mobile Application Development
                  services in Mumbai.
                </div>

                {/* <Typewriter
                options={{
                  strings: ["", "", ""],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
                <button className="animate__animated animate__fadeInUp animate__delay-1s">
                  <Link href="/about-us">Know More</Link>
                </button>
                <button className="animate__animated animate__fadeInUp animate__delay-2s">
                  <Link href="/contact-the-best-digital-marketing-agency-in-thane-mumbai">
                    Start Your Project
                  </Link>
                </button>
              </div>
              <div className={styles.imgholder}>
                <Image
                  // loading=""
                  src="/images/Banner/3.png" // Route of the image file
                  height={2000} //Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                  placeholder="blur"
                  blurDataURL="/images/logoicon.svg"
                  data-aos="fade-up"
                  className="animate__animated animate__jackInTheBox"
                  priority
                />
              </div>
            </div>
          </section>
        </Carousel>
        <section className={styles.we}>
          <hr />
          <h2>We are Digiligence</h2>

          <p>
            Ranked as One of Thane’s Best Digital Marketing Agency. We don’t
            just grow Businesses, we build Brands. Blending art and technology
            to turn an idea into action. We cover the whole spectrum of Digital
            Marketing, from SEO optimization to Social Media Marketing and much
            more!{" "}
          </p>
        </section>

        <section className={styles.service}>
          <h3>Our Services</h3>
          <hr />

          <ul>
            {service.map((list, index) => (
              <li key={index}>
                <div className={styles.back} data-aos="fade-up">
                  <Link href={list.link}>
                    <Image
                      src={list.img} // Route of the image file
                      height={2000} //Desired size with correct aspect ratio
                      width={2000} // Desired size with correct aspect ratio
                      alt="Your Name"
                    />
                  </Link>
                </div>
                <p>{list.name}</p>
              </li>
            ))}
          </ul>
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

        <section className={styles.clients}>
          <h2>Our Clients</h2>
          <hr />
          <div>
            <ul>
              {clients.map((list, index) => (
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
            <ul>
              {clients.map((list, index) => (
                <li key={index}>
                  {list.map((img, imgIndex) => (
                    <div key={imgIndex}>
                      <Image
                        src={img} // Route of the image file
                        height={500} // Desired size with correct aspect ratio
                        width={500} // Desired size with correct aspect ratio
                        alt="Your Name"
                      />
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.testimonial}>
          <h2>Here's what our clients have to say</h2>
          <hr />
          <div className={styles.carousel}>
            <Carousel
              slidesToShow={2}
              wrapAround={true}
              className={styles.LC}
              defaultControlsConfig={{
                nextButtonText: ">",
                prevButtonText: "<",
                // nextButtonClassName: { background: "red" },
                nextButtonStyle: {
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "3vw",
                  width: "4vw",
                  height: "4vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: ".6",
                },
                prevButtonStyle: {
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "3vw",
                  width: "4vw",
                  height: "4vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  opacity: ".6",
                },
                // prevButtonClassName:{styles.Controller} ,

                pagingDotsStyle: {
                  fill: "black",
                },
              }}
            >
              {comments.map((list, index) => (
                <div key={index}>
                  <div className={styles.comment}>
                    {/* <b>{list.comment}</b> */}
                    <p>{list.paragragh}</p>
                  </div>
                  <div className={styles.author}>
                    <Image
                      src={list.img}
                      height={1000}
                      width={1000}
                      alt="Your Name"
                    />
                    <div>
                      <b>{list.name}</b>
                      <p>{list.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <section className={styles.Mtestimonial}>
          <h2>Here's what our client says</h2>
          <hr />
          <div className={styles.carousel}>
            <Carousel
              slidesToShow={1}
              wrapAround={true}
              className={styles.MC}
              style={{ marginLeft: "10vw" }}
              defaultControlsConfig={{
                nextButtonText: ">",
                prevButtonText: "<",
                // nextButtonClassName: { background: "red" },
                nextButtonStyle: {
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "3vw",
                  width: "4vw",
                  height: "4vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: ".6",
                },
                prevButtonStyle: {
                  background: "rgba(0, 0, 0, 0.3)",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "3vw",
                  width: "4vw",
                  height: "4vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  opacity: ".6",
                },
                // prevButtonClassName:{styles.Controller} ,

                pagingDotsStyle: {
                  fill: "black",
                },
              }}
            >
              {comments.map((list, index) => (
                <div key={index}>
                  <div className={styles.comment}>
                    {/* <b>{list.comment}</b> */}
                    <p>{list.paragragh}</p>
                  </div>
                  <div className={styles.author}>
                    <Image
                      src={list.img}
                      height={1000}
                      width={1000}
                      alt="Your Name"
                    />
                    <div>
                      <b>{list.name}</b>
                      <p>{list.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section className={styles.project}>
          <hr />
          <h3>Projects we boast about</h3>
          <div>
            <ul>
              <li data-aos="fade-right">
                <Image
                  src="/images/Home/Project1/1.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project1/4.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
              <li data-aos="fade-up">
                <Image
                  src="/images/Home/Project1/8.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project1/5.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project1/2.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
              <li data-aos="fade-left">
                <Image
                  src="/images/Home/Project1/3.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project1/7.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
            </ul>
            <div data-aos="fade-left">
              <h6>Social Media</h6>
              <h2>Sea Garden, Goa</h2>
              <h5>From “Empty” to “Over Booked” -Sea Garden’s Success Story</h5>
              <a
                href="https://www.instagram.com/p/CV0Rbi1tTvv/"
                target={"_blank"}
                rel="noreferrer"
              >
                <button>View Success Story</button>
              </a>
            </div>
          </div>
          <div>
            <div data-aos="fade-right">
              <h6>Mobile App Development</h6>
              <h2>The Hours</h2>
              <h5>
                Wide range of Hotels & more in just one click -The Hours Mobile
                App
              </h5>
              <a
                href="https://drive.google.com/drive/folders/1UjKduoWcJ5_6h-YySpmEGkAsIWHfLQaw?usp=sharing"
                target={"_blank"}
                rel="noreferrer"
              >
                <button>View Portfolio</button>
              </a>
            </div>
            <ul data-aos="fade-left">
              <li>
                <Image
                  src="/images/Home/Project2/1.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project2/5.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li>
                {" "}
                <Image
                  src="/images/Home/Project2/2.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project2/6.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li>
                <Image
                  src="/images/Home/Project2/3.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project2/7.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li>
                <Image
                  src="/images/Home/Project2/4.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project2/8.png" // Route of the image file
                  height={2000} // Desired size with correct aspect ratio
                  width={2000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.projectM}>
          <hr />
          <h3>Projects we boast about</h3>
          <div>
            <div data-aos="fade-up">
              <h6>Social Media Marketing</h6>
              <h2>Sea Garden, Goa</h2>
              <h5>From “Empty” to “Over Booked” -Sea Garden’s Success Story</h5>
              <a
                href="https://www.instagram.com/p/CV0Rbi1tTvv/"
                target={"_blank"}
                rel="noreferrer"
              >
                <button>View Success Story</button>
              </a>
            </div>{" "}
            <Image
              data-aos="fade-up"
              src="/images/Home/Project1/2.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <Image
              data-aos="fade-up"
              src="/images/Home/Project1/3.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <span data-aos="fade-up">
              <Image
                src="/images/Home/Project1/5.png" // Route of the image file
                height={2000} // Desired size with correct aspect ratio
                width={2000} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              <Image
                src="/images/Home/Project1/8.png" // Route of the image file
                height={2000} // Desired size with correct aspect ratio
                width={2000} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </span>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project1/7.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
          </div>

          <div className={styles.Time}>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/4.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/3.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <div data-aos="fade-up">
              <h6>Mobile App Development</h6>
              <h2>The Hours</h2>
              <h5>
                Wide range of Hotels & more in just one click -The Hours Mobile
                App
              </h5>
              <a
                href="https://drive.google.com/drive/folders/1UjKduoWcJ5_6h-YySpmEGkAsIWHfLQaw?usp=sharing"
                target={"_blank"}
                rel="noreferrer"
              >
                <button>View Portfolio</button>
              </a>{" "}
            </div>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/7.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <span data-aos="fade-up">
              <Image
                src="/images/Home/Project2/1.png" // Route of the image file
                height={2000} // Desired size with correct aspect ratio
                width={2000} // Desired size with correct aspect ratio
                alt="Your Name"
              />{" "}
              <Image
                src="/images/Home/Project2/2.png" // Route of the image file
                height={2000} // Desired size with correct aspect ratio
                width={2000} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </span>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/5.png" // Route of the image file
              height={2000} // Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
          </div>
        </section>

        <section className={styles.contact}>
          <div>
            <hr />
            <h3>Contact us</h3>
            <ul data-aos="fade-left">
              <a href="tel:+91-865-599-7455" target={"_blank"} rel="noreferrer">
                <li>
                  <Image
                    src="/images/Home/contact/icon/phone.png" // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt=" "
                  />
                  <p>+91 8655997455</p>
                </li>
              </a>
              <a
                href="https://maps.app.goo.gl/VQtnVp8mtZQbM29j7?g_st=ic"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>
                  <Image
                    src="/images/Home/contact/icon/map.png" // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt=" "
                  />
                  <p>
                    Suite - 409, Oracle Business Hub, Ambica Nagar Bustop,
                    opposite Kalpataru Prime, Wagle Industrial Estate, Thane,
                    Maharashtra 400604
                  </p>
                </li>
              </a>
              <a
                href="mailto:biz@digilligence.in"
                target={"_blank"}
                rel="noreferrer"
              >
                <li>
                  <Image
                    src="/images/Home/contact/icon/mail.png" // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt=" "
                  />
                  <p>biz@digilligence.in</p>
                </li>
              </a>
            </ul>
          </div>
          <div>
            <hr />
            <h3>Connect with us</h3>
            <ul data-aos="fade-right">
              <li>
                <a
                  href="https://www.facebook.com/digilligence.in"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/Home/contact/socialmedia/facebook.png" // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt=" "
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/digilligence/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/Home/contact/socialmedia/instagram.png" // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt=" "
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/digilligence"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/Home/contact/socialmedia/linkedin.png" // Route of the image file
                    height={1000} // Desired size with correct aspect ratio
                    width={1000} // Desired size with correct aspect ratio
                    alt=" "
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="bottombanner">
          <h4 data-aos="zoom-out">All Big things start small</h4>
          <b>Let's connect over a cup of coffe</b>
          <button type="" data-aos="zoom-in">
            <Link href="/contact-the-best-digital-marketing-agency-in-thane-mumbai">
              Book your Free Coffee
            </Link>
          </button>
        </section>
      </main>
    </div>
  );
}
