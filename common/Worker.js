// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Services.module.scss";
import CountUp from "react-countup";
// import Size from "../utils/ScreenSize";
import Link from "next/link";

export default function Worker(props) {
  // .box {
  //   width: 500px;
  //   height: 100px;
  //   border: solid 5px #000;
  //   border-color: #000 transparent transparent transparent;
  //   border-radius: 50%/100px 100px 0 0;
  // }

  console.log(props.data);

  return (
    <div className={styles.ServiceContainer}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{props.metatitle}</title>
        <meta name="description" content={props.metades} />
        <meta name="keywords" content={props.metakey} />
      </Head>
      <section className={styles.Banner}>
        <div>
          <div>
            <h4>Services</h4>
            <h2 className="animate__animated animate__fadeInUp">
              <span> {props.data.title} </span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              {props.data.description}
            </p>

            <button className="animate__animated animate__fadeInUp animate__delay-1s">
              Start Your Project
            </button>
          </div>
          <Image
            src={props.data.img} // Route of the image file
            height={1500} //Desired size with correct aspect ratio
            width={1500} // Desired size with correct aspect ratio
            alt="Your Name"
            data-aos="zoom-in-up"
            priority
          />
        </div>

        <h4>{props.data.qoute}</h4>

        <hr />
      </section>

      <section className={styles.process}>
        <hr />
        <h5>Our Process</h5>
        <div>
          {props.data.process.map((list, index) => (
            <div key={index}>
              <Image
                src={list.img} // Route of the image file
                height={1000} //Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
                data-aos="zoom-in"
                // className="animate__animated animate__jackInTheBox"
              />
              <h6>{list.caption}</h6>
            </div>
          ))}
        </div>
        <hr />
      </section>

      {props.data.blog.map((list, index) => (
        <section className={styles.blog} key={index}>
          <Image
            src={list.img} // Route of the image file
            height={1000} //Desired size with correct aspect ratio
            width={1000} // Desired size with correct aspect ratio
            alt="Your Name"
            data-aos="fade-up"
          />
          <div>
            <h2>{list.Heading}</h2>
            <hr />
            <p data-aos="zoom-in">{list.description}</p>
            {list.description2 ? (
              <p data-aos="zoom-in">{list.description2}</p>
            ) : null}
            {list.description3 ? (
              <p data-aos="zoom-in">{list.description3}</p>
            ) : null}
          </div>
        </section>
      ))}

      {props.data.do ? (
        <section className={styles.do}>
          <div>
            <hr />
            <h5>What can we do for your business</h5>
            <hr />
          </div>
          <div>
            {props.data.do.map((list, index) => (
              <div key={index}>
                <div className={styles.holder}>
                  <Image
                    src={list.img} // Route of the image file
                    height={1000} //Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                    className="animate__animated animate__jackInTheBox"
                  />
                </div>
                <h6>{list.caption}</h6>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {props.data.strength ? (
        <section className={styles.progress}>
          <div>
            <hr />

            <h5>
              {props.data.strengthhead
                ? props.data.strengthhead
                : "Our Strength"}
            </h5>
            <hr />
          </div>
          <ul>
            {props.data.strength.map((list, index) => (
              <li key={index}>
                {list.count ? (
                  <h3 data-aos="fade-up">
                    <CountUp
                      start={0}
                      end={list.count}
                      duration={2}
                      separator=""
                      decimals={0}
                      decimal=","
                      suffix={list.suffix ? list.suffix : " +"}
                      enableScrollSpy={true}
                    />
                  </h3>
                ) : null}

                <h6 data-aos="fade-down">{list.caption}</h6>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {props.data.project ? (
        <section className={styles.project}>
          <h5>Projects</h5>
          {props.data.project.map((list, index) => (
            <div key={index}>
              <div data-aos="fade-up">
                <h4>{props.data.title}</h4>
                <h2 className="animate__animated animate__fadeInUp">
                  <span> {list.Heading} </span>
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  {list.description}
                </p>

                <button data-aos="zoom-in" data-aos-duration="1000">
                  View Portfolio
                </button>
              </div>

              <Image
                src={list.img} // Route of the image file
                height={1000} //Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
                data-aos="zoom-in"
              />
            </div>
          ))}
        </section>
      ) : null}

      <hr />

      <section className={styles.services}>
        {props.data.serivce.map((list, index) => (
          <div key={index}>
            <Link href={list.link}>
              <Image
                src={list.img} // Route of the image file
                height={1000} //Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt="Your Name"
                className="animate__animated animate__jackInTheBox"
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
