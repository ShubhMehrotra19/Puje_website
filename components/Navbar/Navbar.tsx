import Image from 'next/image'
import React from 'react'

interface NavbarProps {
  animationComplete: boolean;
  handleMenuClick: () => void;
  menuClicked: boolean;
}

function Navbar({ animationComplete, handleMenuClick, menuClicked }: NavbarProps) {
  return (
    <div
      className={`navbar z-20 w-full shadow-md fixed top-0 left-0 right-0 bg-white transition-height duration-300 ${
        animationComplete ? "h-[100px]" : "h-[150px]"
      }`}
     >
      <div className={`md:max-w-[85rem] md:mx-auto max-w-6xl mx-auto md:px-0 px-16 flex items-center h-full w-full ${animationComplete ? `justify-between` : `justify-center`}`}>
          {animationComplete && !menuClicked && (
            <Image
            onClick={handleMenuClick}
            className="hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 mr-8 z-30"
            src={ "/images/menu.png" }
            height={40}
            width={25}
            alt="Menu"
          />
          )}
        <div className="flex-col justify-center gap-2 md:block hidden">
          {!animationComplete && (
            <>
              <div className="flex justify-center items-center gap-2">
                <Image
                  className="letter"
                  src="/images/P.png"
                  width={50}
                  height={47}
                  alt="P"
                />
                <Image
                  className="letter"
                  src="/images/U.png"
                  width={50}
                  height={47}
                  alt="U"
                />
                <Image
                  className="letter"
                  src="/images/J.png"
                  width={38}
                  height={44}
                  alt="J"
                />
                <Image
                  className="letter"
                  src="/images/E.png"
                  width={50}
                  height={47}
                  alt="E"
                />
              </div>
              <Image
                className="group"
                src="/images/group.png"
                height={22}
                width={240}
                alt="Group"
              />
            </>
          )}
          {animationComplete && (
            <Image
              id="logoPuje"
              src={"/images/logoPuje.png"}
              height={50}
              width={20}
              alt="Logo"
            />
          )}
        </div>

        {/* mobile */}

        <div className="flex-col justify-center md:hidden block">
          {!animationComplete && (
            <>
              <div className="flex justify-center items-center gap-1 mb-2">
                <Image
                  className="letter"
                  src="/images/P.png"
                  width={30}
                  height={27}
                  alt="P"
                />
                <Image
                  className="letter"
                  src="/images/U.png"
                  width={30}
                  height={27}
                  alt="U"
                />
                <Image
                  className="letter"
                  src="/images/J.png"
                  width={22}
                  height={27}
                  alt="J"
                />
                <Image
                  className="letter"
                  src="/images/E.png"
                  width={30}
                  height={27}
                  alt="E"
                />
              </div>
              <Image
                className="group"
                src="/images/group.png"
                height={16}
                width={200}
                alt="Group"
              />
            </>
          )}
          {animationComplete && (
            <Image
              id="logoPuje"
              src={"/images/logoPuje.png"}
              height={50}
              width={20}
              alt="Logo"
            />
          )}
        </div>

        {animationComplete && (
          <button className='rounded-sm bg-[#D7B56D] text-white font-["beaufort"] text-center w-fit px-5 py-3 hover:bg-[#d5b266] hover:scale-[102%] transition-all duration-300 active:scale-95 md:block hidden'>
          Contact Us
        </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
