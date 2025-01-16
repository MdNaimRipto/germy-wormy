import { Divider } from "@mui/material";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { colorConfig } from "@/configs/colorConfig";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import FooterMenu from "./footerComponents/FooterMenu";
import FooterSocial from "./footerComponents/FooterSocial";
import FooterLogo from "./footerComponents/FooterLogo";

const Footer = () => {
  const { Router } = UseCommonImports();

  const pathName = Router.pathname;
  return (
    <div
      className={`w-full static ${
        pathName === "/" ? "lg:fixed" : "lg:static"
      } bottom-0 bg-[#222] text-white -z-50`}
    >
      <div className="container customLeftRightPadding pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 items-center justify-center">
          <FooterSocial iconColor={colorConfig.white} />
          <FooterMenu />
          <FooterLogo />
        </div>
        <Divider sx={{ background: `#ffffff33`, my: 5 }} />
        <div className="flex flex-col md:flex-row  items-center justify-center md:justify-between gap-6">
          <div className="md:order-2 flex items-center justify-center gap-6">
            <Link href={"/"} className="hover:text-primary font-medium">
              Terms and conditions
            </Link>
            <Link href={"/"} className="hover:text-primary font-medium">
              Privacy policy
            </Link>
            <p className="hidden md:block text-center capitalize">
              ©My Target inc2024.
            </p>
          </div>
          <p className="md:hidden text-center capitalize">
            ©My Target inc2024.
          </p>
          <div className="md:order-1 flex justify-center">
            <button className="flex items-center justify-center gap-1">
              <TfiWorld /> Language
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
