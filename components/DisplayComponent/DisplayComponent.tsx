"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import MainPage from "@/components/MainPage/mainPage";

const GetInTouch = dynamic(() => import("@/components/Contact/GetInTouch"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <>
      <MainPage />
      <div>
        <div className="w-full">
          <GetInTouch posix={[19.026353, 72.851802]} />
        </div>
        <div style={{ fontFamily: "beaufort" }}>This is Beaufort</div>
      </div>
    </>
  );
}
