import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiShield, FiServer, FiCode, FiDatabase } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WebScrapingProject = () => {
  const project = {
    title: "Web Scraping Assistant",
    description: "Full-stack web scraping application for efficient content extraction with advanced security features.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Web scraping/data extraction image
    technologies: ["Node.js", "React.js", "Express.js", "Firecrawl API", "Tailwind CSS", "Security"],
    features: [
      "Secure API with rate limiting and CORS protection",
      "Firecrawl API integration for robust scraping",
      "Responsive UI with Tailwind CSS",
      "Helmet.js for HTTP header security"
    ],
    githubLink: "https://github.com/Ranjana993/wepScrapping-assistance-frontend",
    liveDemoLink: "https://wep-scrapping-assistance-frontend.vercel.app/",
  };

  // Alternative image options for web scraping:
  const imageOptions = [
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Web/data extraction
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Data analysis
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Dashboard/analytics
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Web development
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Security/lock
  ];

  return (
    <motion.div
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600">

        {/* Project Image - Matching JsProjects style */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <div className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg">
              <FiServer className="text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="flex space-x-2">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label="GitHub repository"
                  >
                    <FiGithub size={18} />
                  </Link>
                )}
                {project.liveDemoLink && (
                  <Link

                    href={project.liveDemoLink}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={18} />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Highlights */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
              <FiShield className="mr-2 text-orange-500" />
              Security Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded">
                <p className="text-xs font-medium text-gray-900 dark:text-white">Rate Limiting</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Prevents API abuse</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                <p className="text-xs font-medium text-gray-900 dark:text-white">CORS Protection</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Secure requests</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-500">
                Full-Stack • API • Security
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                #Featured
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebScrapingProject;