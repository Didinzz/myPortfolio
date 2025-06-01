import React from 'react'

const Contac = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Let's talk!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Email</h4>
                                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white">your.email@example.com</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Location</h4>
                                    <p className="text-gray-300">City, Country</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Working Hours</h4>
                                    <p className="text-gray-300">Monday - Friday, 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                                    <i className="fab fa-github text-white"></i>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                                    <i className="fab fa-linkedin-in text-white"></i>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                                    <i className="fab fa-twitter text-white"></i>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                                    <i className="fab fa-dribbble text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                        <form className="contact-form space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Your name" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Your email" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                <input type="text" id="subject" className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Subject" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Your message"></textarea>
                            </div>

                            <div>
                                <button type="submit" className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition-all">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contac