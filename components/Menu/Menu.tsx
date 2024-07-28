import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface Props {
  className?: string;
}

function Menu({ className }: Props) {
  return (
    <>
     <div
  className={`relative w-screen h-screen z-20 ${className} bg-gradient-to-b from-[#7dacc0] via-[#d2d7d3] to-[#eedab7] md:flex hidden justify-between items-center`}
>
  <div className="w-1/2 flex flex-col pl-12 gap-6 justify-start items-start">
    <Fade cascade direction="left" damping={0.2}>
    <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
      Home
    </p>
    <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
      Projects
    </p>
    <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
      About Us
    </p>
    <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
      Contact Us
    </p>
    </Fade>
  </div>
  <div className="w-1/2 h-full relative">
    <Image
      src="/images/menuImage.png"
      alt=""
      fill
      className="object-contain h-full"
      style={{ objectPosition: "right" }}
    />
  </div>
</div>


      {/* Mobile */}
      <div
        className={`relative w-screen h-screen z-20 ${className} bg-gradient-to-b from-[#7dacc0] via-[#d2d7d3] to-[#eedab7] justify-between items-center md:hidden block`}
      >
        <div className="flex flex-col pl-16 top-1/3 gap-8 justify-start items-start z-30 relative">
          <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
            Home
          </p>
          <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
            Projects
          </p>
          <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
            About Us
          </p>
          <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 hover:border-b-2 hover:border-white/60 transition-all duration-300'>
            Contact Us
          </p>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <Image
            src="/images/mobileMenuImage.png"
            alt=""
            fill
            className="object-cover h-full"
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
