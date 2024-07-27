"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "../../utils/leaflet-client";
import Link from "next/link";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

const GetInTouch = ({ posix, zoom = defaults.zoom }: MapProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex md:flex-row flex-col md:p-10 p-5 md:bg-[#EBE9E6] bg-transparent w-full z-0">
      <div className="md:w-1/2 md:h-[500px] h-[400px] w-full z-0 md:mb-0 mb-12">
        <MapContainer
          center={posix}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={posix} draggable={false}></Marker>
        </MapContainer>
      </div>

      <div className="flex flex-col justify-center items-center md:w-1/2 w-full gap-5 md:px-20 px-5">
        <div className="text-[#D7B56D] text-5xl font-[beaufort]">
          <p>Get in Touch</p>
        </div>
        <div className="w-full text-center md:block hidden">
          Puje Ananta, Plot Nos. 296 & 289, B.A.Khimji Road, <br />
          Opp. Napoo Garden, Matunga East,Mumbai-400019{" "}
        </div>
        <p className="md:block hidden">E: info@pujegroup.com</p>
        <div className="flex flex-col gap-5 w-full mb-3">
          <input
            type="text"
            placeholder="Name*"
            className="h-fit rounded-sm pl-2 py-2 border-2 border-black/50"
          />
          <input
            type="text"
            placeholder="Email*"
            className="h-fit rounded-sm pl-2 py-2 border-2 border-black/50"
          />
          <input
            type="text"
            placeholder="Phone No.*"
            className="h-fit rounded-sm pl-2 py-2 border-2 border-black/50"
          />
          <input
            type="text"
            placeholder="Message*"
            className="h-fit rounded-sm pl-2 py-8 border-2 border-black/50"
          />
        </div>
        <div>
          <button className="bg-black py-3 px-5 rounded-sm text-white font-[beaufort] hover:bg-black/90 hover:scale-[102%] transition-all duration-300">
            <p>Send Message</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
