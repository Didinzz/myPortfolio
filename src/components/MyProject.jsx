'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

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
                } else {
                    console.error('Fecth Error: ', json.message);
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
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent work and personal projects that showcase my skills and passion for development.</p>
                </div>
                {loading ? (
                    <p className='text-center'>Loading....</p>
                ) : projects.length === 0 ? (
                    <p className='text-center'>No projects found.</p>
                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            // <div className="project-card bg-white rounded-lg overflow-hidden" key={index}>
                            //     <div className="h-48 bg-gray-200 flex items-center justify-center">
                            //         {/* <i className="fas fa-laptop-code text-5xl text-gray-400"></i> */}
                            //         {project.image ? (
                            //             <Image
                            //                 src={project.image}
                            //                 alt={project.title}
                            //                 width={500}
                            //                 height={500}
                            //                 className="w-full h-full object-cover"
                            //             />
                            //         ) : (
                            //             <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            //                 <FaLaptop className='text-gray-400 w-20 h-20' />
                            //             </div>
                            //         )}
                            //     </div>
                            //     <div className="p-6">
                            //         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            //         <p className="text-gray-600 mb-4">{project.description}</p>
                            //         <div className="flex flex-wrap gap-2 mb-4">
                            //             {project.tech.map((item, index) => (
                            //                 <span key={index} className="px-3 py-1 bg-gray-100 text-sm rounded-full">{item}</span>
                            //             ))}
                            //         </div>
                            //         <div className="flex justify-between">
                            //             <a href={project.demo ?? "#"} className="text-black hover:underline flex items-center">
                            //                 <span>View Project</span>
                            //                 <i className="fas fa-arrow-right ml-2"></i>
                            //                 <FaArrowRight className='ml-2' />
                            //             </a>
                            //             <a href={project.source_code ?? "#"} className="text-black hover:underline">
                            //                 <FaGithub className='text-xl' />
                            //             </a>
                            //         </div>
                            //     </div>
                            // </div>
                            <ProjectCard project={project} key={index} />
                        ))}
                    </div>

                )}

                <div className="text-center mt-12">
                    <Link href="/detail_projects"
                        className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MyProject