import { UseCommonImports } from "@/utils/UseCommonImports";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import logo from "@/assets/my-target-logo.png";
import Image from "next/image";
import CloseMenuIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { TfiWorld } from "react-icons/tfi";

const NavSideMenu = ({
  isNavOpen,
  setIsNavOpen,
  togglerRef,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
  togglerRef: any;
}) => {
  const { Router } = UseCommonImports();
  const menuRef = useRef<HTMLUListElement>(null);

  const menuItems = [
    {
      item: "Home",
      path: "/",
      opacityDelay: ".4s",
    },
    {
      item: "Our Meals",
      path: "/menu",
      opacityDelay: ".5s",
    },
    {
      item: "Plans & Packages",
      path: "/plansAndPackages",
      opacityDelay: ".6s",
    },
    {
      item: "Blog",
      path: "/blog",
      opacityDelay: ".7s",
    },
    {
      item: "Consultations",
      path: "/consultations",
      opacityDelay: ".8s",
    },
    {
      item: "Partnerships",
      path: "/partnerships",
      opacityDelay: ".9s",
    },
    {
      item: "Our Community",
      path: "/ourCommunity",
      opacityDelay: "1s",
    },
  ];

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target as Node)
      ) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen, setIsNavOpen, togglerRef]);

  return (
    <ul
      ref={menuRef}
      className={`bg-white flex flex-col items-start gap-1 absolute top-0 z-40 py-4 pl-5 lg:pl-12 ${
        isNavOpen ? "left-0 w-full md:w-2/5 h-screen" : "-left-full w-0 h-0"
      } duration-700 ease-in-out shadow-lg`}
    >
      <div className="flex items-start justify-between w-full pr-5 mb-3">
        <div></div>
        <Link href="/" onClick={() => setIsNavOpen(false)}>
          <Image
            src={logo.src}
            width={200}
            height={200}
            className="w-[180px]"
            alt="Logo"
            priority
          />
        </Link>
        <IconButton
          onClick={() => setIsNavOpen(!isNavOpen)}
          sx={{
            color: colorConfig.black,
            p: 0.3,
            opacity: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          <CloseMenuIcon />
        </IconButton>
        {/* <div className="hidden lg:block"></div> */}
      </div>
      {menuItems.map((menu, i) => (
        <Link
          onClick={() => setIsNavOpen(false)}
          href={menu?.path ? menu.path : "/"}
          key={i}
          className={`block text-black text-sm h-[55px] duration-300`}
        >
          <li
            className={`titleFont font-medium whitespace-nowrap h-[40px] leading-[55px] ${
              Router.pathname === menu?.path && "text-darkGreen font-semibold"
            } ${
              isNavOpen ? `opacity-100 duration-700 mt-0` : "opacity-0 mt-3"
            }`}
            style={{
              transitionDelay: isNavOpen ? menu.opacityDelay : "0s",
            }}
          >
            {menu?.item}
          </li>
        </Link>
      ))}
      <button
        className={`flex items-center justify-center gap-2 mt-3 ${
          isNavOpen ? `opacity-100 duration-700 mt-0` : "opacity-0 mt-3"
        }`}
        style={{
          transitionDelay: isNavOpen ? "1.1s" : "0s",
        }}
      >
        <TfiWorld /> Language
      </button>
    </ul>
  );
};

export default NavSideMenu;
