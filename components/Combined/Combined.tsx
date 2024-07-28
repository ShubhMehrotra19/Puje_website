import React from "react";
import Image from "next/image";

const Combined = () => {
  return (
    <div className="w-full mb-24 relative ">
      <div className="absolute left-0 bottom-0 hidden md:block">
        <Image
          src="/images/OG_PRO_BG2.png"
          alt="logo"
          height={200}
          width={100}
        />
      </div>
      <div className="absolute right-0 top-96 hidden md:block">
        <Image
          src="/images/Flag_PRO_BG.png"
          alt="logo"
          width={100}
          height={200}
          objectFit="contain"
        />
      </div>
      <div className="md:px-24 mb-24">
        <div className="flex md:justify-evenly ">
          <div className="flex flex-col gap-4 md:w-1/2 justify-center md:pr-10 items-center md:items-start md:px-0 px-5">
            <p className="text-[#D7B56D] md:text-5xl font-[beaufort] text-4xl text-center md:text-start border-b-[1px] border-[#D7B56D] pb-8 md:border-b-0 w-full md:pb-0">
              Sculpted, Not Built
            </p>
            <div className="w-full md:hidden">
              <Image
                src={"/images/resp-sculpted.png"}
                alt=""
                height={100}
                width={430}
              />
            </div>
            <div className="leading-relaxed text-justify md:max-w-[50ch] flex flex-col gap-10 md:border-t-[1px] border-[#D7B56D] md:pt-10">
              <p>
                At Puje Group, we don't just build houses, but craft homes that
                radiate warmth. We believe in humanizing the corporate world of
                realty redefining it by incorporating the dreams and aspirations
                of every resident. We sculpt expanses of space that are planned
                for the future, utilizing latest technologies as the foundation
                for timeless designs leading to distinguished pieces of
                architecture. With more than 50 successful projects in over 35
                years, we have paved a legacy of creating living experience that
                illuminate the lives of your families for generations to come.
              </p>
            </div>
          </div>
          <div className="w-1/3 justify-end hidden md:flex">
            <div className="relative w-4/5 aspect-[3/4] ">
              <Image
                src="/images/sculpted.png"
                alt="Sculpted"
                fill
                sizes="(max-width: 768px) 80vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-[#D0B06B] flex flex-col justify-evenly md:bg-opacity-5 mb-12 md:flex-row ">
        <div className="flex gap-10 p-10 md:flex-row flex-col">
          <div className="flex flex-col md:border-r-[1px] border-[#D7B56D] pr-10 items-center gap-4">
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">35+</p>
            <p className="max-w-[15ch] text-center">
              Year of real estate experience{" "}
            </p>
          </div>
          <div className="flex flex-col md:border-r-[1px] border-[#D7B56D] pr-10 items-center gap-4">
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">50+</p>
            <p className="text-center max-w-[10ch]">Projects Completed</p>
          </div>
          <div className="flex flex-col md:border-r-[1px] border-[#D7B56D] pr-10 items-center gap-4">
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">10K+</p>
            <p className="text-center max-w-[10ch]">Happy Families </p>
          </div>
          <div className="flex flex-col md:border-r-[1px] border-[#D7B56D] pr-10 items-center gap-4">
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">5M+ Sq.Ft</p>
            <p className="text-center max-w-[10ch]">Constructed Area </p>
          </div>
          <div className="flex flex-col items-center gap-4 border-b-[1px] pb-14 border-[#D7B56D] md:border-b-0">
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">2M+ Sq.Ft</p>
            <p className="text-center max-w-[10ch]">
              Redevelopment Properties{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly md:px-24 mb-24 md:flex-row flex-col gap-16 md:gap-0">
        <div className="flex flex-col items-center mt-12 md:gap-10 gap-5">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Image
                src={"/images/vision.png"}
                alt="Vision"
                height={50}
                width={132}
              />
            </div>
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">Vision</p>
          </div>
          <p className="md:max-w-[40ch] text-center">
            To illuminate the lives of every individual we touch through ethical
            real estate endeavors, thoughtful educational initiatives, and
            people-first hospitality services.
          </p>
        </div>
        <hr className="border-r-[1px] h-24 border-[#D7B56D] md:flex flex-col flex-end mt-32 hidden" />
        <div className="flex flex-col items-center md:gap-10 gap-5">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Image
                src={"/images/mission.png"}
                alt="Mission"
                height={50}
                width={40}
              />
            </div>
            <p className="text-5xl font-[beaufort] text-[#D7B56D]">Mission</p>
          </div>
          <p className="max-w-[40ch] text-center">
            To build future-ready assets across real estate, education, and
            hospitality domains, driven by our core values.
          </p>
        </div>
      </div>

      <div className="bg-[#D0B06B] md:flex flex-col items-center bg-opacity-5 p-5 hidden">
        <div className="flex gap-5">
          <Image
            src={"/images/vision1.png"}
            alt="Vision"
            height={115}
            width={70}
          />
          <p className="font-[beaufort] text-[#D0B06B] text-5xl">Values</p>
        </div>
        <div className="flex gap-16 p-10">
          <div className="flex flex-col border-r-[1px] border-[#D7B56D] pr-16 items-center gap-4">
            <p className="max-w-[10ch] text-center">People-First Design </p>
          </div>
          <div className="flex flex-col border-r-[1px] border-[#D7B56D] pr-16 items-center gap-4">
            <p className="text-center max-w-[15ch]">
              Customer - Centric Approach
            </p>
          </div>
          <div className="flex flex-col border-r-[1px] border-[#D7B56D] pr-16 items-center gap-4">
            <p className="text-center max-w-[10ch]">Adhering to Commitments </p>
          </div>
          <div className="flex flex-col pr-16 items-center gap-4">
            <p className="text-center max-w-[10ch]">Delivering Beyond </p>
          </div>
        </div>
      </div>

      {/* mobile screen values component */}
      <div className=" flex flex-col items-center pr-5 md:hidden gap-10">
        <div className="flex gap-5">
          <Image
            src={"/images/vision1.png"}
            alt="Vision"
            height={115}
            width={70}
          />
          <p className="font-[beaufort] text-[#D0B06B] text-5xl">Values</p>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-2 border-r-[1px] border-[#D7B56D] pr-5">
            <div className="flex flex-col  items-center gap-4">
              <p className="text-center max-w-[10ch]">People-First Design </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-center max-w-[15ch]">
                Customer - Centric Approach
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center gap-4">
              <p className="text-center max-w-[10ch]">
                Adhering to Commitments{" "}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-center max-w-[10ch]">Delivering Beyond </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combined;
