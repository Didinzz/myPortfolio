'use client'

import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import HeroInformationTitle from './HeroInformationTitle';
import HeroInformationRotatingText from './HeroInformationRotatingText';
import HeroInformationDescription from './HeroInformationDescription';
import HeroInformationButton from './HeroInformationButton';
import HeroInformationLinks from './HeroInformationLinks';
import { motion } from 'framer-motion'

const heroContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.35
        }
    }
}

const fadeLeftItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
        }
    }
}
const HeroInformation = () => {
    return (
        <motion.div
            className="md:col-span-7 order-2 md:order-1"
            variants={heroContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="max-w-xl space-y-6">
                <motion.div variants={fadeLeftItem}>
                    <HeroInformationTitle />
                </motion.div>

                <motion.div variants={fadeLeftItem}>
                    <HeroInformationRotatingText />
                </motion.div>

                <motion.div variants={fadeLeftItem}>
                    <HeroInformationDescription />
                </motion.div>

                <motion.div variants={fadeLeftItem}>
                    <HeroInformationButton />
                </motion.div>

                <motion.div variants={fadeLeftItem}>
                    <HeroInformationLinks />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HeroInformation