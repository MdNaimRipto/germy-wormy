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
    <div className="flex items-center gap-4">
      {socialLinks.map((s, i) => (
        <Link key={i} href={s.path}>
          <s.icon className="rounded-full bg-white p-2 text-4xl" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
