import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-evenly text-white bg-black p-5">
          <Image
            src={"/images/footer_logo.png"}
            alt=''
            height={100}
            width={120}
          />
        <div className=" flex flex-col gap-5 p-2">
          <Link href='/'>About us</Link>
          <Link href='/'>Projects</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className=" flex flex-col gap-4 p-2">
          <Link href='/'>Privacy Policy</Link>
          <Link href='/'>Terms & conditions </Link>
          <Link href='/'>Careers</Link>
        </div>
        <div />
        <div className='flex justify-center items-center gap-3'>
          <Image
            src="/images/linkedin_logo.png"
            alt=''
            height={30}
            width={30}
            className="cursor-pointer"
          />
          <Image
            src="/images/facebook_logo.png"
            alt=''
            height={30}
            width={30}
            className="cursor-pointer"
          />
          <Image
            src="/images/Youtube_logo.png"
            alt=''
            height={30}
            width={30}
            className="cursor-pointer"
          />
          <Image
            src="/images/insta_logo.png"
            alt=''
            height={30}
            width={30}
            className="cursor-pointer"
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
