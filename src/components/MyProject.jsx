import React from 'react'

const MyProject = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent work and personal projects that showcase my skills and passion for development.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Project 1 --> */}
                    <div className="project-card bg-white rounded-lg overflow-hidden">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <i className="fas fa-laptop-code text-5xl text-gray-400"></i>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                            <p className="text-gray-600 mb-4">A full-featured online shopping platform with payment
                                integration and inventory management.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">React</span>
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Node.js</span>
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">MongoDB</span>
                            </div>
                            <div className="flex justify-between">
                                <a href="#" className="text-black hover:underline flex items-center">
                                    <span>View Project</span>
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                                <a href="#" className="text-black hover:underline">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 2 --> */}
                    <div className="project-card bg-white rounded-lg overflow-hidden">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <i className="fas fa-mobile-alt text-5xl text-gray-400"></i>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Fitness Tracking App</h3>
                            <p className="text-gray-600 mb-4">Mobile application for tracking workouts, nutrition, and
                                progress with data visualization.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">React Native</span>
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Firebase</span>
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Redux</span>
                            </div>
                            <div className="flex justify-between">
                                <a href="#" className="text-black hover:underline flex items-center">
                                    <span>View Project</span>
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                                <a href="#" className="text-black hover:underline">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 3 --> */}
                    <div className="project-card bg-white rounded-lg overflow-hidden">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <i className="fas fa-chart-line text-5xl text-gray-400"></i>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                            <p className="text-gray-600 mb-4">Interactive data visualization dashboard for business
                                intelligence and reporting.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Vue.js</span>
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">D3.js</span>
                                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Express</span>
                            </div>
                            <div className="flex justify-between">
                                <a href="#" className="text-black hover:underline flex items-center">
                                    <span>View Project</span>
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                                <a href="#" className="text-black hover:underline">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a href="#"
                        className="inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    )
}

export default MyProject