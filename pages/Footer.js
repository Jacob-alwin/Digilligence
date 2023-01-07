import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div>
          <Image
            src="/images/logo.svg" // Route of the image file
            height={1000} // Desired size with correct aspect ratio
            width={1000} // Desired size with correct aspect ratio
            alt="Your Name"
          />
          <p>
            Thane's Best Digital Marketing agency that believes in taking your
            ideas to the pinnacle of success.
          </p>
        </div>

        <ul>
          <li>Services</li>
          <li>
            <Link href="/services/Social-media-marketing-agencies-in-Mumbai">
              Social Media Marketing
            </Link>
          </li>

          <li>
            <Link href="/services/best-Mobile-app-development-company-in-mumbai">
              Mobile App Development
            </Link>
          </li>
          <li>
            <Link href="/services/Branding-Graphic-Designing">
              Branding & Graphic Designing
            </Link>
          </li>
          <li>
            <Link href="/services/best-website-developer-in-mumbai">
              Website Development
            </Link>
          </li>
          <li>
            <Link href="/services/best-ux-ui-designing-agency-in-mumbai-thane">
              UX/UI Design
            </Link>
          </li>
          <li>
            <Link href="/services/best-seo-agency-in-mumbai-thane">
              Search Engine Optimization
            </Link>
          </li>
        </ul>

        <ul>
          <li>Quick Links</li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1UjKduoWcJ5_6h-YySpmEGkAsIWHfLQaw?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              Our Work
            </a>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/careers">
              Careers <span>We're hiring</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>Reach us</li>
          <li>
            <a
              href="mailto:biz@digilligence.in"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image
                src="/images/footericons/email.png" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              biz@digilligence.in
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/VQtnVp8mtZQbM29j7?g_st=ic"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image
                src="/images/footericons/location.png" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              Suite - 409, Oracle Business Hub, Ambica Nagar Bustop, opposite
              Kalpataru Prime, Wagle Industrial Estate, Thane, Maharashtra
              400604
            </a>
          </li>

          <li>
            <a href="tel:+91-865-599-7455" target={"_blank"} rel="noreferrer">
              <Image
                src="/images/footericons/phone.png" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              +91 8655997455{" "}
            </a>
          </li>
        </ul>
      </footer>
      <div className="bottom">©️ 2023, Digiligence. All Rights Reserved</div>
    </Fragment>
  );
}

export default Footer;
