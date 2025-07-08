'use client'

import ProjectCard from '@/components/ProjectCard'
import React, { useEffect, useState } from 'react'
const page = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects')
        console.log('Response headers:', [...res.headers.entries()])
        const json = await res.json()

        if (json.status === 200) {
          setProjects(json.data)
        } else {
          console.error('Fecth Error: ', json.message);
        }
      } catch (error) {
        console.error('Network Error: ', error.message);
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])
  return (
    <>
      {/* <!-- Header --> */}
      <header className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              A collection of my work showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>
        </div>
      </header>

      {/* <!-- Filter Controls --> */}
      {/* <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="filter-btn px-6 py-2 rounded-full border-2 border-black font-medium active">All Projects</button>
            <button className="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 font-medium hover:border-black transition-all">Web Apps</button>
            <button className="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 font-medium hover:border-black transition-all">Mobile</button>
            <button className="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 font-medium hover:border-black transition-all">UI/UX</button>
            <button className="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 font-medium hover:border-black transition-all">Backend</button>
          </div>
        </div>
      </section> */}

      {/* <!-- Projects Grid --> */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">


          {loading ? (
            <p className='text-center'>Loading....</p>
          ) : projects.length === 0 ? (
            <p className='text-center'>No projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((projects, index) => (
                <ProjectCard project={projects} key={index} />
              ))}
            </div>
          )}

          {/* <div className="mt-16 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="py-2 px-4 bg-black border border-black text-sm font-medium text-white">
                1
              </a>
              <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default page