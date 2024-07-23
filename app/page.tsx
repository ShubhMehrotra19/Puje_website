"use client";

import dynamic from "next/dynamic";
import React from "react";
import "./globals.css";

const GetInTouch = dynamic(() => import("@/components/contact/GetInTouch"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div style={{ height: "400px", width: "100%" }}>
        <GetInTouch posix={[19.026353, 72.851802]} />
      </div>
      <div style={{ fontFamily: "beaufort" }}>This is Beaufort</div>
    </div>
  );

export default Page
