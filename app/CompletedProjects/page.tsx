import React from 'react'
import Image from "next/image";
import CardComponent from './CardComponent/CardComponent';

const CompletedProjects = () => {
  return (
    <div className=' mb-24'>
        <div className=' border-b-[2px] border-[#C9C9C9] pl-20 pt-8 pb-12 mb-10'>
        <Image
              src="/images/Completed_1.png"
              alt="Sculpted"
              height={162}
              width={350}
            />
        </div>
        <div className=' flex flex-col  gap-20 uppercase '>
        <div className='w-full flex justify-center md:p-0 px-2'>
                <p className=' capitalize text-center'>We have executed & handed over with Occupation Certificate all our projects.</p>
        </div>
          <div className=' flex justify-evenly text-[#D7B56D] md:flex-row flex-col md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
          <div className=' flex justify-evenly text-[#D7B56D]  md:flex-row flex-col  md:gap-0 gap-20'>
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
              <CardComponent 
              image='/images/Blank.png'
              name='Darshan Constructions'
              />
          </div>
        </div>
    </div>
  )
}

export default CompletedProjects