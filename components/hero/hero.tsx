import React from 'react'

interface Props {}

function Hero(props: Props) {
    const {} = props

    return (
        <div className='h-[700px] w-full flex justify-center items-center'>
            <p className='font-["beaufort"] font-medium text-6xl text-center leading-normal uppercase text-[#D7B56D]'>
                Redefining <br /> Realty
            </p>
        </div>
    )
}

export default Hero
