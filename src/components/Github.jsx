'use client';

import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub, FaStar, FaTrophy } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { timeAgo } from '@/lib/utils';
import StatBar from '@/components/StatBar';
import { Tooltip } from 'react-tooltip'; // Impor Tooltip
import { formatTooltipDate } from '@/lib/formatTooltipDate';

// Varian animasi
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

const GitHubActivity = () => {
    const [githubData, setGithubData] = useState({ recentCommits: [], stats: {} });
    const [loading, setLoading] = useState(true);
    const GITHUB_USERNAME = 'Didinzz'; // Ganti dengan username Anda

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const res = await fetch('/api/github');
                const data = await res.json();
                if (res.ok) {
                    setGithubData(data);
                } else {
                    console.error("Failed to fetch GitHub data:", data.error);
                }
            } catch (error) {
                console.error("Failed to fetch GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGitHubData();
    }, []);

    const { stats, recentCommits } = githubData;

    return (
        <motion.section
            id="github"
            className="py-20 bg-gray-50"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <Tooltip id="react-tooltip" className="custom-tooltip" />

            <div className="container mx-auto px-6">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A snapshot of my coding activity and contributions.</p>
                </motion.div>

                <motion.div className="bg-white rounded-xl shadow-lg p-6 md:p-8" variants={itemVariants}>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Contribution Calendar</h3>
                        <div className="github-calendar text-sm p-4 border border-gray-200 rounded-md overflow-x-auto flex justify-center">
                            {loading ? <div className="animate-pulse h-40 w-full bg-gray-200 rounded-md"></div> :
                                <GitHubCalendar
                                    username={GITHUB_USERNAME}
                                    blockSize={16}
                                    fontSize={12}
                                    blockMargin={7}
                                    colorScheme='light'
                                    renderBlock={(block, activity) => {
                                        const content = activity.count > 0
                                            ? `${activity.count} contributions on ${formatTooltipDate(activity.date)}`
                                            : `No contributions on ${formatTooltipDate(activity.date)}`;

                                        return React.cloneElement(block, {
                                            'data-tooltip-id': 'react-tooltip',
                                            'data-tooltip-content': content,
                                        });
                                    }}
                                />
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Recent Commits</h3>
                            <div className="space-y-4">
                                {loading ? (
                                    [...Array(3)].map((_, i) => (
                                        <div key={i} className="animate-pulse flex space-x-4 border-l-4 border-gray-200 pl-4 py-2"><div className="flex-1 space-y-2 py-1"><div className="h-4 bg-gray-200 rounded w-3/4"></div><div className="h-3 bg-gray-200 rounded w-full"></div></div></div>
                                    ))
                                ) : (
                                    recentCommits.map((commit, index) => (
                                        <a key={index} href={commit.url} target="_blank" rel="noopener noreferrer" className="block border-l-4 border-gray-200 pl-4 py-2 hover:bg-gray-50 transition-colors">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-medium text-gray-800">{commit.repo}</h4>
                                                    <p className="text-sm text-gray-600 truncate" title={commit.message}>{commit.message}</p>
                                                </div>
                                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{timeAgo(commit.date)}</span>
                                            </div>
                                        </a>
                                    ))
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Activity Stats</h3>
                            <div className="space-y-6">
                                {loading ? (
                                    <div className="space-y-6 animate-pulse">
                                        <div className="h-8 bg-gray-200 rounded-md"></div>
                                        <div className="h-8 bg-gray-200 rounded-md"></div>
                                        <div className="h-8 bg-gray-200 rounded-md"></div>
                                    </div>
                                ) : (
                                    <>
                                        <StatBar label="Public Repositories" value={stats.totalRepos} maxValue={100} />
                                        <StatBar label="Commits (This Year)" value={stats.commitsThisYear} maxValue={100} />
                                        <StatBar label="Followers" value={stats.followers} maxValue={100} />

                                        {stats.mostStarred && (
                                            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                                                <div className="flex items-center">
                                                    <FaTrophy className="text-yellow-500 mr-3 text-xl" />
                                                    <div>
                                                        <p className="text-sm font-bold text-yellow-800">Most Popular Project</p>
                                                        <a href={stats.mostStarred.url} target="_blank" rel="noopener noreferrer" className="text-md font-semibold text-gray-800 hover:underline">
                                                            {stats.mostStarred.name}
                                                        </a>
                                                        <p className="text-xs text-gray-600 flex items-center">
                                                            <FaStar className="mr-1" /> {stats.mostStarred.stars} stars
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        variants={itemVariants}
                    >
                        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all">
                            <FaGithub className="mr-2" /> View GitHub Profile
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default GitHubActivity;