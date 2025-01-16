import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { FaTiktok, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterSocial = ({ iconColor }: { iconColor: string }) => {
  const options = [
    {
      logo: <FaLinkedinIn size={"16px"} />,
      opacityDelay: ".8s",
    },
    {
      logo: <FaXTwitter size={"16px"} />,
      opacityDelay: ".6s",
    },
    {
      logo: <FaInstagram size={"16px"} />,
      opacityDelay: ".5s",
    },
    {
      logo: <FaTiktok size={"16px"} />,
      opacityDelay: ".7s",
    },
  ];
  return (
    <div
      className={`flex gap-4 items-center justify-center md:justify-end lg:justify-start order-3 lg:order-1`}
    >
      {options.map((o, i) => (
        <IconButton
          key={i}
          sx={{
            color: iconColor,
            width: "40px",
            height: "40px",
            border: "1px solid #ffffff80",
            transition: ".5s",
            "&:hover": {
              backgroundColor: colorConfig.primary,
              border: "none",
            },
          }}
        >
          {" "}
          {o.logo}
        </IconButton>
      ))}
    </div>
  );
};

export default FooterSocial;
