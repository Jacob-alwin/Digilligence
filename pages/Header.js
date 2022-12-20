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
            height={1000} // Desired size with correct aspect ratio
            width={1000} // Desired size with correct aspect ratio
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
              Contact
            </Link>
          </h6>
          {/* <h6>
        <Link href="/clients">Clients</Link>
      </h6> */}
          <div
            className="hamburger"
            onClick={() => {
              if (menu) {
                setmenu(false);
              } else {
                setmenu(true);
              }
            }}
          >
            {menu ? (
              <span className="unactive"></span>
            ) : (
              <span className="active"></span>
            )}
          </div>
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
            </li>{" "}
            <li>
              <Link
                href="/careers"
                onClick={() => {
                  setmenu(false);
                }}
              >
                Clients
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
          <span></span>
          <div className="start">
            <h3>Lets get cracking</h3>
            <hr />
            <button>Start Your Project</button>
          </div>
          <div className="dots"></div>
          <div className="socialmedia">
            <div>
              <Image
                src="/images/facebook.svg" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt=" "
              />
            </div>
            <div>
              <Image
                src="/images/instagram.svg" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt=" "
              />
            </div>
            <div>
              <Image
                src="/images/linkedin.svg" // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1000} // Desired size with correct aspect ratio
                alt=" "
              />
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
