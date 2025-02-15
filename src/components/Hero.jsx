import React from 'react'
import { HERO } from '../constants';
import myImg from '../assets/abdo.jpg';
const Hero = () => {
    return (
        <section className='flex min-h-screen flex-col md:flex-row items-center'>

            <div className="w-full md:w-1/2">
                <h2 className='p-1 md:p-2 text-2xl font-bold md:text-5xl lg:text-8xl'>
                    {HERO.name}
                </h2>
                <p className='p-1 md:p-2 text-xl tracking-tighter lg:text-4xl'>
                    {HERO.greet}
                </p>
                <p className='mb-4 p-1 md:p-2 text-sm'>
                    {HERO.description}
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:p-8 h-full flex items-center">
                <div className="flex justify-center">
                    <img src={myImg} alt="my_img" width={550} height={550} className='rounded-3xl' />
                </div>
            </div>
        </section>
    )
}

export default Hero;