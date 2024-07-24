import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" flex  justify-evenly  text-white bg-black p-3">
        <div>
          <Image
            src={"/images/footer_logo.png"}
            alt={"Footer logo"}
            height={133}
            width={122}
          />
        </div>
        <div className=" flex flex-col gap-5">
          <Link href={""}>About us</Link>
          <Link href={""}>Projects</Link>
          <Link href={""}>Contact</Link>
        </div>
        <div className=" flex flex-col gap-4">
          <Link href={""}>Privacy Policy</Link>
          <Link href={""}>Terms & conditions </Link>
          <Link href={""}>Careers</Link>
        </div>
        <div className=" flex gap-4">
          <Image
            src={"/images/linkedin_logo.png"}
            alt={"Footer logo"}
            height={2}
            width={2}
          />
          <Image
            src={"/images/facebook_logo.png"}
            alt={"Footer logo"}
            height={2}
            width={2}
          />
          <Image
            src={"/images/Youtube_logo.png"}
            alt={"Footer logo"}
            height={2}
            width={2}
          />
          <Image
            src={"/images/insta_logo.png"}
            alt={"Footer logo"}
            height={2}
            width={2}
          />
        </div>
      </div>
      <div className=" text-white bg-black w-full  border-white p-5">
        <h1 className=" flex justify-center border-t-2">@Puje Group</h1>
      </div>
    </>
  );
};

export default Footer;
