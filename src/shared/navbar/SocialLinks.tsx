import Link from "next/link";
import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";

const SocialLinks = ({
  isHomePage,
  isScrolled,
}: {
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const socialLinks = [
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
    <div className="flex items-center gap-4">
      {socialLinks.map((s, i) => (
        <Link key={i} href={s.path} target="_blank">
          <s.icon className="rounded-full bg-white p-2 text-4xl text-primary" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
