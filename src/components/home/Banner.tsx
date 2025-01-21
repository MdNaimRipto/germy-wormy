import React from "react";
import OpacityTransition from "../animation/OpacityTransition";
import card from "@/assets/space-bg.png";

const Banner = () => {
  return (
    <div className="w-full h-screen relative z-10">
      <video
        poster={card.src}
        src="https://germy-wormy-five.vercel.app/videos/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`w-full bg-lightGray h-full object-cover absolute brightness-75 z-0 opacity-100`}
        preload="metadata"
      />
      <OpacityTransition>
        <div className="relative z-10 w-full container flex items-center justify-center h-full pt-0 md:pt-[50px] lg:pt-0">
          <div className="w-full px-4 md:px-0 md:w-[88%]">
            <h2 className="text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[40px] md:leading-[50px] lg:leading-[65px] xl:leading-[80px] text-white font-bold w-[60%]">
              Welcome to Germy Wormy – The Wiggliest Meme Token on Solana!
            </h2>
            <p className="text-center md:text-start mt-5 text-white text-3xl w-3/5">
              {`Spreading like germs, wiggling to the moon!`}
            </p>
            <p className="text-center md:text-start mt-5 text-white text-lg leading-9 font-light w-3/5">
              {`Spreading like germs, wiggling to the moon! Germy Wormy is here to
              bring fun, humor, and a dash of craziness to the world of crypto.
              Built on the Solana blockchain, this meme token isn’t just about
              trading—it’s about building a community, sharing laughs, and
              wiggling our way to the moon together. Whether you're a seasoned
              crypto enthusiast or a newbie looking for something lighthearted,
              Germy Wormy is your ticket to the wiggle revolution!`}
            </p>
          </div>
        </div>
      </OpacityTransition>
    </div>
  );
};

export default Banner;
