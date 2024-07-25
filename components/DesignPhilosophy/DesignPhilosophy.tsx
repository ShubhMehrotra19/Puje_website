import React from "react";
import Image from "next/image";

const DesignPhilosophy = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-24">
      <div className="flex w-full p-10 bg-white justify-evenly">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-2 pl-12">
            <p className="font-[beaufort] text-5xl text-[#D7B56D]">
              Design Philosophy
            </p>
            <hr className="bg-[#D7B56D] text-[#D7B56D]" />
          </div>
          <div className="flex flex-col gap-8 justify-start">
            <div className="flex gap-2">
              <div>
                <Image
                  src={"/images/cutting-edge.png"}
                  alt="Cutting Edge"
                  height={38}
                  width={37}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#D7B56D] font-semibold">
                  Cutting-Edge 3D BIM Models
                </p>
                <p>
                  Employed from initial design stages for precision and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div>
                <Image
                  src={"/images/smart-plans.png"}
                  alt="Cutting Edge"
                  height={38}
                  width={37}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#D7B56D] font-semibold">Smart Plans</p>
                <p>
                  Optimising spaces for enhanced utility and long-term value.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src={"/images/dsgn-meets-func.png"}
                  alt="Cutting Edge"
                  height={38}
                  width={37}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#D7B56D] font-semibold">
                  Design Meets Functionality
                </p>
                <p>Balancing aesthetic appeal with practical functionality.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src={"/images/asttc-dsgn-facades.png"}
                  alt="Cutting Edge"
                  height={38}
                  width={37}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#D7B56D] font-semibold">
                  Aesthetically Designed Facades
                </p>
                <p>
                  Enhancing the urban landscape with striking architectural
                  statements.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src={"/images/fut-rdy-tech.png"}
                  alt="Cutting Edge"
                  height={38}
                  width={37}
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#D7B56D] font-semibold">
                  Future-Ready Technology
                </p>
                <p>
                  Integrating tech-driven solutions for sustainable and
                  efficient living.
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-center">
              <div>
                <Image
                  src={"/images/ren-resource.png"}
                  alt="Cutting Edge"
                  height={38}
                  width={37}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#D7B56D] font-semibold">
                  Renewable Resources
                </p>
                <p>
                  Commitment to green building practices for a healthier
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/images/dsgn_phil.png"}
            alt="Design Philosophy"
            height={500}
            width={500}
          />
        </div>
      </div>

      <div>
        <button className="bg-black p-3 rounded-sm text-white font-[beaufort] mt-3">
          <p>Know More</p>
        </button>
      </div>
    </div>
  );
};

export default DesignPhilosophy;
