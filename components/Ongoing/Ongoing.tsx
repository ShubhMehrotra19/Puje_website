import React from "react";
import Image from "next/image";

const Ongoing = () => {
  return (
    <div className="flex flex-col gap-10 mb-24">
      <h1 className="text-5xl text-[#D7B56D] text-center font-[beaufort]">
        Ongoing Project
      </h1>
      <hr className="border-t-2 border-[#C9C9C9] mx-10" />
      <div className="flex justify-around">
        <div className="relative group flex flex-col gap-5">
          <Image
            src="/images/Og_Pro1.png"
            alt="Flagship logo"
            height={391}
            width={423}
            className="mx-auto transition-all duration-300 group-hover:brightness-50"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white px-4 py-2 rounded hover:bg-black transition-all duration-300
                             opacity-0 group-hover:opacity-100"
          >
            Know More
          </button>
          <div className="flex justify-center">
            <Image
              src="/images/Og_Pro3.png"
              alt="Flagship logo"
              height={169}
              width={165}
            />
          </div>
        </div>
        <div className="relative group flex flex-col gap-5">
          <Image
            src="/images/Og_Pro2.png"
            alt="Flagship logo"
            height={391}
            width={423}
            className="mx-auto transition-all duration-300 group-hover:brightness-50"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-black text-white px-4 py-2 rounded hover:bg-black transition-all duration-300
                             opacity-0 group-hover:opacity-100"
          >
            Know More
          </button>
          <div className="flex justify-center">
            <Image
              src="/images/Og_Pro4.png"
              alt="Flagship logo"
              height={169}
              width={165}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
