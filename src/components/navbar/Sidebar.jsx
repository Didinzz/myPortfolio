// src/components/Navbar/Sidebar.jsx
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Varian animasi tetap sama
const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
};

const listVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
    open: { x: 0, opacity: 1, transition: { x: { stiffness: 1000, velocity: -100 } } },
    closed: { x: 50, opacity: 0, transition: { x: { stiffness: 1000 } } },
};

// Definisikan item menu dalam array agar mudah dikelola
const navigationItems = [
    {name: "Home", url: "/#home"},
    {name: "Projects", url: "/#projects"},
    {name: "Skills", url: "/#skills"},
    // {name: "GitHub", url: "/#github"},
    {name: "Contact", url: "/#contact"},
];
const socialLinks = [
    { name: "Github", url: "https://github.com/Didinzz" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/didin-septyadi-zakaria-9b9988217/" },
    { name: "Instagram", url: "https://www.instagram.com/ddn_zkria/" },
    { name: "Email", url: "mailto:didin_s1sisfo@mahasiswa.ung.ac.id" }
];

const Sidebar = ({ isOpen, closeMenu }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                    />

                    {/* Kontainer Sidebar */}
                    <motion.div
                        className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-100 shadow-xl z-40"
                        variants={sidebarVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {/* Wrapper untuk konten dengan padding dan flexbox */}
                        <motion.div
                            className="flex flex-col justify-between h-full p-10"
                            variants={listVariants}
                        >
                            {/* Grup Navigasi Utama */}
                            <div className="flex flex-col gap-6">
                                <motion.p variants={itemVariants} className="text-gray-500 text-sm">Navigation</motion.p>
                                <hr className="border-gray-300" />
                                <ul className="flex flex-col gap-4">
                                    {navigationItems.map((item, index) => (
                                        <motion.li key={index} variants={itemVariants}>
                                            <motion.a
                                                href={item.url}
                                                onClick={closeMenu}
                                                className="text-4xl font-medium text-gray-800 block"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {item.name}
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Grup Link Bawah */}
                            <div className="flex flex-col gap-6">
                                <motion.p variants={itemVariants} className="text-gray-500 text-sm">Links</motion.p>
                                <hr className="border-gray-300" />
                                <motion.div variants={itemVariants} className="flex flex-wrap gap-x-4 gap-y-2">
                                    {socialLinks.map((link, index) => (
                                        <a key={index} href={link.url} className="text-sm text-gray-600 hover:text-black">
                                            {link.name}
                                        </a>
                                    ))}
                                </motion.div>

                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;