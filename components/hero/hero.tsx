import React from "react";

interface Props {}

function Hero(props: Props) {
  const {} = props;

  return (
    <div className="md:h-[700px] h-screen w-full flex justify-center items-center">
      <p className='font-["beaufort"] font-medium md:text-6xl text-3xl text-center leading-normal uppercase text-[#D7B56D] pt-[150px]'>
        Redefining <br /> Realty
      </p>
    </div>
  );
}

export default Hero;
