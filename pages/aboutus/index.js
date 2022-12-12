import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/AboutUs.module.scss";
import Link from "next/link";

// import Size from "../utils/ScreenSize";

const process = [
  {
    img: "/images/AboutUs/process1.png",
    head: "Strategize",
    decription:
      "After analyzing your requirements, our team will strategize & come with the Plan of Action. We begin quick by hunting the results needed to deliver immediate value, exceed expectations & out grow your competition!",
  },
  {
    img: "/images/AboutUs/process2.png",
    head: "Execute",
    decription:
      " Our team will assemble the right mix of expertise and technology to execute the strategy in order to delivery timely results.",
  },
  {
    img: "/images/AboutUs/process3.png",
    head: "Optimize",
    decription:
      " With the help of analytics, our team will measure the success of the campaign/project and take necessary steps to optimize the same for better results.",
  },
];

const about = [
  {
    img: "/images/AboutUs/Shared.png",
    head: "What we do",
    decription1:
      "We're a team of Young Guns lead by our Founder Mr. Mervin Agera who believes in the tech revolution and understands the importance of delivery timely results to all the client.",
    decription2:
      "Building an Enterprise is still a matter of paperwork, but there's alot that goes in order to turn it into a Brand. We will build that Brand for you at Digilligence.",
  },
  {
    img: "/images/AboutUs/Social.png",
    head: "Our Mission",
    decription1:
      "We are on a Mission to provide Digital Business Solutions for all types of industries across the globe and help them stand on their feet.",
    decription2:
      "Our team is set on a Mission to Build Brands of tomorrow by understanding our client's goals & working towards achieving it. The Mission mainly includes helping Small Business and Startups reach new heights with the help of our Digital Services!",
  },

  {
    img: "/images/AboutUs/SocialStratergy.png",
    head: "What we do",
    decription1:
      "We have Vision to help India reach the pinnacle of Digital success and contribute towards the growth of the nation. We believe in Mutual Growth; the organization plans on growing Internationally.",
    decription2:
      "With a futuristic vision, Team Digilligence looks to Cater to a wider audience with Empirical approach towa",
  },
];

export default function AboutUs() {
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
      </Head>

      <main>
        <section className={styles.Banner}>
          <div>
            <div>
              <hr />
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
              src="/images/AboutUs/banner.png" // Route of the image file
              height={1000} //Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
          </div>
        </section>
        <section className={styles.process}>
          <div>
            <hr />
            <h2>Our Process</h2>
            <hr />
          </div>

          <ul>
            {process.map((list, index) => (
              <li key={index}>
                <Image
                  src={list.img} // Route of the image file
                  height={1000} //Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <h5>{list.head}</h5>
                <p>{list.decription}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.Mprocess}>
          <div>
            <hr />
            <h2>Our Process</h2>
            <hr />
          </div>

          <ul>
            {process.map((list, index) => (
              <li key={index}>
                <Image
                  src={list.img} // Route of the image file
                  height={1000} //Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="animate__animated animate__jackInTheBox"
                />
                <div>
                  <h5>{list.head}</h5>
                  <p>{list.decription}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {about.map((list, index) => (
          <section className={styles.we} key={index}>
            <Image
              src={list.img} // Route of the image file
              height={1000} //Desired size with correct aspect ratio
              width={1000} // Desired size with correct aspect ratio
              alt="Your Name"
              className="animate__animated animate__jackInTheBox"
            />
            <div>
              <h2>{list.head}</h2>
              <hr />
              <p>{list.decription1}</p>
              <p>{list.decription2}</p>
            </div>
          </section>
        ))}

        <section className={styles.belowbanner}>
          <b>Let's connect over a cup of coffe</b>
          <button type="" data-aos="zoom-in">
            Book your Free Coffee
          </button>
        </section>
      </main>
    </div>
  );
}
