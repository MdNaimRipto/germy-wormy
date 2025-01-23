import { Divider } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import FooterMenu from "./footerComponents/FooterMenu";
import FooterSocial from "./footerComponents/FooterSocial";
import FooterLogo from "./footerComponents/FooterLogo";

const Footer = () => {
  return (
    <div className={`w-full relative z-20 bg-[#222] text-white`}>
      <div className="container pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 items-center justify-center">
          <FooterLogo />
          <FooterMenu />
          <FooterSocial iconColor={colorConfig.white} />
        </div>
        {/* <Divider sx={{ background: `#ffffff33`, my: 5 }} />
        <div className="flex flex-col md:flex-row  items-center justify-between gap-6">
          <div className="flex items-center justify-center gap-6">
            <Link
              href={"/"}
              className="hover:text-primary font-medium titleFont"
            >
              Terms and conditions
            </Link>
            <Link
              href={"/"}
              className="hover:text-primary font-medium titleFont"
            >
              Privacy policy
            </Link>
          </div>
          <p className="text-center capitalize titleFont">
            © Germy Wormy inc2025.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
