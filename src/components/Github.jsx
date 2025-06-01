import React from 'react'

const Github = () => {
    return (
        <section id="github" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A snapshot of my coding activity and contributions.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Contribution Calendar</h3>
                        <div className="github-calendar p-4">
                            <div className="flex flex-wrap justify-center" id="activity-grid">
                                {/* <!-- This will be populated by JavaScript --> */}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Recent Commits</h3>
                            <div className="space-y-4" id="recent-commits">
                                <div className="border-l-4 border-black pl-4 py-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium">Repository Name</h4>
                                            <p className="text-sm text-gray-600">Commit message goes here</p>
                                        </div>
                                        <span className="text-xs text-gray-500">2 days ago</span>
                                    </div>
                                </div>
                                <div className="border-l-4 border-black pl-4 py-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium">Repository Name</h4>
                                            <p className="text-sm text-gray-600">Commit message goes here</p>
                                        </div>
                                        <span className="text-xs text-gray-500">3 days ago</span>
                                    </div>
                                </div>
                                <div className="border-l-4 border-black pl-4 py-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium">Repository Name</h4>
                                            <p className="text-sm text-gray-600">Commit message goes here</p>
                                        </div>
                                        <span className="text-xs text-gray-500">5 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Activity Stats</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Commits this month</span>
                                        <span>78</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-black h-2.5 rounded-full w-[78%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Pull requests</span>
                                        <span>24</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-black h-2.5 rounded-full w-[60%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Issues closed</span>
                                        <span>42</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-black h-2.5 rounded-full w-[70%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">Code reviews</span>
                                        <span>36</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-black h-2.5 rounded-full w-[80%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="https://github.com/yourusername" target="_blank" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all">
                            <i className="fab fa-github mr-2"></i> View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Github