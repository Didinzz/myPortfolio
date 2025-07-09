'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPhp, FaLaravel,
    FaDatabase, FaGitAlt, FaGithub
} from 'react-icons/fa6'
import { FiDatabase } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

// 1. Data skill dalam bentuk array agar lebih rapi
const skillsData = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "SQL", icon: <FiDatabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
];

// 2. Varian animasi (sama seperti sebelumnya)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
};


const MySkills = () => {
    return (
        // 3. Terapkan motion pada container utama
        <motion.section
            id="skills"
            className="py-20 bg-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="container mx-auto px-6">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                {/* 4. Gunakan .map() untuk merender setiap skill secara dinamis */}
                <motion.div
                    className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8 md:gap-12"
                    variants={containerVariants}
                >
                    {skillsData.map((skill) => (
                        // 5. Setiap item di dalam map dijadikan motion.div
                        <motion.div
                            key={skill.name}
                            className="skill-icon flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3 text-3xl text-gray-700">
                                {skill.icon}
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default MySkills