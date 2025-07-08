"use client"

import React, { useState } from 'react'
import { motion, scale } from "motion/react"

const cardFlip = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
}
const page = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className='w-full h-[100vh] flex justify-center items-center gap-2'>
            <motion.div className='perspective-[1000px]' onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div
                    variants={cardFlip}
                    initial="front"
                    animate={isFlipped ? "back" : "front"}
                    transition={{ duration: 0.5 }}
                    className='w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d'
                >
                    <motion.div className='absolute inset-0 bg-white flex items-center justify-center text-xl font-bold'>front side</motion.div>
                    <motion.div className='absolute inset-0 bg-blue-500 flex items-center justify-center text-white text-xl font-bold rotate-y-180'>back side</motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default page