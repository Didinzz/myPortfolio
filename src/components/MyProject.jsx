'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCardSkeleton from './ProjectCardSkeleton'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: 'easeOut',
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.6
        }
    }
};

const MyProject = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects')
                const json = await res.json()
                if (json.status === 200) {
                    setProjects(json.data)
                }
            } catch (error) {
                console.error('Network Error: ', error.message);
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    return (
        // 1. Jadikan <section> elemen biasa, HAPUS semua properti motion.
        <section
            id="projects"
            className="py-20 bg-gray-50"
        >
            <div className="container mx-auto px-4">
                {/* 2. Beri judul pemicu animasi sendiri */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent work and personal projects that showcase my skills and passion for development.</p>
                </motion.div>

                {/* 3. Logika loading */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, index) => (
                            <ProjectCardSkeleton key={index} />
                        ))}
                    </div>
                ) : projects.length === 0 ? (
                    <div className='text-center'>No projects found.</div>
                ) : (
                    // 4. Pindahkan pemicu animasi UTAMA ke sini, di grid
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                variants={itemVariants}
                            />
                        ))}
                    </motion.div>
                )}

                {/* 5. Beri tombol 'Load More' pemicu animasi sendiri */}
                <motion.div
                    className="text-center mt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                >
                    <Link href="/detail_projects"
                        className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all">
                        Load More...
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default MyProject