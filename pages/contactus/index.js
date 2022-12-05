import React, { Fragment } from "react";
import styles from "../../styles/ContactUs.module.scss";

function ContactUs() {
  return (
    <Fragment>
      <section className={styles.ContactContainer}>
        <div className={styles.left}>
          <h2>Digilligience</h2>
          <h4>Connect with us!!</h4>

          <ul>
            <li>Connect with us on!!</li>
            <li>+91 291221922</li>
            <li>jacobalwinjoy@gmail.com</li>
            <li>
              PLOT NO A-179, NEAR ASHAR IT PARK, OPP KALPATARU PRIME, Road No.
              16/Z, Wagle Industrial Estate, Thane, Maharashtra 400604
            </li>
          </ul>
          <div>
            <i>hi</i>
            <i>hi</i>
            <i>hi</i>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <label for="">People call me</label>
            <input type="text" placeholder="Type.." />
          </div>

          <hr />

          <button>Submit</button>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactUs;
