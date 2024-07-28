import React from "react";
import Image from "next/image";
import Project from "@/components/Projects/Project";

const ProjectsPage = () => {
  const compProjects = [
    {
      heading: "CHAITYA TOWER",
      subheading: null,
      content:
        "Situated at Mazgaon, a Stilt + 16 storeyed Tower with Korean-Made Capsule Elevators. One of the Landmark buildings in South Mumbai due to Elevation, Workmanship and Landscaping.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "CHAITYA DERASAR",
      subheading: null,
      content:
        "A White Makrana Marble Jain Temple has been constructed in the same compound almost 20 years ago.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "DARSHAN CONSTRUCTION",
      subheading: "Shankheshwar Darshan",
      content:
        "A Stilt + 18 storeyed Tower in Seth Motisha Lane, Byculla. Also, a Ground + 7 storeyed Building has been completed in the same Compound alongwith a school built for M.C.G.M. In the same premises another Ground + 7 storeyed building for the Tenants/Occupants has been constructed. Possession has been handed over to the flat owners. The project was completed in 2005.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "JAINAM CONSTRUCTION",
      subheading: "Jupiter",
      content:
        "Situated at Nesbit Road, Mazgaon, this project has a completed Basement + Stilt + 23 storeyed Tower. In addition to the residential & tenant towers, a commercial tower has also been developed in the same compound. The project was duly completed in 2008.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "DARSHAN CONSTRUCTIONS",
      subheading: "Darshan Heights",
      content:
        "A residential project of Stilt + 20 storeyed Tower situated at Thakurdwar, behind Ram Mandir. This building was completed in 2007.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "SHANKHESHWAR CONSTRUCTION",
      subheading: "Navkar Darshan",
      content:
        "Two buildings (1) A stilt + 14 storeyed Tower & (2) a Stilt + 7 storeyed Tower was completed and possession was handed over to the flat owners in 2002.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "DARSHAN",
      subheading: null,
      content:
        "A Ground + 7 storeyed commercial building situated at Fort was completed in 2003.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
    {
      heading: "J GALA BUILDERS",
      subheading: "Meru",
      content:
        "A Stilt + 23 storeyed tower consisting of two wings situated at Lalbaug has been completed and possession has been handed over. In addition to it, three buildings consisting of 2 wings each of stilt + 7 floors were built for the Tenants/Occupants.",
      max: false,
      subheading1: "Shilp",
      subheading2: "Jaihind Mukta A2 Cinemas",
      content1:
        " A Ground +18 storeyed Tower at Lower Parel has been completed and handed over..",
      content2:
        "In the heart of Lalbaug a 2 Screen Theatre has also been made & is still owned by us. It is one of the most successful running movie theatre in the vicinity.",
    },
    {
      heading: "J GALA ENTERPRISE",
      subheading: "Arham",
      content:
        "Two wings of stilt + 32 storeyed has been completed & handed over.",
      max: false,
      subheading1: "Arohi",
      subheading2: null,
      content1:
        "  A Sale Tower having 54 floors is under construction & is at plinth stage. This tower alone has almost a 1 million sq.ft. constructed area.",
      content2: null,
    },
    {
      heading: "DARSHAN DEVELOPERS",
      subheading: "Rushab Tower",
      content:
        "A Ground + 28 storeyed Tower has been completed in Byculla and possession has been handed over to the Residents.",
      max: false,
      subheading1: "Parshwa Darshan",
      subheading2: "Ganesh Darshan",
      content1:
        "  A Ground + 7 storeyed Building created solely for the Tenants consisting of 2 wings has been completed.",
      content2:
        "A Ground + 7 storeyed Building created solely for the Tenants consisting of 2 wings has been completed.",
    },
    {
      heading: " CHAITYA DEVELOPERS",
      subheading: "Chaitva 777 Rehab Wings:",
      content:
        "In the same compound, 2 Tenant Buildings of Stilt + 20 Floors have been completed & handed over recently.",
      max: false,
      subheading1: null,
      subheading2: null,
      content1: null,
      content2: null,
    },
  ];

  return (
    <div className="md:container md:mx-auto md:px-4 w-full md:relative">
      {/* laptop design */}

      <div className="hidden md:block w-full">
        <div className="absolute left-1/2 top-1/3 scale-150 hidden md:block">
          <Image
            src="/images/logo_bgless.png"
            alt="logo"
            height={200}
            width={100}
          />
        </div>
        <div className="absolute left-1/2 bottom-36 scale-150 hidden md:block">
          <Image
            src="/images/logo_bgless.png"
            alt="logo"
            height={200}
            width={100}
          />
        </div>
        <div className="border-b-[2px] border-[#C9C9C9] py-8 mb-10">
          <Image
            src="/images/Completed_1.png"
            alt="Sculpted"
            height={162}
            width={350}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col gap-14">
          <p className="text-center">
            We have executed & handed over with Occupation Certificate all our
            projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-20 max-w-7xl mx-auto">
            <Project
              heading={"CHAITYA TOWER"}
              subheading={null}
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              content="a Stilt + 16 storeyed Tower in Mazgaon."
              max={true}
            />
            <Project
              heading={"CHAITYA DERASAR"}
              subheading={null}
              content="A White Makrana Marble Jain Temple has been constructed in the same compound almost 20 years ago."
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={true}
            />
            <Project
              heading={"DARSHAN CONSTRUCTION"}
              subheading={"Shankeshwar Darshan"}
              content="A Stilt + 18 storeyed Tower and a G + 7 storeyed Building  In Byculla. "
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={true}
            />
            <Project
              heading={"JAINAM CONSTRUCTION"}
              subheading={"Jupiter"}
              content="Basement + Stilt + 23 storeyed Tower In Mazgaon"
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={true}
            />
            <Project
              heading={"DARSHAN CONSTRUCTIONS"}
              subheading={"Darshan Heights"}
              content="Stilt + 20 storeyed Tower in Thakurdwar"
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={true}
            />
            <Project
              heading={"DARSHAN"}
              subheading={null}
              content="Ground + 7 storeyed commercial building in Fort"
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={true}
            />
          </div>
          <div className="max-w-7xl mx-52">
            <Project
              heading={"DARSHAN BUILDER"}
              subheading={"Meru Tower"}
              content="Stilt + 13 storeyed residential building and two G + 7 storeyed buildings for tenants in Mumbai Central."
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={false}
            />
          </div>
          <div className="max-w-7xl mx-52 flex flex-col gap-20">
            <Project
              heading={"DARSHAN BUILDER"}
              subheading={"Meru Tower"}
              content="Stilt + 13 storeyed residential building and two G + 7 storeyed buildings for tenants in Mumbai Central."
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={false}
            />
            <div className="flex flex-col gap-10">
              <Project
                heading={"J GALA BROTHERS"}
                subheading={"Meru"}
                content="Stilt + 23 storeyed tower in Lalbaug"
                subheading1={null}
                subheading2={null}
                content1={null}
                content2={null}
                max={false}
              />
              <div className="flex justify-end w-full pr-24">
                <Project
                  heading={null}
                  subheading={"Jaihind Mukta A2 Cinemas"}
                  content="2 Screen Theatre in Lalbaug"
                  subheading1={null}
                  subheading2={null}
                  content1={null}
                  content2={null}
                  max={false}
                />
              </div>
              <Project
                heading={null}
                subheading={"Shilp"}
                content="G +18 storeyed Tower in Lower Parel"
                subheading1={null}
                subheading2={null}
                content1={null}
                content2={null}
                max={false}
              />
            </div>
            <div className="flex justify-between pr-32">
              <Project
                heading={"J GALA ENTERPRISE"}
                subheading={"Arham"}
                content="Stilt + 32 storeyed tower"
                subheading1={null}
                subheading2={null}
                content1={null}
                content2={null}
                max={false}
              />
              <div className="flex items-end">
                <Project
                  heading={null}
                  subheading={"Arohi"}
                  content="Sale Tower having 54 floors in."
                  subheading1={null}
                  subheading2={null}
                  content1={null}
                  content2={null}
                  max={false}
                />
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-between">
              <div className="flex justify-between pr-44">
                <Project
                  heading={"DARSHAN DEVELOPERS"}
                  subheading={"Rushab Tower"}
                  content="G + 28 storeyed Tower in Byculla "
                  subheading1={null}
                  subheading2={null}
                  content1={null}
                  content2={null}
                  max={false}
                />
                <div className="flex items-end">
                  <Project
                    heading={null}
                    subheading={"Parshwa Darshan"}
                    content="G+7 storeyed Building in"
                    subheading1={null}
                    subheading2={null}
                    content1={null}
                    content2={null}
                    max={false}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <Project
                  heading={null}
                  subheading={"Ganesh Darshan"}
                  content="G + 7 storeyed Building  "
                  subheading1={null}
                  subheading2={null}
                  content1={null}
                  content2={null}
                  max={false}
                />
                <div className="flex items-end">
                  <Project
                    heading={null}
                    subheading={"Parking & Amenity Tower"}
                    content="Ground +7 Storeyed Parking and amenity Tower"
                    subheading1={null}
                    subheading2={null}
                    content1={null}
                    content2={null}
                    max={true}
                  />
                </div>
              </div>
            </div>
            <Project
              heading={"CHAITYA DEVELOPERS"}
              subheading={"Chaitva 777 Rehab Wings:"}
              content="Stilt + 20 Floors in"
              subheading1={null}
              subheading2={null}
              content1={null}
              content2={null}
              max={false}
            />
          </div>
        </div>
      </div>

      {/* mobile design */}

      <div className="md:hidden w-full">
        <div className="border-b-[2px] border-[#C9C9C9] py-8 mb-10">
          <Image
            src="/images/Completed_1.png"
            alt="Sculpted"
            height={162}
            width={350}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col gap-1">
          {compProjects.map((proj) => (
            <Project
              heading={proj.heading}
              subheading={proj.subheading}
              subheading1={proj.subheading1}
              subheading2={proj.subheading2}
              content1={proj.content1}
              content2={proj.content2}
              max={proj.max}
              content={proj.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
