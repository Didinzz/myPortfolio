'use client'

import React from 'react'
import { FaSchool } from "react-icons/fa6";
import { motion } from 'framer-motion'; // 1. Impor motion
import { FaUniversity } from 'react-icons/fa';

// 2. Definisikan varian untuk animasi
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Memberi jeda animasi pada setiap anak
            ease: 'easeOut',
            duration: 0.5
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Mulai dari bawah
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.6
        }
    }
};


const AboutMe = () => {
    return (
        // 3. Ubah section menjadi motion.section dan terapkan varian
        <motion.section
            id="about"
            className="py-20 bg-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    variants={itemVariants}
                >
                    <span className="pb-2">About Me</span>
                </motion.h2>

                {/* Bungkus grid dengan motion.div agar animasinya berurutan */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    variants={containerVariants} // Gunakan container agar anak-anaknya stagger
                >
                    {/* Bungkus setiap kolom dengan motion.div */}
                    <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 mono">Who I Am</h3>
                        <p className="text-gray-700 leading-relaxed">
                            I am a full-stack developer who is passionate about creating efficient and user-friendly applications. With expertise in both frontend and backend technologies, I love the challenge of bringing ideas to life through code.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            My approach combines technical excellence with creative solutions to deliver solid results. I am always learning and keeping up with the latest technologies to continuously improve my skills in web development.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 mono">My Journey</h3>
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <FaSchool />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">School at MAN 1 Gorontalo City</h4>
                                    <p className="text-gray-600">2019-2022</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <FaUniversity />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Information System</h4>
                                    <p className="text-gray-600">Gorontalo State University, 2022-present</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default AboutMe