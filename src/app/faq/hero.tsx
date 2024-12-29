"use client";

import {Typography} from "@material-tailwind/react";

function Hero() {
  return (
  <div className="relative min-h-screen w-full bg-[url('/image/tower.jpg')] bg-cover bg-center bg-no-repeat">    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl text-outline-white" 
        >
            Frequently Asked Questions
        </Typography>
      </div>
    </div>
  </div>
  );
}
export default Hero;