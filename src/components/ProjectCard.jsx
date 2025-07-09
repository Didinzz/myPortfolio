import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../app/projectCard.css';
import { motion } from 'framer-motion' // 1. Impor motion


// Terima `project` sebagai prop
const ProjectCard = ({ project, variants }) => {
    return (
        // 1. Tambahkan `flex flex-col` pada div utama kartu
        <motion.div variants={variants} className="project-card bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="project-image h-64 bg-gray-200">
                <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-full object-cover" />
                <div className="project-overlay">
                    <div className="project-actions flex space-x-3">
                        <a href={project.source_code ?? '#'} className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all">View Details</a>
                        <a href={project.demo ?? '#'} target="_blank" className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all">Live Demo</a>
                    </div>
                </div>
            </div>

            {/* 2. Tambahkan `flex flex-col flex-1` agar area konten ini mengisi sisa ruang */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tag, index) => (
                        <span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium" key={index}>{tag}</span>
                    ))}
                </div>

                {/* 3. Tambahkan `mt-auto` agar bagian bawah ini selalu menempel di dasar kartu */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <a href={project.demo ?? '#'} className="text-black font-medium hover:underline">View Project</a>
                    <div className="flex space-x-3">
                        <a href={project.source_code ?? '#'} className="text-gray-500 hover:text-black transition-all">
                            <FaGithub />
                        </a>
                        <a href={project.demo ?? '#'} className="text-gray-500 hover:text-black transition-all">
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;