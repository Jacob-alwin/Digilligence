import React, { Fragment } from "react";

function ContactUs() {
  return (
    <Fragment>
      <Head>
        <title>Digiligence</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logoicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div>
        <section>
          <img src="" alt="" />
          <h2>Digilligience</h2>
          <h4>Connect with us!!</h4>
        </section>

        <section>
          <h3>Job Openings</h3>

          <button>Internship Openings</button>
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
          <ul>
            <li>
              <div>
                <h3>Desigmnation</h3>
                <p>Details</p>
              </div>
              <button>Apply Now</button>
            </li>
          </ul>
        </section>

        <section>
          <div>
            <img src="" alt="" />
            <dl>
              <dt>Connect with us!!</dt>
              <dd>Digilligience</dd>
            </dl>
          </div>
        </section>

        <section>
          <div>
            <div>
              <img src="" alt="" />
              <p>
                The Company encourages employees to work to the best of their
                abilities.My job enables me to make use of my skills and
                abilities. I get a sense of personal accomplishment from my
                work. I would recommend the Company as a great place to work. I
                would recommend working at the Company to my friends. Thanks
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <b>Name</b>
              <span>UX/UI Designer</span>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default ContactUs;
