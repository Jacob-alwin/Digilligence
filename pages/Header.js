import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="nav">
      <Image
        src="/images/logo.svg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />

      <div>
        <h6></h6>
        <h6>
          <Link href="/aboutus">About Us</Link>
        </h6>
        {/* <h6>
        <Link href="/clients">Clients</Link>
      </h6> */}
        <span></span>
      </div>
    </header>
  );
}

export default Header;
