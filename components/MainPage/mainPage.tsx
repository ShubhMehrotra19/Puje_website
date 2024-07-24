"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import ListedPage from "../ListedPage/ListedPage";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

export default function MainPage(props: Props) {
  const [width, setWidth] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // is se client ke frame ki length mil jayegi realtime mein
    const updateWidth = () => setWidth(document.documentElement.clientWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    // lenis ka instance banaya hai scrolling ke liye
    const lenis = new Lenis({
      duration: 3,
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
        end: "center top",
        scrub: true,
      },
      scale: 800,
      opacity: 0,
    });

    gsap.to(".letter, .group, .image", {
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        end: "center top",
        scrub: true,
        onUpdate: (self) => {
          // mainpage ka div center top tak nahi aa raha isliye navbar ko trigger bana ke kaam chala rahe hain
          // major cheez ka pata opacity pe lag raha hai, to use setState ka base banake boolean ki value change kar di
          if (self.progress === 1) {
            setAnimationComplete(true);
          }
        },
      },
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      {!animationComplete ? (
        <div className="mainPage flex flex-col items-center justify-center max-h-full">
          <div className="navbar h-[150px] w-full shadow-sm flex justify-center items-center">
            <div className="flex flex-col justify-center gap-2">
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
            </div>
          </div>
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
              className="absolute inset-0 top-[80%] left-1/2 cursor-pointer"
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
