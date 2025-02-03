import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      {/* <h1>Navbar</h1> */}
      <Link href="/">
        <Image src="/globe.svg" alt="logo" width={36} height={36}></Image>
      </Link>
    </nav>
  );
};

export default Navbar;
