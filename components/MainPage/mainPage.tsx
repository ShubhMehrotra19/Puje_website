"luse client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface Props {}

function MainPage(props: Props) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const updateWidth = () => setWidth(document.documentElement.clientWidth)
        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    return (
        <div className='flex flex-col items-center justify-center max-h-full'>
            <div className='h-[150px] w-full shadow-sm flex justify-center items-center'>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src='/images/P.png' width={50} height={47} alt='P' />
                        <Image src='/images/U.png' width={50} height={47} alt='U' />
                        <Image src='/images/J.png' width={38} height={44} alt='J' />
                        <Image src='/images/E.png' width={50} height={47} alt='E' />
                    </div>
                    <Image src='/images/group.png' height={22} width={240} alt='Group' />
                </div>
            </div>
            <div className='w-full h-[650px] relative'>
                <Image 
                    className='relative' 
                    src='/images/mainImage.png' 
                    height={100} 
                    width={width} 
                    alt=''
                />
                <div className='absolute top-0 left-40 inset-0 flex flex-col justify-center items-center w-fit'>
                    <Image src='/images/logo_puje.png' height={240} width={160} alt='Logo' />
                    <p className='font-[beaufort] text-center text-white text-5xl uppercase leading-tight tracking-wider'>
                        Redefining <br /> Realty
                    </p>
                </div>
                <Image className=' absolute inset-0 top-[80%] left-1/2 cursor-pointer' src="/images/logoPuje.png" height={150} width={60} alt='' />
            </div>
        </div>
    )
}

export default MainPage
