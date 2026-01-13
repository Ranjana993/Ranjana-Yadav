import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiVideo, FiShoppingBag, FiChevronDown, FiChevronUp } from 'react-icons/fi';

function ReactProjects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 'videoHub',
      title: "Video Hub",
      description: "A cutting-edge video platform with real YouTube API integration, voice recognition, and interactive features.",
      fullDescription: "Innovative video platform seamlessly integrating YouTube's real API for an authentic experience. Features lazy loading for 80% faster performance, React speech recognition for voice-activated searches, optimized search functionality, sleek UI with personalized settings, and interactive live chat features.",
      image: "https://kumari-ranjana-yadav-portfolio.vercel.app/assets/img/youtube-project4.png",
      technologies: ["React.js", "Redux", "Redux Thunk", "React Speech Recognition", "Vite", "Tailwind CSS"],
      features: [
        "YouTube API integration for real data",
        "Voice-activated search with speech recognition",
        "Lazy loading for 80% performance improvement",
        "Interactive live chat system",
        "Optimized search functionality",
        "Personalized user settings"
      ],
      githubLink: "https://github.com/Ranjana993/video-hub",
      liveDemoLink: "https://video-hub-sage.vercel.app/",
      category: "React Full-Stack",
      icon: <FiVideo className="text-blue-400" />
    },
    {
      id: 'footFly',
      title: "FootFly",
      description: "Stylish e-commerce platform for footwear collections with modern web technologies and responsive design.",
      fullDescription: "FootFly is a user-friendly e-commerce platform dedicated to providing the best footwear collections for men, women, and kids. Built with modern web technologies including React, MongoDB, and Express for a complete full-stack experience with product catalog, shopping cart, user authentication, and responsive design.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Redux"],
      features: [
        "Complete product catalog with filtering",
        "Shopping cart and secure checkout",
        "User authentication and authorization",
        "Admin dashboard for product management",
        "Responsive design for all devices",
        "Secure payment integration"
      ],
      githubLink: "https://github.com/Ranjana993/soleSphere",
      liveDemoLink: "https://sole-sphere-frontend.vercel.app/",
      category: "MERN Stack",
      icon: <FiShoppingBag className="text-purple-400" />
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
        >
          <div className="h-full bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">

            {/* Project Image */}
            <div className="relative overflow-hidden h-56">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-900/90 p-2 rounded-lg">
                    {project.icon}
                  </div>
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Title and Description */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    aria-label={expandedProject === project.id ? "Collapse details" : "Expand details"}
                  >
                    {expandedProject === project.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-400 mb-4">
                        {project.fullDescription}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
                <div className="text-xs text-gray-500">
                  #{project.id === 'videoHub' ? '01' : '02'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ReactProjects;