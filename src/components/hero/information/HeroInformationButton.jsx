import React from 'react'
import Magnet from '../../Animate/Magnet';
import ShinyText from '../../Animate/ShinyText';
import {FaRegFileCode } from "react-icons/fa6";

const HeroInformationButton = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <a href="#projects" className=" bg-black text-white px-8 py-3 rounded-sm font-medium">
                <Magnet padding={10} magnetStrength={6}>
                    <ShinyText text={"Projects"} disabled={false} speed={3} />
                </Magnet>
            </a>
            <div className="px-8 py-3 rounded-sm font-medium border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer">
                <Magnet padding={10} magnetStrength={8}>
                    <span className="flex items-center space-x-2">
                        <FaRegFileCode className='text-xl' />
                        <span>Resume</span>
                    </span>
                </Magnet>
            </div>
        </div>

    )
}

export default HeroInformationButton