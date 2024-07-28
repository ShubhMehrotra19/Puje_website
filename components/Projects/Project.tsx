"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface ProjectDetails {
  heading: string | null;
  subheading: string | null;
  subheading1: string | null;
  content1: string | null;
  subheading2: string | null;
  content2: string | null;
  content: string;
  max: boolean;
}

const Project = ({
  heading,
  subheading,
  subheading1,
  content1,
  subheading2,
  content2,
  content,
  max,
}: ProjectDetails) => {
  let className = "max-w-[40ch]";

  if (!max) {
    className = "";
  }

  return (
    <div className="flex flex-col gap-2 border-[#D7B56D] border-2 md:border-0 text-xs md:text-base p-2 md:p-0 mx-4 my-2 md:mx-0 md:my-0">
      {heading && (
        <Fade triggerOnce direction="up">
          <p className="md:text-3xl text-[#D7B56D] text-base md:border-b-[1px] border-[#D7B56D] font-semibold md:font-normal">
            {heading}
          </p>
        </Fade>
      )}
      {subheading && (
        <Fade triggerOnce direction="up">
          <div className="flex gap-2 text-[#D7B56D] md:text-xl text-xs items-center pl-2">
            <p className="md:text-4xl text-xl pb-1">•</p>
            <p>{subheading}</p>
          </div>
        </Fade>
      )}
      <Fade triggerOnce direction="up">
        <p className={className}>{content}</p>
      </Fade>
      {subheading1 && (
        <Fade triggerOnce direction="up">
          <div className="flex gap-2 text-[#D7B56D] md:text-xl text-xs items-center pl-2">
            <p className="md:text-4xl text-xl pb-1">•</p>
            <p>{subheading1}</p>
          </div>
        </Fade>
      )}
      <Fade triggerOnce direction="up">
        <p className={className}>{content1}</p>
      </Fade>
      {subheading2 && (
        <Fade triggerOnce direction="up" cascade>
          <div className="flex gap-2 text-[#D7B56D] md:text-xl text-xs items-center pl-2">
            <p className="md:text-4xl text-xl pb-1">•</p>
            <p>{subheading2}</p>
          </div>
        </Fade>
      )}
      <Fade triggerOnce direction="up">
        <p className={className}>{content2}</p>
      </Fade>
    </div>
  );
};

export default Project;
