import React from "react";
import Image from "next/image";

const CombinedProjects = () => {
  return (
    <>
      <div className="flex flex-col md:gap-10 mb-32">
        <h1 className="w-[80%] mx-auto pb-5 text-5xl text-[#D7B56D] text-center md:mb-12 md:border-b-2 md:border-[#212121]/40 font-[beaufort]">
          Flagship Project
        </h1>
        <div className="flex justify-between  items-center">
          <div className="flex-1 justify-center relative md:flex hidden">
            <Image
              src="/images/Building_Image.png"
              alt="Building"
              height={568}
              width={369}
              className="shadow-lg rounded-md "
            />
          </div>
          <div className="flex-1 flex flex-col justify-evenly relative md:pl-24 md:pr-24 items-center">
            <Image
              src="/images/flagship_logo-1.svg"
              alt="Flagship logo"
              height={100}
              width={200}
              className="md:mb-6 md:scale-100 scale-50"
            />
            <div className="flex-1 justify-center relative md:hidden">
              <Image
                src={"/images/flagship-responsive.png"}
                alt=""
                height={568}
                width={369}
                className="shadow-lg rounded-md"
              />
            </div>
            <p className="tracking-wide md:leading-7 mb-8 max-w-[95%] leading-snug mt-4 md:mt-0 px-4 md:px-0">
              Puje Ananta is the crown jewel of The Puje Group's legacy. This G+
              31 storey architectural masterpiece embodies our unwavering
              commitment to innovation, quality, and crafting homes that
              illuminate lives. With palatial homes, exclusive garden-facing
              views, timeless Neoclassical design and an unparalleled lifestyle
              promising connectivity, tranquillity and exclusivity, Ananta truly
              is the Landmark sculpted for those who have made their Marks.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-sm w-fit hover:bg-gray-800 transition-colors duration-300">
              Know More
            </button>
            <div className="absolute right-0 top-0 bottom-0 hidden md:block">
              <Image
                src="/images/Flag_PRO_BG.png"
                alt="logo"
                width={100}
                height={200}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 mb-24">
        <h1 className="w-[80%] mx-auto pb-5 text-5xl text-[#D7B56D] text-center font-[beaufort] mb-12 md:border-b-2 md:border-[#212121]/40">
          Ongoing Projects
        </h1>
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
            <Image
              src="/images/Og_Pro1.png"
              alt="Ongoing Project 1"
              height={391}
              width={423}
              className="mx-auto transition-all duration-300 group-hover:brightness-50 rounded-lg shadow-md"
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-all duration-300
                             opacity-0 group-hover:opacity-100 hidden md:block"
            >
              Know More
            </button>
            <div className="flex justify-center">
              <Image
                src="/images/Og_Pro3.png"
                alt="Ongoing Project Logo 1"
                height={100}
                width={100}
                className="shadow-sm scale-[150%]"
              />
            </div>
          </div>
          <div className="relative group flex flex-col gap-5 p-5">
            <Image
              src="/images/Og_Pro2.png"
              alt="Ongoing Project 2"
              height={391}
              width={423}
              className="mx-auto transition-all duration-300 md:group-hover:brightness-50 rounded-lg shadow-md"
            />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition-all duration-300
                             opacity-0 group-hover:opacity-100 hidden md:block"
            >
              Know More
            </button>
            <div className="flex justify-center">
              <Image
                src="/images/Og_Pro4.png"
                alt="Ongoing Project Logo 2"
                height={100}
                width={100}
                className="shadow-sm scale-[150%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CombinedProjects;
