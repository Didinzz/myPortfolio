import React from 'react'
import { FaSchool } from 'react-icons/fa6'
import { FaUniversity } from "react-icons/fa";

const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    <span className="pb-2">About Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 mono">Who I Am</h3>
                        <p className="text-gray-700 leading-relaxed">
                            I am a full-stack developer who is passionate about creating efficient and user-friendly applications. With expertise in both frontend and backend technologies, I love the challenge of bringing ideas to life through code.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            My approach combines technical excellence with creative solutions to deliver solid results. I am always learning and keeping up with the latest technologies to continuously improve my skills in web development.
                        </p>
                    </div>
                    {/* my journey */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 mono">My Journey</h3>
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <FaSchool />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">School at MAN 1 Gorontalo City</h4>
                                    <p className="text-gray-600">2019-2022</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <FaUniversity />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Information System</h4>
                                    <p className="text-gray-600">Gorontalo State University, 2022-present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe