'use client'

import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, ease: 'easeOut' }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: 'easeOut', duration: 0.6 }
    }
};

const Contac = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const notify = () => toast.success('Message sent successfully!');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Mencegah form reload halaman
        setIsLoading(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!', {
                    position: 'bottom-right'
                });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            } else {
                toast.error(`Failed to send message: ${result.error}`, {
                    position: 'bottom-right'
                });
            }
        } catch (error) {
            toast.error('An unexpected error occurred.', {
                position: 'bottom-right'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            id="contact"
            className="py-20 bg-gray-900 text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-6">
                {/* 4. Animasikan judul */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">Have a project in mind or want to collaborate? Let's talk!</p>
                </motion.div>

                {/* 5. Animasikan grid sebagai container stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={containerVariants} // Gunakan container lagi untuk stagger kolom
                >
                    {/* 6. Animasikan setiap kolom (kiri dan kanan) */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {/* ... Konten Info Kontak ... */}
                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Email</h4>
                                    <a href="mailto:didin_s1sisfo@mahasiswa.ung.ac.id" className="text-gray-300 hover:text-white">didin_s1sisfo@mahasiswa.ung.ac.id</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-full mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium mb-1">Location</h4>
                                    <p className="text-gray-300">Gorontalo, Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Didinzz" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all"><FaGithub className="text-white" /></a>
                                <a href="https://www.linkedin.com/in/didin-septyadi-zakaria-9b9988217/" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all"><FaLinkedinIn className="text-white" /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                        <form className="contact-form space-y-6" onSubmit={handleSubmit}>
                            {/* ... Konten Form ... */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input type="text" id="name" name='name' className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Your name" suppressHydrationWarning={true} value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input type="email" id="email" name='email' className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Your email" suppressHydrationWarning={true} required value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                <input type="text" id="subject" name='subject' className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Subject" suppressHydrationWarning={true} required value={formData.subject} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea required id="message" name='message' rows="4" className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-2 focus:ring-0 text-white" placeholder="Your message" suppressHydrationWarning={true} value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <button suppressHydrationWarning={true} disabled={isLoading} type="submit" className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition-all cursor-pointer">{isLoading ? 'Sending...' : 'Send Message'}</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
            <Toaster
                toastOptions={{
                    style: {
                        borderRadius: '10px',
                        color: '#fff',
                    },
                    success: {
                        style: {
                            background: 'green',
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                        },
                    },
                }}
            />
        </motion.section >
    )
}

export default Contac