import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";
import OnScrollAnimation from "../animation/OnScrollAnimation";

const Join = () => {
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
    <OnScrollAnimation>
      <div className="customLeftRightPadding relative z-20 text-center bg-white">
        <div className="container flex flex-col gap-6 py-20">
          <h3 className="titleFont capitalize text-center text-primary text-3xl md:text-4xl font-semibold tracking-wider">
            Join the Wiggle Revolution!
          </h3>
          <p className="text-black lg:w-[60%] m-auto">
            Stay connected with Germy Wormy and be part of the fun! Follow us on
            social media for the latest updates, memes, and giveaways.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            {socialLinks.map((s, i) => (
              <Link key={i} href={s.path}>
                <s.icon className="rounded-full bg-white hover:bg-primary hover:text-black p-2 text-4xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </OnScrollAnimation>
  );
};

export default Join;
