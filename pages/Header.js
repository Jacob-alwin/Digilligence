import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menu, setmenu] = useState(false);

  return (
    <Fragment>
      <header className="nav">
        <Link href="/">
          <Image
            src="/images/logo.svg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </Link>

        <div>
          <h6>
            <Link
              href="/clients"
              onClick={() => {
                setmenu(false);
              }}
            >
              Clients
            </Link>
          </h6>

          <h6>
            <Link
              href="/aboutus"
              onClick={() => {
                setmenu(false);
              }}
            >
              About Us
            </Link>
          </h6>
          {/* <h6>
        <Link href="/clients">Clients</Link>
      </h6> */}
          <span
            onClick={() => {
              if (menu) {
                setmenu(false);
              } else {
                setmenu(true);
              }
            }}
          ></span>
        </div>
      </header>

      {menu ? (
        <nav className="menu" data-aos="fade-down">
          <ul>
            <li>
              <Link
                href="/aboutus"
                onClick={() => {
                  setmenu(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => {
                  setmenu(false);
                }}
              >
                Services
              </Link>

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
              <Link
                href="/careers"
                onClick={() => {
                  setmenu(false);
                }}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                onClick={() => {
                  setmenu(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div>
            <div>
              <i></i>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Header;
