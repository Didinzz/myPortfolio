"use client"

import React from 'react'
import { motion } from "motion/react"

const navLinks = ['Home', 'Projects', 'Skills', 'GitHub', 'Contact']

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const item = {
    hidden: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } },
}


const NavbarLinks = () => {
    return (
        <motion.div
            className="hidden md:flex space-x-8"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {navLinks.map((label) => (
                <motion.a
                    key={label}
                    variants={item}
                    href={`#${label.toLowerCase()}`}
                    className="nav-link font-medium text-gray-700 hover:text-black transition duration-200"
                >
                    {label}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default NavbarLinks