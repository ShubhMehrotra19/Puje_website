import React from 'react'
import Image from "next/image";

const Decoding = () => {
  return (
    <div className="px-24 mb-24">
    <div className="flex justify-evenly">
      <div className="flex flex-col gap-5 w-1/2 justify-center pr-10">
        <div className="">
          <p className="text-[#D7B56D] text-5xl font-[beaufort]">
            Decoding the Puje Flame
          </p>
        </div>
        <div className="leading-relaxed text-justify max-w-[50ch] flex flex-col gap-10">
          <hr className="border-t-[1px] border-[#D7B56D]" />
          <p>
            The emblem of Puje Group, a flame, serves as an allegory for enlightenment, optimism, and boundless possibilities. Much like a flame, it illuminates lives, symbolizing the group’s commitment to igniting transformative possibilities in real estate. This symbol encapsulates Puje Group's ethos—where every project, like a flame, radiates warmth, brilliance, and the promise of a brighter tomorrow.
          </p>
        </div>
      </div>
      <div className="w-1/3 flex ">
        <div className="relative w-4/5 ">
          <Image
            src="/images/Decoding_1.png"
            alt="Sculpted"
            fill
            sizes="(max-width: 500px) 30vw, 15vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Decoding