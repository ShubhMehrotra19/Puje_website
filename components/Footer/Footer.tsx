import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-evenly text-white bg-black p-5">
        <Image
          src={"/images/footer_logo.png"}
          alt=""
          height={100}
          width={120}
        />
        <div className="flex flex-col gap-5 p-2">
          <Link
            className="footer hover:border-b-2 hover:scale-[102%] transition-colors duration-300 pb-1"
            href="/"
          >
            About us
          </Link>
          <Link
            className="footer hover:border-b-2 hover:scale-[102%] transition-colors duration-300 pb-1"
            href="/"
          >
            Projects
          </Link>
          <Link
            className="footer hover:border-b-2 hover:scale-[102%] transition-colors duration-300 pb-1"
            href="/"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-2">
          <Link
            className="footer hover:border-b-2 hover:scale-[102%] transition-colors duration-300 pb-1"
            href="/"
          >
            Privacy Policy
          </Link>
          <Link
            className="footer hover:border-b-2 hover:scale-[102%] transition-colors duration-300 pb-1"
            href="/"
          >
            Terms & conditions
          </Link>
          <Link
            className="footer hover:border-b-2 hover:scale-[102%] transition-colors duration-300 pb-1"
            href="/"
          >
            Careers
          </Link>
        </div>
        <div />
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/images/linkedin_logo.png"
            alt=""
            height={32}
            width={32}
            className="cursor-pointer hover:scale-[102%] active:scale-95 transition-all duration-300"
          />
          <Image
            src="/images/facebook_logo.png"
            alt=""
            height={32}
            width={32}
            className="cursor-pointer hover:scale-[102%] active:scale-95 transition-all duration-300"
          />
          <Image
            src="/images/Youtube_logo.png"
            alt=""
            height={32}
            width={32}
            className="cursor-pointer hover:scale-[102%] active:scale-95 transition-all duration-300"
          />
          <Image
            src="/images/insta_logo.png"
            alt=""
            height={32}
            width={32}
            className="cursor-pointer hover:scale-[102%] active:scale-95 transition-all duration-300"
          />
        </div>
      </div>
      <div className="text-white bg-black w-full border-white/80 p-5">
        <h1 className="flex justify-center border-t-2 border-white/50 max-w-7xl mx-auto pt-4 cursor-pointer">
          @Puje Group
        </h1>
      </div>
    </>
  );
};

export default Footer;
