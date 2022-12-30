import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "../../styles/ContactUs.module.scss";
import Head from "next/head";
import Link from "next/link";

function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setDesigination] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullname, email, subject, message);

    // let isValidForm = handleValidation();

    // if (true) {
    // setButtonText("Sending");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      // setShowSuccessMessage(false);
      // setShowFailureMessage(true);
      // setButtonText("Send");

      // Reset form fields
      setFullname("");
      setEmail("");
      setNumber("");
      setMessage("");
      setDesigination("");
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText("Send");
    // Reset form fields
    setFullname("");
    setEmail("");
    setNumber("");
    setMessage("");
    setDesigination("");
    // }
  };
  return (
    <Fragment>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Contact Us - Digilligence</title>
        <meta
          name="description"
          content="We are ready to lead you into the future of Digital Marketing, Web designing, Website development, Mobile app development, Search engine optimization, SMM. Call +91 8655 997 455"
        />
        <meta
          name="keywords"
          content="digital marketing agency in Mumbai, digital marketing company in Mumbai, digital marketing agencies in Mumbai, Digital Marketing Agency in Thane, Best Digital marketing agency in mumbai, The Intelligent Digital Marketing Agency"
        />
      </Head>
      <section className={styles.ContactContainer}>
        <div className={styles.left}>
          <h4>Connect with us!!</h4>
          <h2>Digilligience</h2>

          <ul>
            <li>Connect with us on!!</li>
            <li>+91 8655997455</li>
            <li>biz@digilligence.in</li>
            <li>
              PLOT NO A-179, NEAR ASHAR IT PARK, OPP KALPATARU PRIME, Road No.
              16/Z, Wagle Industrial Estate, Thane, Maharashtra 400604{" "}
            </li>
          </ul>
          <div className="socialmedia">
            <div>
              <Link href="https://www.facebook.com/digilligence.in">
                <Image
                  src="/images/facebook.svg" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt=" "
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/digilligence/">
                <Image
                  src="/images/instagram.svg" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt=" "
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/digilligence">
                <Image
                  src="/images/linkedin.svg" // Route of the image file
                  height={1000} // Desired size with correct aspect ratio
                  width={1000} // Desired size with correct aspect ratio
                  alt=" "
                />
              </Link>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.right}>
          <div>
            <label htmlFor="">People call me</label>
            <input
              type="text"
              defaultValue={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              placeholder="Name..."
            />
          </div>
          <div>
            <label htmlFor="">I can connect on</label>
            <input
              type="text"
              defaultValue={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              placeholder="+91"
            />
          </div>
          <div>
            <label htmlFor="">My Mail ID is</label>
            <input
              type="text"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="#### @gmail.com"
            />
          </div>
          <div>
            <label htmlFor="">Reason for connecting</label>
            <select
              defaultValue={subject}
              onChange={(e) => {
                setDesigination(e.target.value);
              }}
              name=""
              id=""
            >
              <option value=""> Select</option>
              <option value="">Digital Marketing Services</option>
              <option value="">Software Development</option>
              <option value="">Partnership/Tieups</option>
            </select>
          </div>

          <div>
            <textarea
              type="text"
              defaultValue={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Looking to discuss about a new project..."
            />
          </div>

          {/* <hr /> */}

          <button>Submit</button>
        </form>
      </section>
    </Fragment>
  );
}

export default ContactUs;
