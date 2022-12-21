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
              href="/best-digital-marketing-agency-in-thane-digilligence-clients"
              onClick={() => {
                setmenu(false);
              }}
            >
              Clients
            </Link>
          </h6>

          <h6>
            <Link
              href="/about-us"
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
                href="/about-us"
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
                <Link
                  href="/services/Social-media-marketing-agencies-in-Mumbai"
                  onClick={() => {
                    setmenu(false);
                  }}
                >
                  <li>Social Media Marketing</li>
                </Link>

                <Link
                  href="/services/best-Mobile-app-development-company-in-mumbai"
                  onClick={() => {
                    setmenu(false);
                  }}
                >
                  <li>Mobile App Development</li>
                </Link>

                <Link
                  href="/services/Branding-Graphic-Designing"
                  onClick={() => {
                    setmenu(false);
                  }}
                >
                  <li>Branding & Graphic Designing</li>
                </Link>
                <Link
                  href="/services/best-website-developer-in-mumbai"
                  onClick={() => {
                    setmenu(false);
                  }}
                >
                  <li>Website Development</li>
                </Link>
                <Link
                  href="/services/best-ux-ui-designing-agency-in-mumbai-thane"
                  onClick={() => {
                    setmenu(false);
                  }}
                >
                  <li>UX/UI Design</li>
                </Link>
                <Link
                  href="/services/best-seo-agency-in-mumbai-thane"
                  onClick={() => {
                    setmenu(false);
                  }}
                >
                  <li>Search Engine Optimization</li>
                </Link>
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
                href="/best-digital-marketing-agency-in-thane-digilligence-clients"
                onClick={() => {
                  setmenu(false);
                }}
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                href="/contact-the-best-digital-marketing-agency-in-thane-mumbai"
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
