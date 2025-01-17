import React, { useEffect, useRef, useState } from "react";
import NavLogo from "./NavLogo";
import NavMenuItems from "./NavMenuItems";
import NavSideOptions from "./navSideOptions/NavSideOptions";
import { UseCommonImports } from "@/utils/UseCommonImports";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const togglerRef = useRef<HTMLButtonElement>(null);

  const { Router } = UseCommonImports();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Router.pathname]);

  const isHomePage = Router.pathname === "/";

  return (
    <div className={`fixed z-50 xl:top-5 left-0 w-full pb-[2px] h-[80px]`}>
      <div
        className={`h-[80px] container px-8 flex items-center justify-between ${
          isHomePage && !isScrolled ? "bg-[#00000000]" : "bg-white"
        } duration-700 xl:rounded-full`}
      >
        <div className="flex items-center gap-5">
          <NavLogo isScrolled={isScrolled} isHomePage={isHomePage} />
          <div className="hidden xl:block">
            <NavMenuItems
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              isScrolled={isScrolled}
              isHomePage={isHomePage}
            />
          </div>
        </div>
        <NavSideOptions
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
          togglerRef={togglerRef}
        />
      </div>
      <div className="block xl:hidden">
        <NavMenuItems
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        />
      </div>
    </div>
  );
};

export default Navbar;
