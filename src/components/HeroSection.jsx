import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16 bg-white hero-pattern">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7 order-2 md:order-1">
                        <div className="max-w-xl">
                            <div className="mb-4">
                                <span className="inline-block py-1 px-3 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-4">Didinzz Portfolio</span>
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animated-border">
                                    I'm  <span className="gradient-text">Didin Zakaria</span>
                                </h1>
                            </div>

                            <div className="flex items-center space-x-4 mb-8">
                                <div className="h-px bg-black w-12"></div>
                                <div className="role-badge bg-black text-white px-4 py-2 rounded-sm text-sm font-medium tracking-wider">
                                    <span className="typing-text">Developer</span><span className="cursor"></span>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                                I create elegant digital experiences with clean code and minimalist design. Focused on building applications that combine functionality with aesthetic simplicity.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="btn-primary bg-black text-white px-8 py-3 rounded-sm font-medium hover:bg-gray-800 transition-all">View Projects</a>
                                <a href="#contact" className="px-8 py-3 rounded-sm font-medium border-2 border-black hover:bg-black hover:text-white transition-all">Contact Me</a>
                            </div>

                            <div className="mt-12 flex items-center space-x-6">
                                <a href="#" className="text-gray-600 hover:text-black transition-all">
                                    <i className="fab fa-github text-xl"></i>
                                    <FaGithub className='text-xl'/>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black transition-all">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                    <FaLinkedin className='text-xl'/>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black transition-all">
                                    <i className="fab fa-twitter text-xl"></i>
                                    <FaTwitter className='text-xl'/>
                                </a>
                                <div className="h-6 w-px bg-gray-300"></div>
                                <a href="mailto:your.email@example.com" className="text-sm text-gray-600 hover:text-black transition-all">your.email@example.com</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right Column - Photo --> */}
                    <div className="md:col-span-4 order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-100 bg-opacity-50 transform rotate-6 rounded-lg"></div>
                            <div className="photo-frame bg-white p-4 shadow-xl transform -rotate-3 relative z-10">
                                <div className="w-full aspect-square overflow-hidden">
                                    {/* <!-- Placeholder for your photo --> */}
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                                        <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        <span className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">Your Photo Here</span>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Decorative elements --> */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-4 border-b-4 border-black"></div>
                            <div className="absolute -top-6 -left-6 w-16 h-16 border-l-4 border-t-4 border-black"></div>
                            <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-6 h-6 bg-black"></div>
                            <div className="absolute top-1/4 -left-10 transform -translate-y-1/2 w-4 h-4 rounded-full bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection