import Image from "next/image";
import React from "react";
import logo from "@/assets/my-target-logo.png";
import Link from "next/link";

const NavLogo = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  return (
    <Link href={"/"} className="w-[60%] md:w-[50%] xl:w-[20%]">
      <Image
        className=""
        src={logo}
        alt="Navbar-logo"
        // width={160}
        // height={160}
        priority
      />
    </Link>
  );
};

export default NavLogo;
