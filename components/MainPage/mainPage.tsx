"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import ListedPage from "../ListedPage/ListedPage";
import Hero from "../hero/hero";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

function ParentComponent(props: Props) {
  const [width, setWidth] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  function handleMenuClick() {
    setMenuClicked(!menuClicked);
    document.body.style.overflow = !menuClicked ? "hidden" : "auto"; // Disable scrolling when menu is open
  }

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
      { opacity: 1, duration: 0.75, ease: "power4.inOut" }
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

  useEffect(() => {
    if (animationComplete) {
      gsap.fromTo(
        "#pujeLogo",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power4.inOut" }
      );
      gsap.fromTo(
        "#hero",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power4.inOut" }
      );
      gsap.fromTo('.navbar', { height: '150px' }, { height: '100px', duration: 1, ease: 'power4.inOut' });
    }
  }, [animationComplete]);

  useEffect(() => {
    if (animationComplete) {
      window.scrollTo(0, 0);
    }
  }, [animationComplete]);

  useEffect(() => {
    if (menuClicked) {
      gsap.fromTo(
        ".menu",
        { y: -1000 },
        { y: 0, duration: 1, ease: "power4.inOut" }
      );
    } else {
      gsap.fromTo(
        ".menu",
        { y: 0 },
        { y: -1000, duration: 1, ease: "power4.inOut" }
      )
    }
  }, [menuClicked]);

  return (
    <>
      <Navbar animationComplete={animationComplete} handleMenuClick={handleMenuClick} menuClicked={menuClicked} />
      {menuClicked && <Menu className="menu" />}
      {menuClicked && (
        <Image
          onClick={handleMenuClick}
          className="fixed top-[50px] left-[50px] z-50 cursor-pointer"
          src="/images/close.png"
          height={40}
          width={25}
          alt="Close"
        />
      )}
      {!menuClicked && (
        <MainPage animationComplete={animationComplete} width={width} />
      )}
    </>
  );
}

interface MainPageProps {
  animationComplete: boolean;
  width: number;
}

function MainPage({ animationComplete, width }: MainPageProps) {
  return (
    <>
      {!animationComplete ? (
        <div className="mainPage flex flex-col items-center shadow-md justify-center max-h-full overflow-hidden pt-[150px] mb-20">
          <div className="image w-full h-[650px] relative md:block hidden">
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

          {/* Mobile */}

          <div className="image w-screen h-screen relative md:hidden block">
            <Image
              className="relative object-cover"
              src="/images/mobileMainpage.png"
              fill
              alt=""
            />
            <div className="absolute top-[10%] left-[38%] flex flex-col justify-center items-center w-fit">
              <Image
                src="/images/logo_puje.png"
                height={200}
                width={120}
                alt="Logo"
              />
              <p className="font-[beaufort] text-center text-white text-3xl uppercase leading-tight tracking-wider">
                Redefining <br /> Realty
              </p>
            </div>
            <Image
              id="logo"
              className="absolute top-[80%] left-[40%] cursor-pointer z-0"
              src="/images/logoPuje.png"
              height={90}
              width={36}
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          <div id="hero" className="w-screen">
            <Hero />
          </div>
          <ListedPage />
        </>
      )}
    </>
  );
}

export default ParentComponent;
