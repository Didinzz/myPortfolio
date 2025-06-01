import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-2xl font-bold tracking-tighter">&lt;/&gt;</span>
                        <span className="ml-2">© 2025 Didin Septyadi Zakaria. All rights reserved.</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-all">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-all">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-all">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-all">
                            <i className="fab fa-dribbble"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer