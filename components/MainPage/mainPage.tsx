"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import ListedPage from "../ListedPage/ListedPage";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

function MainPage(props: Props) {
  const [width, setWidth] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const updateWidth = () => setWidth(document.documentElement.clientWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".mainPage",
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0.75, ease: "power4.inOut" }
    );
  }, []);

  useEffect(() => {
    gsap.to("#logo", {
      scrollTrigger: {
        trigger: ".mainPage",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onLeave: () => setAnimationComplete(true),
      },
      scale: 50,
      opacity: 0,
      duration: 2,
      transformOrigin: "center center",
    });
  
    gsap.to(".letter, .group, .image", {
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        end: "center top",
        scrub: true,
      },
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <Navbar animationComplete={animationComplete} />
      {!animationComplete ? (
        <div className="mainPage flex flex-col items-center justify-center max-h-full overflow-hidden pt-[150px] mb-20"> 
          <div className="image w-full h-[650px] relative">
            <Image
              className="relative"
              src="/images/mainImage.png"
              height={100}
              width={width}
              alt=""
            />
            <div className="absolute top-0 left-40 inset-0 flex flex-col justify-center items-center w-fit">
              <Image
                src="/images/logo_puje.png"
                height={240}
                width={160}
                alt="Logo"
              />
              <p className="font-[beaufort] text-center text-white text-5xl uppercase leading-tight tracking-wider">
                Redefining <br /> Realty
              </p>
            </div>
            <Image
              id="logo"
              className="absolute inset-0 top-[80%] left-1/2 transform -translate-x-1/2 cursor-pointer z-0"
              src="/images/logoPuje.png"
              height={150}
              width={60}
              alt=""
            />
          </div>
        </div>
      ) : (
        <ListedPage />
      )}
    </>
  );
}

interface NavbarProps {
  animationComplete: boolean;
}

function Navbar({ animationComplete }: NavbarProps) {
  return (
    <div
      className={`navbar z-20 w-full shadow-sm fixed top-0 left-0 right-0 bg-white transition-height duration-300 ${
        animationComplete ? "h-[100px]" : "h-[150px]"
      }`}
    >
      <div className="max-w-[85rem] mx-auto flex justify-between items-center h-full w-full">
        <div className="p-3">
          <Image
            className="hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300"
            src="/images/menu.png"
            height={40}
            width={25}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
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
            <Image src={'/images/logoPuje.png'} height={50} width={20} alt="Logo" />
          )}
        </div>
        <button className='rounded-sm bg-[#D7B56D] text-white font-["beaufort"] text-center w-fit px-5 py-3 hover:bg-[#d5b266] hover:scale-[102%] transition-all duration-300 active:scale-95'>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default MainPage;
