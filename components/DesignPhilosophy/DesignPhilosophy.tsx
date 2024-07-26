import React from "react";
import Image from "next/image";

const DesignPhilosophy = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-24">
      <div className="flex w-full p-10 bg-white justify-evenly">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-5 pl-12">
            <p className="font-[beaufort] text-5xl text-[#D7B56D]">
              Design Philosophy
            </p>
            <hr className="border-t-[1px] border-[#D7B56D]" />
          </div>
          <div className="flex flex-col gap-8 justify-start">
            {[
              {
                src: "/images/cutting-edge.png",
                alt: "Cutting Edge",
                title: "Cutting-Edge 3D BIM Models",
                desc: "Employed from initial design stages for precision and efficiency.",
              },
              {
                src: "/images/smart-plans.png",
                alt: "Smart Plans",
                title: "Smart Plans",
                desc: "Optimising spaces for enhanced utility and long-term value.",
              },
              {
                src: "/images/dsgn-meets-func.png",
                alt: "Design Meets Functionality",
                title: "Design Meets Functionality",
                desc: "Balancing aesthetic appeal with practical functionality.",
              },
              {
                src: "/images/asttc-dsgn-facades.png",
                alt: "Aesthetically Designed Facades",
                title: "Aesthetically Designed Facades",
                desc: "Enhancing the urban landscape with striking architectural statements.",
              },
              {
                src: "/images/fut-rdy-tech.png",
                alt: "Future-Ready Technology",
                title: "Future-Ready Technology",
                desc: "Integrating tech-driven solutions for sustainable and efficient living.",
              },
              {
                src: "/images/ren-resource.png",
                alt: "Renewable Resources",
                title: "Renewable Resources",
                desc: "Commitment to green building practices for a healthier environment.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-2">
                <div className="relative w-10 h-10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#D7B56D] font-semibold">{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-1/3 aspect-square">
          <Image
            src="/images/dsgn_phil.png"
            alt="Design Philosophy"
            fill
            className="object-contain"
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
