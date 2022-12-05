import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <Fragment>
      <header className="nav">
        <Image
          src="/images/logo.svg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <div>
          <h6>
            <Link href="/">Home</Link>
          </h6>

          <h6>
            <Link href="/aboutus">About Us</Link>
          </h6>
          {/* <h6>
        <Link href="/clients">Clients</Link>
      </h6> */}
          <span></span>
        </div>
      </header>

      <nav className="menu">
        <ul>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>

            <ul>
              <li>Social Media Marketing</li>
              <li>Mobile App Development</li>
              <li>Branding & Graphic Designing</li>
              <li>Website Development</li>
              <li>UX/UI Design</li>
              <li>Search Engine Optimization</li>
            </ul>
          </li>

          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/contactus">Contact</Link>
          </li>
        </ul>

        <div>
          <div>
            <i></i>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
