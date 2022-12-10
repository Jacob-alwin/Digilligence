// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { clients, comments, service } from "../data/home";
// import Script from "next/script";
import CountUp from "react-countup";

// import Size from "../utils/ScreenSize";

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <main>
        <section className={styles.Banner}>
          <div>
            <div>
              <h2 className="animate__animated animate__fadeInUp">
                Sky-Rocketing
                <span> your Business to </span>
                Digital heights
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Building Robust Marketing strategies for your Businesses &
                Brands to deliver Best ROI with accelerated and sustainable
                growth.
              </p>
              <button className="animate__animated animate__fadeInUp animate__delay-1s">
                Know More
              </button>
              <button className="animate__animated animate__fadeInUp animate__delay-2s">
                Start Your Project
              </button>
            </div>
            <Image
              // loader="/images/Banner/1.png"
              src="/images/Banner/1.png" // Route of the image file
              height={2000} //Desired size with correct aspect ratio
              width={2000} // Desired size with correct aspect ratio
              alt="Your Name"
              placeholder="blur"
              blurDataURL="/images/logoicon.svg"
              className="animate__animated animate__jackInTheBox"
              priority
            />
          </div>
        </section>
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
                  <Image
                    src={list.img} // Route of the image file
                    height={2000} //Desired size with correct aspect ratio
                    width={2000} // Desired size with correct aspect ratio
                    alt="Your Name"
                  />
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
          <h2>Here's what our client says</h2>
          <hr />
          <div className={styles.carousel}>
            {comments.map((list, index) => (
              <div key={index}>
                <div className={styles.comment}>
                  <b>{list.comment}</b>
                  <p>{list.paragragh}</p>
                </div>
                <div className={styles.author}>
                  <Image
                    src={list.img}
                    height={500}
                    width={500}
                    alt="Your Name"
                  />
                  <div>
                    <b>{list.name}</b>
                    <p>{list.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.project}>
          <hr />
          <h3>Project We Boast about</h3>
          <div>
            <ul>
              <li data-aos="fade-right">
                <Image
                  src="/images/Home/Project1/1.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project1/4.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li data-aos="fade-up">
                {" "}
                <Image
                  src="/images/Home/Project1/8.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project1/5.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project1/2.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li data-aos="fade-left">
                <Image
                  src="/images/Home/Project1/3.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project1/7.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
            </ul>
            <div data-aos="fade-left">
              <h6>Social Media</h6>
              <h2>Sea Garden, Goa</h2>
              <h5>From “Empty” to “Over Booked” -Sea Garden’s Success Story</h5>
              <button>View Success Story</button>
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
              <button>View Portfolio</button>
            </div>
            <ul data-aos="fade-left">
              <li>
                <Image
                  src="/images/Home/Project2/1.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project2/5.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li>
                {" "}
                <Image
                  src="/images/Home/Project2/2.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
                <Image
                  src="/images/Home/Project2/6.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li>
                <Image
                  src="/images/Home/Project2/3.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project2/7.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
              <li>
                <Image
                  src="/images/Home/Project2/4.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
                <Image
                  src="/images/Home/Project2/8.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />{" "}
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.projectM}>
          <hr />
          <h3>Project We Boast about</h3>
          <div>
            <div data-aos="fade-up">
              <h6>Social Media</h6>
              <h2>Sea Garden, Goa</h2>
              <h5>From “Empty” to “Over Booked” -Sea Garden’s Success Story</h5>
              <button>View Success Story</button>
            </div>{" "}
            <Image
              data-aos="fade-up"
              src="/images/Home/Project1/2.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <Image
              data-aos="fade-up"
              src="/images/Home/Project1/3.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <span data-aos="fade-up">
              <Image
                src="/images/Home/Project1/5.png" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              <Image
                src="/images/Home/Project1/8.png" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </span>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project1/7.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
          </div>

          <div className={styles.Time}>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/4.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/3.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <div data-aos="fade-up">
              <h6>Mobile App Development</h6>
              <h2>The Hours</h2>
              <h5>
                Wide range of Hotels & more in just one click -The Hours Mobile
                App
              </h5>
              <button>View Portfolio</button>
            </div>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/7.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
            <span data-aos="fade-up">
              <Image
                src="/images/Home/Project2/1.png" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
              />{" "}
              <Image
                src="/images/Home/Project2/2.png" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </span>
            <Image
              data-aos="fade-up"
              src="/images/Home/Project2/5.png" // Route of the image file
              height={1000} // Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
            />{" "}
          </div>
        </section>

        <section className={styles.contact}>
          <div>
            <hr />
            <h3>Contact us</h3>
            <ul data-aos="fade-left">
              <li>
                <Image
                  src="/images/Home/contact/icon/phone.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt=" "
                />
                <p>+91 8655997455</p>
              </li>
              <li>
                <Image
                  src="/images/Home/contact/icon/map.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt=" "
                />
                <p>
                  Suite-409, Oracle Business Hub, Ambica Nagar Bustop, Wagle
                  Estate, Thane.
                </p>
              </li>
              <li>
                <Image
                  src="/images/Home/contact/icon/mail.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt=" "
                />
                <p>biz@digilligence.com</p>
              </li>
            </ul>
          </div>
          <div>
            <hr />
            <h3>Connect with us</h3>
            <ul data-aos="fade-right">
              <li>
                <Image
                  src="/images/Home/contact/socialmedia/linkedin.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
              <li>
                <Image
                  src="/images/Home/contact/socialmedia/instagram.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
              <li>
                <Image
                  src="/images/Home/contact/socialmedia/facebook.png" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                />
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.belowbanner}>
          <h4 data-aos="zoom-out">All Big things start</h4>
          <b>Let's connect over a cup of coffe</b>
          <button type="" data-aos="zoom-in">
            Book your Free Coffee
          </button>
        </section>
      </main>
    </div>
  );
}
