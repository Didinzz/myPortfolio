"use client"
import React, { useState } from 'react'
import TopBar from './TopBar'
import Sidebar from './Sidebar'


const Navbar = () => {
    // State tetap di sini sebagai "single source of truth"
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed w-full top-0 left-0 z-[70]">
            <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} closeMenu={closeMenu} />
        </nav>

    )
}

export default Navbar