"use client";
import React from 'react'
import Image from 'next/image'  
import { Fade } from 'react-awesome-reveal'


interface CardProps {
  image: string
  name: string
}

const CardComponent = (props: CardProps) => {
  return (
    <div className="px-4 md:px-0"> 
      <div className='flex border-[#D7B56D] border-2 items-center md:p-4 p-2 max-w-3xl mx-auto'>
      <Fade  triggerOnce>
        <Image
          src={props.image}
          alt="Blank"
          height={100}
          width={150}
          className="w-auto h-auto max-w-[75px] max-h-[75px] object-contain"
        />
        </Fade>
        <Fade direction="up" triggerOnce>
        <h1 className='pl-10'>{props.name}</h1>
        </Fade>
      </div>
    </div>
  )
}

export default CardComponent