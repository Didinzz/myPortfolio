'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { delay, motion } from 'framer-motion'
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';

// Varian animasi tidak perlu diubah
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: 'easeOut' }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.6 }
  }
};

const Page = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const json = await res.json();
        if (json.status === 200) {
          setProjects(json.data);
        }
      } catch (error) {
        console.error('Network Error: ', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      {/* Tambahkan animasi motion dari atas ke bawah pada header */}
      <motion.header
        className="pt-32 pb-16 bg-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              A collection of my work showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>
        </div>
      </motion.header>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <p className='text-center'>No projects found.</p>
          ) : (
            // 2. Pindahkan SEMUA properti animasi ke sini
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {projects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.id}
                  variants={itemVariants}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

export default Page;