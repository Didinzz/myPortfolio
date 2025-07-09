import React from 'react';

const ProjectCardSkeleton = () => {
    return (
        // Gunakan struktur dan class yang mirip dengan ProjectCard asli
        <div className="project-card bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
            {/* Bagian gambar skeleton */}
            <div className="h-64 bg-gray-200 animate-pulse"></div>

            <div className="p-6 flex flex-col flex-1">
                {/* Judul skeleton */}
                <div className="h-6 w-3/4 mb-4 bg-gray-200 rounded animate-pulse"></div>

                {/* Deskripsi skeleton */}
                <div className="space-y-2 mb-5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Tag teknologi skeleton */}
                <div className="flex flex-wrap gap-2 mb-5">
                    <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                </div>

                {/* Bagian bawah skeleton */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardSkeleton;