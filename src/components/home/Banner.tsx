import React from "react";
import OpacityTransition from "../animation/OpacityTransition";
import banner from "@/assets/banner.jpg";
import Image from "next/image";
import rocket from "@/assets/rocket-germ.png";
import moon from "@/assets/moon.png";

const Banner = () => {
  return (
    <div className="w-full h-screen relative z-10">
      <Image
        src={banner.src}
        alt="Web banner"
        width={banner.width}
        height={banner.height}
        priority
        className="absolute w-full h-full object-cover z-0 brightness-50"
      />
      <OpacityTransition>
        <div className="relative z-10 w-full container md:grid grid-cols-2 items-center justify-items-center h-full pt-0 md:pt-[50px] lg:pt-16">
          <div className="w-full px-4 md:px-0">
            <h2 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px] text-white font-bold">
              Welcome to Germy Wormy – The Wiggliest Meme Token on Solana!
            </h2>
            <p className="text-center md:text-start mt-5 text-white text-3xl">
              {`Spreading like germs, wiggling to the moon!`}
            </p>
            <p className="text-center md:text-start mt-5 text-white text-lg leading-9 font-light">
              {`Spreading like germs, wiggling to the moon! Germy Wormy is here to
              bring fun, humor, and a dash of craziness to the world of crypto.
              Built on the Solana blockchain, this meme token isn’t just about
              trading—it’s about building a community, sharing laughs, and
              wiggling our way to the moon together. Whether you're a seasoned
              crypto enthusiast or a newbie looking for something lighthearted,
              Germy Wormy is your ticket to the wiggle revolution!`}
            </p>
          </div>
          <div className="hidden md:block w-full h-full overflow-hidden relative">
            <Image
              src={rocket.src}
              alt="Rocket"
              width={rocket.width}
              height={rocket.height}
              priority
              className="w-full h-full object-contain rocket-animation absolute left-0 bottom-0 z-10"
            />
            <Image
              src={moon.src}
              alt="moon"
              width={moon.width}
              height={moon.height}
              priority
              className="w-3/5 h-3/5 object-contain absolute right-0 top-0 z-0"
            />
          </div>
        </div>
      </OpacityTransition>
    </div>
  );
};

export default Banner;
