"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";
import "../../utils/leaflet-client";

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
    <div className="flex p-10 bg-[#EBE9E6] w-full">
      <div className="w-1/2">
        <MapContainer
          center={posix}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={posix} draggable={false}></Marker>
        </MapContainer>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 gap-5 px-10">
        <div className="text-[#D7B56D] text-3xl">
          <p>Get in Touch</p>
        </div>
        <div>
          <p>Puje Ananta, Plot Nos. 296 & 289, B.A.Khimji Road, </p>
          <p>Opp. Napoo Garden, Matunga East, Mumbai - 400019</p>
        </div>
        <div>
          <p>E: info@pujegroup.com</p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <input type="text" placeholder="  Name*" className="h-7 rounded-sm" />
          <input
            type="text"
            placeholder="  Email*"
            className="h-7 rounded-sm"
          />
          <input
            type="text"
            placeholder="  Phone No.*"
            className="h-7 rounded-sm"
          />
          <input
            type="text"
            placeholder="  Message*"
            className="h-16 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
