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
          <li>
            <Link
              href="/services/Social-media-marketing-agencies-in-Mumbai"
            
            >
              Social Media Marketing
            </Link>
          </li>

          <li>
            <Link
              href="/services/best-Mobile-app-development-company-in-mumbai"
            
            >
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
          <li>Our Work</li>
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
            <Link href="/careers">
              <Image
                src="/images/footericons/email.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              biz@digillence.in
            </Link>
          </li>
          <li>
            <Image
              src="/images/footericons/location.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            Thane
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
      <div className="bottom">2022, Digiligence copyright</div>
    </Fragment>
  );
}

export default Footer;
