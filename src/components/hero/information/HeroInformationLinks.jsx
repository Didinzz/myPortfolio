import React from 'react'
import { FaGithub, FaLinkedin, FaRegFileCode } from "react-icons/fa6";


const HeroInformationLinks = () => {
    return (
        <div className="mt-12 flex items-center space-x-6">
            <a href="https://github.com/Didinzz" className="text-gray-600 hover:text-black transition-all">
                <FaGithub className='text-xl' />
            </a>
            <a href="https://www.linkedin.com/in/didin-septyadi-zakaria-9b9988217/" className="text-gray-600 hover:text-black transition-all">
                <FaLinkedin className='text-xl' />
            </a>
            <div className="h-6 w-px bg-gray-300"></div>
            <a href="mailto:didin_s1sisfo@mahasiswa.ung.ac.id" className="text-sm text-gray-600 hover:text-black transition-all">didin_s1sisfo@mahasiswa.ung.ac.id</a>
        </div>
    )
}

export default HeroInformationLinks