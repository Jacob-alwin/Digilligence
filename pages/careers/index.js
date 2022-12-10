import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";
import styles from "../../styles/Careers.module.scss";
import { team, here } from "../../data/career";

function Careers() {
  return (
    <Fragment>
      <div className={styles.CareersContainer}>
        <section className={styles.Banner}>
          <Image
            src="/images/Career/careerbanner.png" // Route of the image file
            height={1920} //Desired size with correct aspect ratio
            width={1920} // Desired size with correct aspect ratio
            alt="Your Name"
            className="animate__animated animate__jackInTheBox"
            priority
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

        {/* <section className={styles.Openings}>
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
        </section> */}

        <section className={styles.work}>
          <h3>ABOUT WORKING HERE</h3>
          <div>
            {here.map((here, index) => (
              <div key={index}>
                <Image
                  src={here.img} // Route of the image file
                  height={1920} //Desired size with correct aspect ratio
                  width={1920} // Desired size with correct aspect ratio
                  alt="Your Name"
                  // className="animate__animated animate__jackInTheBox"
                />
                <dl>
                  <dt>{here.head}</dt>
                  <dd>{here.paragraph}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.testimonial}>
          <h3>LIFE AT DIGILLIGENCE</h3>

          <ul>
            {team.map((person, index) => (
              <li key={index}>
                <div>
                  <Image
                    src="/images/Career/qoutes.png" // Route of the image file
                    height={500} //Desired size with correct aspect ratio
                    width={500} // Desired size with correct aspect ratio
                    alt="Your Name"
                    className="animate__animated animate__jackInTheBox"
                  />
                  <p>{person.paragraph}</p>
                </div>
                <div>
                  <Image
                    src={person.picture} // Route of the image file
                    height={500} //Desired size with correct aspect ratio
                    width={500} // Desired size with correct aspect ratio
                    alt="Your Name"
                    className="animate__animated animate__jackInTheBox"
                  />
                  <b>{person.name}</b>
                  <span>{person.designation}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Fragment>
  );
}

export default Careers;
