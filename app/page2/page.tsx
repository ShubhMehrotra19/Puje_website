"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "@/components/Footer/Footer";
import DesignPhilosophy from "@/components/DesignPhilosophy/DesignPhilosophy";
import CombinedProjects from "@/components/CombinedProjects/CombinedProjects";
import Combined from "@/components/Combined/Combined";

const GetInTouch = dynamic(() => import("@/components/contact/GetInTouch"), {
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
      <Combined />
      <DesignPhilosophy />
      <CombinedProjects />
      <div className="w-full z-0">
        <GetInTouch posix={[19.026353, 72.851802]} />
      </div>
      <Footer />
    </>
  );
}
