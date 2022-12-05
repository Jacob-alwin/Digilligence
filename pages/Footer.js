import React, { Fragment } from "react";
import Image from "next/image";

function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div>
          <Image
            src="/images/logo.svg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
          <p>
            Thane's Best Digital Marketing agency that believes in taking your
            ideas to the pinnacle of success.
          </p>
        </div>

        <ul>
          <li>Services</li>
          <li>Social Media Marketing</li>
          <li>Mobile Development</li>
          <li>Branding and Designing</li>
          <li>Website Development</li>
          <li>UI/UX Designing</li>
          <li>Search Engine Optimization </li>
        </ul>
        <ul>
          <li>Quick Links</li>
          <li>Our Work</li>
          <li>About Us</li>
          <li>Services</li>
          <li>
            Careers <span>We're hiring</span>
          </li>
        </ul>
        <ul>
          <li>Reach us</li>
          <li>
            <Image
              src="/images/footericons/email.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            biz@digillence.in
          </li>
          <li>
            <Image
              src="/images/footericons/location.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            +91 86559974455
          </li>
          <li>
            <Image
              src="/images/footericons/phone.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            +91 86559974455
          </li>
        </ul>
      </footer>
      <div className="bottom">2022 , Digiligence copyright</div>
    </Fragment>
  );
}

export default Footer;
