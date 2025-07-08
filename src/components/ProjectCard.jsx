import React from 'react'
import { FaArrowRight, FaGithub, FaLaptop } from 'react-icons/fa6'
import Image from 'next/image'
import '../app/projectCard.css'
import { FaExternalLinkAlt } from 'react-icons/fa'


const ProjectCard = ({ project }, index) => {
    return (
        <div className="project-card bg-white rounded-xl overflow-hidden shadow-lg" key={index}>
            <div className="project-image h-64 bg-gray-200">
                {/* <!-- Project image --> */}
                <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-full object-cover" />
                {/* <!-- Overlay with quick actions --> */}
                <div className="project-overlay">
                    <div className="project-actions flex space-x-3">
                        <a href={project.source_code ?? '#'} className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all">View Details</a>
                        <a href={project.demo ?? '#'} target="_blank" className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all">Live Demo</a>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {/* <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span> */}
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tag, index) => (
                        <span className="tech-tag px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium" key={index}>{tag}</span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
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
        </div>
    );
}

export default ProjectCard