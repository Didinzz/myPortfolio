import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tighter">
                    <span className="gradient-text">&lt;/&gt;</span> <span className="hidden md:inline">Portfolio</span>
                </a>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="nav-link font-medium">Home</a>
                    <a href="#projects" className="nav-link font-medium">Projects</a>
                    <a href="#skills" className="nav-link font-medium">Skills</a>
                    <a href="#github" className="nav-link font-medium">GitHub</a>
                    <a href="#contact" className="nav-link font-medium">Contact</a>
                </div>
                <button className="md:hidden focus:outline-none" id="menu-toggle">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="md:hidden hidden bg-white w-full" id="mobile-menu">
                <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                    <a href="#home" className="font-medium">Home</a>
                    <a href="#projects" className="font-medium">Projects</a>
                    <a href="#skills" className="font-medium">Skills</a>
                    <a href="#github" className="font-medium">GitHub</a>
                    <a href="#contact" className="font-medium">Contact</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar