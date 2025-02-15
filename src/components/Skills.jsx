import React from 'react'
import { SKILLS } from '../constants'

const Skills = () => {
    return (
        <div className="container mx-auto text-white" id='skills'>
            <h2 className='lg:mb-12 lg:mt-20 my-8 text-center text-4xl font-semibold'>Skills</h2>
            <div className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30 ">
                {
                    SKILLS.map((s,index) => {
                        return <div className='py-6 flex items-center justify-between border-b border-stone-50/30' key={index}>
                            <div className="flex items-center">{s.icon}
                                <h3 className='px-3 text-base lg:text-2xl '>{s.name}</h3>
                            </div>
                            <div className="font-semibold lg:text-xl">
                                {s.experience}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills