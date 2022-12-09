import React, { Fragment } from "react";
import styles from "../../styles/ContactUs.module.scss";

function ContactUs() {
  return (
    <Fragment>
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
            <input type="text" placeholder="Name..." />
          </div>
          <div>
            <label for="">I can connect on</label>
            <input type="text" placeholder="+91" />
          </div>
          <div>
            <label for="">My Mail ID is</label>
            <input type="text" placeholder="#### @gmail.com" />
          </div>
          <div>
            <label for="">Reason for connecting</label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">Digital Marketing Services</option>
              <option value="">Software Development</option>
              <option value="">Partnership/Tieups</option>
            </select>
          </div>

          <hr />

          <button>Submit</button>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactUs;
