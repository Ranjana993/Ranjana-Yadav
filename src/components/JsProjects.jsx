import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiGlobe, FiMap, FiShoppingBag } from 'react-icons/fi';
import { SiCockroachlabs, SiGamejolt } from 'react-icons/si';

function JsProjects() {
  const projects = [
    {
      id: 1,
      title: "Landing Page",
      description: "Fully optimized landing page built with pure HTML and CSS, focusing on performance and clean design.",
      image: "https://kumari-ranjana-yadav-portfolio.vercel.app/assets/img/full-fledge-landing-page.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: ["Clean layout", "Optimized performance", "Mobile-first approach", "Cross-browser compatibility"],
      githubLink: "https://github.com/Ranjana993/full-fledge-site",
      liveDemoLink: "https://my-project-ranjana993.vercel.app/",
      category: "Frontend",
      icon: <FiGlobe className="text-blue-400" />
    },
    {
      id: 2,
      title: "Car Racing Game",
      description: "Interactive car racing game built with HTML, CSS, and JavaScript for an engaging gaming experience.",
      image: "https://plus.unsplash.com/premium_photo-1664304747572-1e9730f17cc4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Game Development"],
      features: ["Real-time gameplay", "Score tracking", "Responsive controls", "Visual effects"],
      githubLink: "https://github.com/Ranjana993/Car-Racing",
      liveDemoLink: "https://car-racing-eight.vercel.app/",
      category: "Game Development",
      icon: <SiGamejolt className="text-red-400" />
    },
    {
      id: 3,
      title: "Cocktail App",
      description: "Interactive cocktail recipe finder application with search functionality and detailed instructions.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "API Integration", "DOM Manipulation", "CSS Animations"],
      features: ["Recipe search", "Ingredient filtering", "Step-by-step instructions", "Responsive design"],
      githubLink: "https://github.com/Ranjana993/cocktail",
      liveDemoLink: "https://cocktail-app-lime.vercel.app/",
      category: "Web App",
      icon: <FiShoppingBag className="text-amber-400" />
    },
    {
      id: 4,
      title: "Travel Website",
      description: "Travel booking website with destination showcase, pricing information, and booking functionality.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: ["Destination showcase", "Pricing display", "Booking interface", "Gallery view"],
      githubLink: "https://github.com/Ranjana993/traveling-site",
      liveDemoLink: "https://traveling-site-three.vercel.app/",
      category: "Travel",
      icon: <FiMap className="text-green-400" />
    },
    {
      id: 5,
      title: "Food Ordering Site",
      description: "Online food ordering platform with menu browsing, cart functionality, and order placement.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      features: ["Menu browsing", "Cart management", "Order summary", "Responsive layout"],
      githubLink: "https://github.com/Ranjana993/food-hunter",
      liveDemoLink: "https://food-hunter-seven.vercel.app/",
      category: "E-commerce",
      icon: <FiShoppingBag className="text-orange-400" />
    },
    {
      id: 6,
      title: "Tic Tac Toe",
      description: "Classic Tic Tac Toe game with interactive gameplay, score tracking, and responsive design.",
      image: "https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["JavaScript", "DOM Manipulation", "Game Logic", "CSS Grid"],
      features: ["Two-player mode", "Score tracking", "Win detection", "Reset functionality"],
      githubLink: "https://github.com/Ranjana993/tic-tac-toe",
      liveDemoLink: "https://tic-tac-toe-six-kohl.vercel.app/",
      category: "Game",
      icon: <SiGamejolt className="text-purple-400" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
        >
          <div className="h-full bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-purple-600">

            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-gray-900/90 p-2 rounded-lg">
                  {project.icon}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-5">
              {/* Title and Description */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-purple-900/20 text-purple-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-300 mb-2">
                  Features
                </h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                    aria-label="View code on GitHub"
                  >
                    <FiGithub className="mr-1.5" size={14} />
                    Code
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    aria-label="View live demo"
                  >
                    <FiExternalLink className="mr-1.5" size={14} />
                    Demo
                  </a>
                </div>
                <div className="text-xs text-gray-500">
                  #{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default JsProjects;