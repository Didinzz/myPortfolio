'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.6, ease: 'easeOut', delay: 0.8 } },
}

const NavbarHome = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="text-2xl font-bold tracking-tighter flex items-center gap-1 group"
    >
      <Link href="/" className="flex items-center gap-1 group">
        <motion.div
          whileHover={{ rotate: 12 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="inline-block"
        >
          <span className="gradient-text">&lt;/&gt;</span>
        </motion.div>
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="hidden md:inline"
        >
          Portfolio
        </motion.span>
      </Link>
    </motion.div>
  )
}

export default NavbarHome
