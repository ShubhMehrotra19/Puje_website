"use client";
import React from 'react'
import Image from "next/image";
import CardComponent from './CardComponent/CardComponent';
import { Fade } from 'react-awesome-reveal';


const CompletedProjects = () => {
  return (
    <div className=' mb-24'>
        <div className=' border-b-[2px] border-[#C9C9C9] pl-20 pt-8 pb-12 mb-10'>
        <Fade triggerOnce>
              
        <Image
              src="/images/Completed_1.png"
              alt="Sculpted"
              height={162}
              width={350}
            />
            </Fade>  
        </div>
        <div className=' flex flex-col  gap-20 uppercase '>
        <div className='w-full flex justify-center md:p-0 px-2'>
            <Fade direction='up' triggerOnce>
                <p className=' capitalize text-center'>We have executed & handed over with Occupation Certificate all our projects.</p>
                </Fade>
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