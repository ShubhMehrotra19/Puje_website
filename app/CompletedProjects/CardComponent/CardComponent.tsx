import React from 'react'
import Image from 'next/image'  // Assuming you're using Next.js

interface CardProps {
  image: string
  name: string
}

const CardComponent = (props: CardProps) => {
  return (
    <div className=' flex  border-[#D7B56D] border-2 items-center p-4'>
      <Image
        src={props.image}
        alt="Blank"
        height={100}
        width={150}
        className="w-auto h-auto max-w-[75px] max-h-[75px] object-contain"
        />
      
      <h1 className=' pl-10'>{props.name}</h1>
    </div>
  )
}

export default CardComponent