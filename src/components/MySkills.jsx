import React from 'react'

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
                            <i className="fab fa-html5 text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">HTML5</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-css3-alt text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">CSS3</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-js text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">JavaScript</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-react text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">React</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-vuejs text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">Vue.js</span>
                    </div>

                    {/* <!-- Backend --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-node-js text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">Node.js</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-python text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">Python</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.394 3.563.435 5.53zM7.072 13.18c.556 0 .982.23 1.278.69l-.687.412c-.136-.223-.34-.3-.605-.3-.553 0-.86.396-.86 1.183 0 .852.327 1.278.882 1.278.22 0 .412-.065.554-.194.142-.13.26-.334.353-.613l.687.412c-.19.38-.43.655-.72.83-.292.17-.64.257-1.044.257-.557 0-1.006-.2-1.347-.596-.34-.398-.51-.94-.51-1.62 0-.693.16-1.24.48-1.64.32-.397.78-.596 1.38-.596zm7.554-.13c.533 0 .954.23 1.26.69l-.687.412c-.145-.223-.34-.3-.586-.3-.435 0-.774.396-.774 1.183 0 .852.338 1.278.774 1.278.247 0 .442-.065.585-.194.143-.13.26-.334.353-.613l.687.412c-.18.38-.43.655-.72.83-.273.17-.62.257-1.044.257-.55 0-.997-.2-1.34-.596-.342-.398-.513-.94-.513-1.62 0-.693.16-1.24.48-1.64.32-.397.782-.596 1.382-.596zm-9.604.914v4.714h-.917v-4.714h.917zm2.857 0c.916 0 1.358.478 1.358 1.183 0 .555-.215.902-.686 1.04.51.113.775.496.775 1.146 0 .822-.48 1.343-1.374 1.343H6.843v-4.714h1.035zm3.857 0v4.714h-.918v-4.714h.918zM8.162 16.46c-.407 0-.613-.208-.613-.624 0-.433.203-.64.613-.64h.624v1.264h-.624zm4.89-1.65h-.782v-.863h.782c.296 0 .467.133.467.43 0 .298-.17.433-.468.433zm-4.89-1.494h-.57v-.863h.57c.3 0 .47.12.47.43 0 .312-.17.432-.47.432z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">PHP</span>
                    </div>

                    {/* <!-- Database --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12.5c-1.932 0-3.5-1.567-3.5-3.5S10.068 5.5 12 5.5s3.5 1.567 3.5 3.5-1.568 3.5-3.5 3.5zm0-5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm9.5 5c0 .828-.673 1.5-1.5 1.5s-1.5-.672-1.5-1.5.673-1.5 1.5-1.5 1.5.672 1.5 1.5zm-14 0c0 .828-.673 1.5-1.5 1.5S4.5 13.328 4.5 12.5 5.173 11 6 11s1.5.672 1.5 1.5zm7-7c0 .828-.673 1.5-1.5 1.5s-1.5-.672-1.5-1.5S11.173 4 12 4s1.5.672 1.5 1.5zm0 14c0 .828-.673 1.5-1.5 1.5s-1.5-.672-1.5-1.5.673-1.5 1.5-1.5 1.5.672 1.5 1.5zm7-7c0 .828-.673 1.5-1.5 1.5s-1.5-.672-1.5-1.5.673-1.5 1.5-1.5 1.5.672 1.5 1.5zm-14 0c0 .828-.673 1.5-1.5 1.5S4.5 13.328 4.5 12.5 5.173 11 6 11s1.5.672 1.5 1.5z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">MongoDB</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.31 0 6 1.12 6 2s-2.69 2-6 2-6-1.12-6-2 2.69-2 6-2zm0 16c-3.31 0-6-1.12-6-2v-3.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V19c0 .88-2.69 2-6 2zm0-5c-3.31 0-6-1.12-6-2v-3.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V14c0 .88-2.69 2-6 2zm0-5c-3.31 0-6-1.12-6-2V7c0 .88 2.69 2 6 2s6-1.12 6-2v2c0 .88-2.69 2-6 2z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">SQL</span>
                    </div>

                    {/* <!-- Tools --> */}
                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-git-alt text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">Git</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <i className="fab fa-docker text-3xl text-gray-700"></i>
                        </div>
                        <span className="text-sm font-medium">Docker</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">DevOps</span>
                    </div>

                    <div className="skill-icon flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">UI/UX</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkills