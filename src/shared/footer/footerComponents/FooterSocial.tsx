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
      path: "https://x.com/thegermywormy",
    },
    {
      icon: FaInstagram,
      path: "https://www.instagram.com/thegermywormy/",
    },
    {
      icon: FaDiscord,
      path: "https://discord.com/channels/1317237924374249543/1317237925427024055",
    },
    {
      icon: FaFacebookF,
      path: "https://www.facebook.com/GermyWormy",
    },
    {
      icon: FaTiktok,
      path: "https://www.tiktok.com/@thegermywormy",
    },
  ];
  return (
    <div className={`flex gap-4 items-center justify-center lg:justify-start`}>
      {options.map((o, i) => (
        <Link key={i} href={o.path} target="_blank">
          <IconButton
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
        </Link>
      ))}
    </div>
  );
};

export default FooterSocial;
