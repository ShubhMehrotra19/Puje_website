import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string;
}

function Menu({ className }: Props) {
    return (
        <div className={`relative w-screen h-screen z-20 ${className} bg-gradient-to-b from-[#7dacc0] via-[#d2d7d3] to-[#eedab7] flex justify-between items-center`}>
            <div className='w-1/2 flex flex-col pl-8 gap-5 justify-start items-start'>
                <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 active:scale-95 hover:border-b-2 hover:border-white/60 transition-all duration-300'>Home</p>
                <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 active:scale-95 hover:border-b-2 hover:border-white/60 transition-all duration-300'>Projects</p>
                <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 active:scale-95 hover:border-b-2 hover:border-white/60 transition-all duration-300'>About Us</p>
                <p className='font-["beaufort"] pb-2 text-4xl uppercase cursor-pointer text-white hover:scale-105 active:scale-95 hover:border-b-2 hover:border-white/60 transition-all duration-300'>Contact Us</p>
            </div>
            <div className='w-1/2 relative h-full'>
              <Image src='/images/menuImage.png' alt='' fill className='object-contain h-full' style={{ objectPosition: 'right' }} />
            </div>
        </div>
    )
}

export default Menu;
