// src/components/Navbar/TopBar.jsx
"use client";

import React from 'react';
import NavbarHome from './NavbarHome';
import NavbarButton from './NavbarButton';

const TopBar = ({ isOpen, setIsOpen }) => {
    return (
        <header className="relative px-8 py-4 flex justify-between items-center bg-transparent z-50">
            <NavbarHome />
            <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default TopBar;