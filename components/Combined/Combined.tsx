import React from "react";
import Image from "next/image";

const Combined = () => {
  return (
    <div className="w-full mb-32 -mt-4">
      <div className="px-24">
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-5 w-1/2 justify-center pr-10">
            <div className="">
              <p className="text-[#D7B56D] text-5xl font-[beaufort]">
                Sculpted, Not Built
              </p>
            </div>
            <div className="leading-relaxed text-justify max-w-[50ch] flex flex-col gap-10">
              <hr className="border-t-[1px] border-[#D7B56D]" />
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
          <div className="w-1/3 flex justify-end">
            <div className="relative w-4/5 aspect-[3/4]">
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
    </div>
  );
};

export default Combined;
