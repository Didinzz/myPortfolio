import React from 'react'

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
                            I'm a passionate full-stack developer with a strong focus on creating clean, efficient, and
                            user-friendly applications. With expertise in both frontend and backend technologies, I
                            bring ideas to life through code.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            My approach combines technical excellence with creative problem-solving to deliver solutions
                            that exceed expectations. I'm constantly learning and adapting to new technologies to stay
                            at the forefront of web development.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 mono">My Journey</h3>
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <i className="fas fa-graduation-cap"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Computer Science Degree</h4>
                                    <p className="text-gray-600">University Name, 2015-2019</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <i className="fas fa-briefcase"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Junior Developer</h4>
                                    <p className="text-gray-600">Company Name, 2019-2021</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 w-12">
                                    <span
                                        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-black text-white">
                                        <i className="fas fa-briefcase"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Senior Developer</h4>
                                    <p className="text-gray-600">Company Name, 2021-Present</p>
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