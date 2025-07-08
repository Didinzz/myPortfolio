"use client"
import React from 'react'
import { motion } from "motion/react"
import NavbarHome from './NavbarHome'
import NavbarLinks from './NavbarLinks'
import NavbarButton from './NavbarButton'


const Navbar = () => {
    return (
        <nav className="fixed w-full">
            <div className=" px-8 py-4  flex justify-between items-center">
                <NavbarHome />
                {/* <NavbarLinks /> */}
               <NavbarButton />
            </div>
            <div className="md:hidden hidden bg-white w-full" id="mobile-menu">
                <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                    <a href="#home" className="font-medium">Home</a>
                    <a href="#projects" className="font-medium">Projects</a>
                    <a href="#skills" className="font-medium">Skills</a>
                    <a href="#github" className="font-medium">GitHub</a>
                    <a href="#contact" className="font-medium">Contact</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar