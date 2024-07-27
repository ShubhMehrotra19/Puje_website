import React from "react";
import Image from "next/image";

const Decoding = () => {
  return (
    <div className="md:px-24 mb-24">
    <div className="flex md:justify-evenly ">
      <div className="flex flex-col gap-4 md:w-1/2 justify-center md:pr-10 items-center md:items-start md:px-0 px-5">
        <p className="text-[#D7B56D] md:text-5xl font-[beaufort] text-4xl text-center md:text-start border-b-[1px] border-[#D7B56D]  md:border-b-0 w-full md:pb-0">
          Decoding the Puje Flame
        </p>
        <div className="w-full md:hidden pt-10 flex justify-center">
          <Image
            src={"/images/Decoding_1.png"}
            alt=""
            height={100}
            width={300}
          />
        </div>
        <div className="leading-relaxed text-justify  md:max-w-[50ch] flex flex-col gap-10 md:border-t-[1px] border-[#D7B56D] pt-10 md:pt-0">
          <p>
             The emblem of Puje Group, a flame, serves as an allegory for enlightenment, optimism, and boundless possibilities. Much like a flame, it illuminates lives, symbolizing the group’s commitment to igniting transformative possibilities in real estate. This symbol encapsulates Puje Group's ethos—where every project, like a flame, radiates warmth, brilliance, and the promise of a brighter tomorrow.
          </p>
        </div>
      </div>
      <div className="w-1/3 justify-end hidden md:flex">
        <div className="relative w-4/5 aspect-[3/4] ">
          <Image
            src="/images/Decoding_1.png"
            alt="Sculpted"
            fill
            sizes="(max-width: 500px) 50vw, 15vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Decoding;
