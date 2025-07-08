import React from 'react'
import { FaCss3, FaDatabase, FaGitAlt, FaGithub, FaGithubAlt, FaHtml5, FaJs, FaLaravel, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa6'
import { FiDatabase } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const MySkills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8 md:gap-12">
                    {/* <!-- Frontend --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaHtml5 className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">HTML5</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaCss3 className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">CSS3</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaJs className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">JavaScript</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaReact className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">React</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <RiNextjsFill className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">NextJs</span>
                    </div>

                    {/* <!-- Backend --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaNodeJs className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">Node.js</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaPhp className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">PHP</span>
                    </div>
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaLaravel className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">Laravel</span>
                    </div>

                    {/* <!-- Database --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaDatabase className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">MongoDB</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FiDatabase className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">SQL</span>
                    </div>

                    {/* <!-- Tools --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-git-alt text-3xl text-gray-700"></i>
                            <FaGitAlt className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">Git</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <FaGithub className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">GitHub</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <SiAdobephotoshop className='text-3xl text-gray-700' />
                        </div>
                        <span className="text-sm font-medium">Photoshop</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkills