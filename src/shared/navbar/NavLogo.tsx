import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.webp";
import Link from "next/link";

const NavLogo = ({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  return (
    <Link
      href={"/"}
      className="w-[60%] md:w-[50%] xl:w-[20%] overflow-hidden h-[150px] xl:h-[70px]"
    >
      <Image
        className="w-full h-full object-contain"
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
