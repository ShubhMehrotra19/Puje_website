import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const CombinedProjects = () => {
  return (
    <>
      <div className="flex flex-col md:gap-10 mb-32">
        <Fade direction="up" triggerOnce>
        <h1 className="w-[80%] mx-auto pb-5 text-5xl text-[#D7B56D] text-center md:mb-12 md:border-b-2 md:border-[#212121]/40 font-[beaufort]">
          Flagship Project
        </h1>
        </Fade>
        <div className="flex justify-between  items-center">
          <div className="flex-1 justify-center relative md:flex hidden">
            <Fade triggerOnce>
            <Image
              src="/images/Building_Image.png"
              alt="Building"
              height={568}
              width={369}
              className="shadow-lg rounded-md "
            />
            </Fade>
          </div>
          <div className="flex-1 flex flex-col justify-evenly relative md:pl-24 md:pr-24 items-center">
          <Fade triggerOnce>
            <Image
              src="/images/flagship_logo-1.svg"
              alt="Flagship logo"
              height={100}
              width={200}
              className="md:mb-6 md:scale-100 scale-50"
            />
             </Fade>
            <div className="flex-1 justify-center relative md:hidden">
            <Fade triggerOnce>
              <Image
                src={"/images/flagship-responsive.png"}
                alt=""
                height={568}
                width={369}
                className="shadow-lg rounded-md"
              />
               </Fade>
            </div>
            <Fade direction="up" triggerOnce>
            <p className="tracking-wide md:leading-7 mb-8 max-w-[95%] leading-snug mt-4 md:mt-0 px-4 md:px-0">
              Puje Ananta is the crown jewel of The Puje Group's legacy. This G+
              31 storey architectural masterpiece embodies our unwavering
              commitment to innovation, quality, and crafting homes that
              illuminate lives. With palatial homes, exclusive garden-facing
              views, timeless Neoclassical design and an unparalleled lifestyle
              promising connectivity, tranquillity and exclusivity, Ananta truly
              is the Landmark sculpted for those who have made their Marks.
            </p>
            </Fade>
            <button className="bg-black px-5 py-2 rounded-sm text-white font-[beaufort] mt-3 hover:cursor-pointer hover:scale-[102%] hover:bg-black/90 active:scale-95 transition-all duration-300">
              Know More
            </button>
            <div className="absolute right-0 top-0 bottom-0 hidden md:block">
            <Fade direction="up" triggerOnce>
              <Image
                src="/images/FLAG_PRO_BG.png"
                alt=""
                width={100}
                height={200}
                objectFit="contain"
              />
               </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 mb-24">
      <Fade direction="up" triggerOnce>
        <h1 className="w-[80%] mx-auto pb-5 text-5xl text-[#D7B56D] text-center font-[beaufort] mb-12 md:border-b-2 md:border-[#212121]/40">
          Ongoing Projects
        </h1>
        </Fade>

        <div className="flex justify-around relative md:flex-row flex-col-reverse gap-3">
          <div className="absolute left-0 top-0 hidden md:block">
            <Image
              src="/images/OG_PRO_BG2.png"
              alt="logo"
              height={200}
              width={100}
            />
          </div>
          <div className="relative group flex flex-col gap-5 p-5">
            <Fade triggerOnce>
            <Image
              src="/images/Og_Pro1.png"
              alt="Ongoing Project 1"
              height={391}
              width={423}
              className="mx-auto transition-all duration-300 md:group-hover:brightness-50 rounded-lg shadow-md"
            />
            </Fade>
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-all duration-300
                             opacity-0 group-hover:opacity-100 hidden md:block"
            >
              Know More
            </button>
            <div className="flex justify-center">
            <Fade triggerOnce>
              <Image
                src="/images/Og_Pro3.png"
                alt="Ongoing Project Logo 1"
                height={100}
                width={100}
                className="shadow-sm scale-[150%]"
              />
               </Fade>
            </div>
          </div>
          <div className="relative group flex flex-col gap-5 p-5">
          <Fade triggerOnce>
            <Image
              src="/images/Og_Pro2.png"
              alt="Ongoing Project 2"
              height={391}
              width={423}
              className="mx-auto transition-all duration-300 md:group-hover:brightness-50 rounded-lg shadow-md"
            />
             </Fade>
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-all duration-300
                             opacity-0 group-hover:opacity-100 hidden md:block"
            >
              Know More
            </button>
            <div className="flex justify-center">
            <Fade triggerOnce>
              <Image
                src="/images/Og_Pro4.png"
                alt="Ongoing Project Logo 2"
                height={100}
                width={100}
                className="shadow-sm scale-[150%]"
              />
               </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CombinedProjects;
