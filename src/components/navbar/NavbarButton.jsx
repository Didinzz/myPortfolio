// src/components/NavbarButton.jsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { RiMenu4Line } from "react-icons/ri";
import Magnet from '../Animate/Magnet'

const buttonVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.6, ease: 'easeOut', delay: 0.8 } },
}

// 1. Terima props isOpen dan setIsOpen
const NavbarButton = ({ isOpen, setIsOpen }) => {
    // 2. Hapus useState dari sini
    // const [isOpen, setIsOpen] = useState(false)

    return (
        <Magnet padding={10} magnetStrength={7}>
            <motion.button
                // 3. Gunakan setIsOpen dari props untuk mengubah state di komponen induk
                onClick={() => setIsOpen(prev => !prev)}
                className="cursor-pointer bg-zinc-100 w-10 h-10 flex items-center justify-center rounded-full"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={isOpen ? 'x' : 'menu'}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.25 }}>
                        {/* Variabel isOpen sekarang berasal dari props */}
                        {isOpen ? <X className="w-6 h-6" /> : <RiMenu4Line className="w-6 h-6" />}
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </Magnet>
    )
}

export default NavbarButton