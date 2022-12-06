import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";
import styles from "../../styles/Careers.module.scss";

function Careers() {
  return (
    <Fragment>
      <div className={styles.CareersContainer}>
        <section className={styles.Banner}>
          <Image
            src="/images/Career/careerbanner.png" // Route of the image file
            height={144} //Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
            className="animate__animated animate__jackInTheBox"
          />
          <span>cddd</span>
          <h2>CARRERS AT DIGILLIGENCE</h2>
          <h5>
            Digillience, The Intelligent Marketing Agency, takes your idea and
            transforms it into a brand by offering its digital marketing
            services
          </h5>
          <button>Get in touch</button>
        </section>

        <section className={styles.Openings}>
          <h3>JOB OPENINGS</h3>

          <button>Internship Openings</button>
          <div>
            <input
              type="radio"
              id="socialmedia"
              name="openings"
              value="socialmedia"
            />
            <label for="socialmedia">Social Media Marketing</label>
            <input
              type="radio"
              id="webdevelopment"
              name="openings"
              value="webdevelopment"
            />
            <label for="webdevelopment">Web Development</label>
            <input
              type="radio"
              id="appdevelopment"
              name="openings"
              value="appdevelopment"
            />
            <label for="appdevelopment">App Development</label>
            <input
              type="radio"
              id="graphicdesigner"
              name="openings"
              value="graphicdesigner"
            />
            <label for="graphicdesigner">Graphic Desinger</label>
            <input type="radio" id="uiux" name="openings" value="uiux" />
            <label for="uiux">UI/UX Designing</label>
          </div>

          <ul>
            <li>
              <div>
                <h3>Designation</h3>
                <p>Mumbai,2 Months,Exp: 1-2years</p>
              </div>
              <button>Apply Now</button>
            </li>
          </ul>
        </section>

        <section className={styles.work}>
          <h3>ABOUT WORKING HERE</h3>
          <div>
            <div>
              <Image
                src="/images/Career/careerbanner.png" // Route of the image file
                height={144} //Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
                className="animate__animated animate__jackInTheBox"
              />
              <dl>
                <dt>Growth & Development</dt>
                <dd>Here lots of growth avaialbe and we providing alot</dd>
              </dl>
            </div>

            <div>
              <Image
                src="/images/Career/careerbanner.png" // Route of the image file
                height={144} //Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
                className="animate__animated animate__jackInTheBox"
              />
              <dl>
                <dt>Growth & Development</dt>
                <dd>Here lots of growth avaialbe and we providing alot</dd>
              </dl>
            </div>

            <div>
              <Image
                src="/images/Career/careerbanner.png" // Route of the image file
                height={144} //Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
                className="animate__animated animate__jackInTheBox"
              />
              <dl>
                <dt>Growth & Development</dt>
                <dd>Here lots of growth avaialbe and we providing alot</dd>
              </dl>
            </div>

            <div>
              <Image
                src="/images/Career/careerbanner.png" // Route of the image file
                height={144} //Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
                className="animate__animated animate__jackInTheBox"
              />
              <dl>
                <dt>Growth & Development</dt>
                <dd>Here lots of growth avaialbe and we providing alot</dd>
              </dl>
            </div>
          </div>
        </section>

        <section className={styles.testimonial}>
          <h3>LIFE AT DIGILLIGENCE</h3>

          <ul>
            <li>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <p>
                  The Company encourages employees to work to the best of their
                  abilities.My job enables me to make use of my skills and
                  abilities. I get a sense of personal accomplishment from my
                  work. I would recommend the Company as a great place to work.
                  I would recommend working at the Company to my friends. Thanks
                </p>
              </div>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <b>Tisha Kakkar </b>
                <span>UX/UI Designer</span>
              </div>
            </li>
            <li>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <p>
                  The Company encourages employees to work to the best of their
                  abilities.My job enables me to make use of my skills and
                  abilities. I get a sense of personal accomplishment from my
                  work. I would recommend the Company as a great place to work.
                  I would recommend working at the Company to my friends. Thanks
                </p>
              </div>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <b>Tisha Kakkar </b>
                <span>UX/UI Designer</span>
              </div>
            </li>
            <li>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <p>
                  The Company encourages employees to work to the best of their
                  abilities.My job enables me to make use of my skills and
                  abilities. I get a sense of personal accomplishment from my
                  work. I would recommend the Company as a great place to work.
                  I would recommend working at the Company to my friends. Thanks
                </p>
              </div>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <b>Tisha Kakkar </b>
                <span>UX/UI Designer</span>
              </div>
            </li>
            <li>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <p>
                  The Company encourages employees to work to the best of their
                  abilities.My job enables me to make use of my skills and
                  abilities. I get a sense of personal accomplishment from my
                  work. I would recommend the Company as a great place to work.
                  I would recommend working at the Company to my friends. Thanks
                </p>
              </div>
              <div>
                <Image
                  src="/images/Career/careerbanner.png" // Route of the image file
                  height={144} //Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <b>Tisha Kakkar </b>
                <span>UX/UI Designer</span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </Fragment>
  );
}

export default Careers;
