"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroImage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const photoFrameVariants = {
        hidden: {
            opacity: 0,
            rotate: -20,
            y: 50
        },
        visible: {
            opacity: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                type: "spring",
                bounce: 0.3
            }
        }
    };

    const backgroundVariants = {
        hidden: {
            opacity: 0,
            rotate: 0,
            scale: 0.8
        },
        visible: {
            opacity: 0.5,
            rotate: 6,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const decorativeVariants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "backOut",
                type: "spring"
            }
        }
    };

    const pulseAnimation = {
        scale: [1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const rotateAnimation = {
        rotate: [0, 360],
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }
    };

    if (!isLoaded) return null
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md mx-auto lg:mx-0">
                {/*  Background */}
                <motion.div variants={backgroundVariants}
                    animate={{ rotate: [6, 12, 6], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 transform rotate-6 rounded-lg" />

                <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"
                    animate={floatingAnimation}
                />

                <motion.div
                    variants={photoFrameVariants}
                    whileHover={{ rotate: 3, scale: 1.03, transition: { duration: 0.3 } }}
                    className="photo-frame bg-white p-3 sm:p-4 md:p-5 shadow-xl transform -rotate-3 relative z-10 h-full">

                    <div className="w-full h-full overflow-hidden relative rounded">
                        <Image
                            src="/images/profile.jpg"
                            alt="Your Photo"
                            fill
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 384px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 
                               w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
                               border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4 border-gray-800"
                    variants={decorativeVariants}
                    animate={{
                        rotate: [0, 5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                <motion.div
                    className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 
                               w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                               border-l-2 sm:border-l-3 md:border-l-4 border-t-2 sm:border-t-3 md:border-t-4 border-gray-800"
                    variants={decorativeVariants}
                    animate={{
                        rotate: [0, -5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* Right floating square */}
                <motion.div
                    className="absolute top-1/2 -right-5 sm:-right-6 md:-right-8 lg:-right-10 transform -translate-y-1/2 
                               w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm shadow-lg"
                    variants={decorativeVariants}
                    animate={{
                        ...pulseAnimation,
                        y: [-10, 10, -10]
                    }}
                    transition={{
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3
                        }
                    }}
                    whileHover={{
                        rotate: 45
                    }}
                />

                <motion.div
                    className="absolute top-1/4 -left-5 sm:-left-6 md:-left-8 lg:-left-10 transform -translate-y-1/2 
                               w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                    variants={decorativeVariants}
                    animate={{
                        ...pulseAnimation,
                        y: [-10, 10, -10]
                    }}
                    transition={{
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3
                        }
                    }}
                    whileHover={{
                        rotate: 45
                    }}
                />
                <motion.div
                    className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full"
                    animate={{
                        y: [0, 15, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>
        </motion.div>
    )
}

export default HeroImage