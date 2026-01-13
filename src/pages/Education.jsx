import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiBook,
  FiCalendar,
  FiExternalLink,
  FiCpu,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiCloud
} from "react-icons/fi";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

function Education() {
  const educationData = [
    {
      id: 1,
      title: "Government Polytechnic for Women",
      link: "https://www.gpwfaridabad.edu.in/",
      location: "Faridabad, Haryana",
      degree: "Diploma in Computer Science and Engineering",
      percentage: "80%",
      duration: "2018 - 2021",
      techFocus: [
        { name: "C Programming", icon: <FiCode />, level: "Advanced" },
        { name: "DBMS", icon: <FiDatabase />, level: "Intermediate" },
        { name: "Computer Networks", icon: <FiCloud />, level: "Fundamental" },
        { name: "OS Fundamentals", icon: <FiCpu />, level: "Intermediate" }
      ],
      projects: [
        { name: "Library Management System", tech: "MERN Stack+ MongoDB" },
        { name: "Student Portal", tech: "HTML/CSS + PHP" }
      ],
      achievements: [
        "Built foundation in core CS concepts",
        "Implemented 5+ semester projects",
        "Active participation in coding workshops"
      ]
    },
    {
      id: 2,
      title: "Maharishi Dayanand University",
      link: "http://www.satyaedu.org/",
      location: "Rohtak, Haryana",
      degree: "Bachelor of Technology in Computer Science",
      percentage: "80%",
      duration: "2021 - 2024",
      techFocus: [
        { name: "Data Structures & Algorithms", icon: <SiJavascript className="w-4 h-4" />, level: "Advanced" },
        { name: "Web Development", icon: <SiReact className="w-4 h-4" />, level: "Advanced" },
        { name: "Backend Systems", icon: <SiNodedotjs className="w-4 h-4" />, level: "Advanced" },
        { name: "Database Design", icon: <SiMongodb className="w-4 h-4" />, level: "Intermediate" }
      ],
      projects: [
        { name: "Full-Stack E-Commerce Platform", tech: "MERN Stack" },
        { name: "AI Chatbot Integration", tech: "Node.js + OpenAI API" },
        { name: "Real-time Dashboard", tech: "React + WebSocket" }
      ],
      achievements: [
        "Specialized in Full-Stack Development",
        "Published research on AI integration",
        "Won college-level hackathon 2023"
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Intermediate': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic & Technical Foundation
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building a strong foundation in computer science principles while specializing in modern web development and AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}>
              <div className="h-full bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Link
                        to={edu.link}
                        target="_blank"
                        className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                      >
                        {edu.title} <FiExternalLink className="ml-2 text-sm" />
                      </Link>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                        <FiBook className="mr-2" />
                        <span>{edu.degree}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {edu.percentage}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">CGPA</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-500">
                      <FiCalendar className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Tech Focus */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                    <FiCpu className="mr-2" />
                    Technical Focus Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.techFocus.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <div className={`p-1.5 rounded-md mr-2 ${index === 0 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                            'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          }`}>
                          {tech.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium">{tech.name}</div>
                          <div className={`text-xs px-1.5 py-0.5 rounded ${getLevelColor(tech.level)} mt-1 inline-block`}>
                            {tech.level}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                    <FiGitBranch className="mr-2" />
                    Key Projects
                  </h3>
                  <div className="space-y-2">
                    {edu.projects.map((project, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded">
                        <span className="text-sm text-gray-800 dark:text-gray-200">{project.name}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                          {project.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Technical Achievements
                  </h3>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <span className={`inline-block w-1.5 h-1.5 mt-1.5 mr-2 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-purple-500'
                          }`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;