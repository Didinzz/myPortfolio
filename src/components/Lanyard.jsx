import React from 'react'

const Lanyard = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">3D Showcase</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A space for your 3D lanyard visualization.</p>
                </div>

                <div className="lanyard-space rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-center p-8">
                        <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        <h3 className="text-xl font-medium text-gray-500">3D Lanyard Space</h3>
                        <p className="text-gray-400 mt-2">Place your 3D lanyard visualization here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lanyard