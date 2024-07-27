import React from "react";

interface Props {}

function Hero(props: Props) {
  const {} = props;

  return (
    <div className="md:h-[700px] h-[500px] w-full flex justify-center items-center">
      <p className='font-["beaufort"] font-medium md:text-6xl text-4xl text-center leading-normal uppercase text-[#D7B56D] pt-[150px]'>
        Redefining <br /> Realty
      </p>
    </div>
  );
}

export default Hero;
