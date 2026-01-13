import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ReactProjects from '../components/ReactProjects.jsx'
import JsProjects from '../components/JsProjects.jsx'
import WebScrapingProject from '../components/WebScrapping.jsx'
// import WebScrapingProject from '../components/WebScrapingProject.jsx'

function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A curated collection of my work showcasing technical expertise across different domains
          </p>
        </motion.div>

        {/* Projects Sections */}
        <div className="space-y-20">
          {/* Web Scraping Project - Featured */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-4"></div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Featured Project
                </h2>
              </div>
              <p className="text-gray-400 ml-7">
                A comprehensive full-stack web scraping solution with advanced security features and API integration
              </p>
            </div>
            <WebScrapingProject />
          </motion.div>

          {/* React & Full-Stack Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                <h2 className="text-2xl md:text-3xl font-semibold :text-white">
                  React & Full-Stack Projects
                </h2>
              </div>
              <p className="text-gray-400 ml-7">
                Modern applications built with React, Next.js, and full-stack technologies
              </p>
            </div>
            <ReactProjects />
          </motion.div>

          {/* JavaScript & Core Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  JavaScript & Core Projects
                </h2>
              </div>
              <p className="text-gray-400 ml-7">
                Fundamental projects demonstrating core JavaScript concepts and problem-solving skills
              </p>
            </div>
            <JsProjects />
          </motion.div>
        </div>

        {/* Project Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "10+", label: "Projects", color: "blue" },
              { value: "100%", label: "Code Quality", color: "purple" },
              { value: "95%", label: "Performance", color: "green" },
              { value: "∞", label: "Impact", color: "orange" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:shadow-lg transition-shadow">
                <div className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects