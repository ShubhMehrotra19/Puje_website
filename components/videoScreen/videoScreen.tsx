import Image from "next/image";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

interface Props {}

function VideoScreen(props: Props) {
  const [show, setShow] = useState(false);

  const {} = props;
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      gsap.fromTo(
        "#animated-logo",
        { opacity: 0 },
        { opacity: 1, duration: 2.8, ease: "power4.inOut" }
      );
      gsap.fromTo(
        "#dark-overlay",
        { opacity: 0, duration: 0.3 },
        { opacity: 0.5, duration: 1 }
      );
    }, 1000);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/introVideo.mp4"
        loop
        autoPlay
        muted
      />
      {show && (
        <div
          id="dark-overlay"
          className="absolute top-0 left-0 w-full h-full bg-black pointer-events-none opacity-20"
        ></div>
      )}
      {show && (
        <>
        <Image
          id="animated-logo"
          className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden"
          src="/images/pujeVideoLogo.png"
          height={140}
          width={400}
          alt=""
        />
        <Image
          id="animated-logo"
          className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden block"
          src="/images/pujeVideoLogo.png"
          height={90}
          width={240}
          alt=""
        />
        </>
      )}
    </div>
  );
}

export default VideoScreen;
