import React from "react";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import Link from "next/link";

const NavSideOptions = ({
  isNavOpen,
  setIsNavOpen,
  isScrolled,
  isHomePage,
  togglerRef,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
  isScrolled: boolean;
  isHomePage: boolean;
  togglerRef: any;
}) => {
  return (
    <div className="flex items-center gap-4 justify-end w-full md:w-[70%] xl:w-auto">
      <Link href="/auth/login">
        <Button
          variant="outlined"
          sx={{
            color:
              !isScrolled && isHomePage
                ? colorConfig.white
                : colorConfig.primary,
            fontSize: {
              xs: "8px",
              sm: "12px",
            },
            fontWeight: 600,
            transition: ".7s",
            padding: {
              xs: "6px 10px",
              sm: "8px 20px",
            },
            borderColor:
              !isScrolled && isHomePage
                ? colorConfig.white
                : colorConfig.primary,
            "&:hover": {
              color: colorConfig.white,
              background: colorConfig.primary,
            },
          }}
        >
          Login
        </Button>
      </Link>
      <ResponsiveMenuHandlerButton
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        isScrolled={isScrolled}
        isHomePage={isHomePage}
        togglerRef={togglerRef}
      />
    </div>
  );
};

export default NavSideOptions;
