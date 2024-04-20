"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  return (
    <div className="flex mt-8 flex-col max-w-7xl mx-auto px-8 ">
      <div className="flex justify-center items-center">
        <h2 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl font-spaceGrotesk ">
          Our Official Partners
        </h2>
      </div>
      <Marquee className="py-4 flex" pauseOnHover={true} speed={20}>
        <div className="flex items-center justify-around sm:space-x-10 space-x-6">
          <Image
            src="/assets/logos/8.png"
            width={150}
            height={100}
            alt="abans"
          />
          <Image
            src="/assets/logos/9 copy.png"
            width={150}
            height={100}
            alt="daraz"
            className="w-[200px] h-[300] overflow-hidden"
          />
          <Image
            src="/assets/logos/3.png"
            width={150}
            height={100}
            alt="dialog"
          />

          <Image
            src="/assets/logos/4.png"
            width={150}
            height={100}
            alt="oppo"
          />

          <Image
            src="/assets/logos/5.png"
            width={150}
            height={100}
            alt="airtel"
          />
          <Image
            src="/assets/logos/6 copy.png"
            width={150}
            height={100}
            alt="ikman"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoSlider;
