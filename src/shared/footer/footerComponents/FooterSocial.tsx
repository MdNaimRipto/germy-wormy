import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";

const FooterSocial = ({ iconColor }: { iconColor: string }) => {
  const options = [
    {
      icon: FaXTwitter,
      path: "",
    },
    {
      icon: FaInstagram,
      path: "",
    },
    {
      icon: FaDiscord,
      path: "",
    },
    {
      icon: FaFacebookF,
      path: "",
    },
    {
      icon: FaTiktok,
      path: "",
    },
  ];
  return (
    <div className={`flex gap-4 items-center justify-center lg:justify-start`}>
      {options.map((o, i) => (
        <IconButton
          key={i}
          sx={{
            color: iconColor,
            width: {
              xs: "30px",
              lg: "40px",
            },
            height: {
              xs: "30px",
              lg: "40px",
            },
            border: "1px solid #ffffff80",
            transition: ".5s",
            "&:hover": {
              backgroundColor: colorConfig.primary,
              border: "none",
            },
          }}
        >
          {" "}
          <o.icon size={16} />
        </IconButton>
      ))}
    </div>
  );
};

export default FooterSocial;
