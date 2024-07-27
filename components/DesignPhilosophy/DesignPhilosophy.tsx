import React from "react";
import Image from "next/image";

const DesignPhilosophy = () => {
  return (
    <>
    <div className="md:visible hidden md:flex flex-col justify-center items-center gap-10 mb-32">
      <div className="flex w-full py-12 px-10 justify-evenly">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-5 md:pl-12">
            <p className="font-[beaufort] text-5xl text-[#D7B56D] border-b-2 border-[#D7B56D] pb-5">
              Design Philosophy
            </p>
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

        <div className="relative w-1/3">
          <Image
            src="/images/dsgn_phil.png"
            alt="Design Philosophy"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <button className="bg-black px-5 py-2 rounded-sm text-white font-[beaufort] mt-3 hover:cursor-pointer hover:scale-[102%] hover:bg-black/90 active:scale-95 transition-all duration-300">
          Know More
        </button>
      </div>
    </div>

    {/* mobile screen */}

    <div className="md:hidden visible flex flex-col justify-center items-center w-full px-10 gap-10 mb-32">
    <div className="flex flex-col w-full justify-evenly">
        <Image
          src="/images/dsgn_phil.png"
          alt="Design Philosophy"
          height={850}
          width={650}
        />
      </div>
      <div className="flex flex-col justify-center gap-5 items-center">
          <p className="font-[beaufort] text-3xl text-[#D7B56D] border-b-2 border-[#D7B56D] pb-3 w-fit">
            Design Philosophy
          </p>

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
    <div>
      <button className="bg-black px-5 py-2 rounded-sm text-white font-[beaufort] mt-3 hover:cursor-pointer hover:scale-[102%] hover:bg-black/90 active:scale-95 transition-all duration-300">
        Know More
      </button>
    </div>
    </div>
  </>
  );
};

export default DesignPhilosophy;
