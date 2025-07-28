import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiBook, FiAward, FiCalendar, FiExternalLink, FiCode, FiDatabase, FiCpu, FiLayers } from "react-icons/fi";

function Education() {
  const educationData = [
    {
      id: 1,
      title: "Government Polytechnic for Women",
      link: "https://www.gpwfaridabad.edu.in/",
      location: "Faridabad, Haryana",
      degree: "Diploma in Computer Science and Engineering",
      percentage: "80%",
      courses: [
        { name: "Database Management System", icon: <FiDatabase /> },
        { name: "C Programming", icon: <FiCode /> },
        { name: "Basics of Computer Network", icon: <FiCpu /> },
        { name: "Web Development Fundamentals", icon: <FiLayers /> }
      ],
      duration: "2018 - 2021",
      achievements: [
        "Ranked in top 10% of class",
        "Completed 5 major projects",
        "Active in coding competitions"
      ]
    },
    {
      id: 2,
      title: "Maharishi Dayanand University",
      link: "http://www.satyaedu.org/",
      location: "Rohtak, Haryana",
      degree: "Bachelor of Technology in Computer Science",
      percentage: "80%",
      courses: [
        { name: "Data Structures and Algorithms", icon: <FiCode /> },
        { name: "Database Management Systems", icon: <FiDatabase /> },
        { name: "Operating Systems", icon: <FiCpu /> },
        { name: "Computer Networks", icon: <FiCpu /> }
      ],
      duration: "2021 - 2024",
      achievements: [
        "Published research paper",
        "Lead developer for college app",
        "Hackathon winner"
      ]
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="education" className="py-16 px-4 sm:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          My Education Journey
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Enhanced Timeline line with gradient dots */}
          <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-600 transform -translate-x-1/2">
            {educationData.map((_, index) => (
              <div
                key={index}
                className={`absolute ${index === 0 ? 'top-1/4' : 'top-3/4'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 border-4 border-white dark:border-gray-800 shadow-md`}
              ></div>
            ))}
          </div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
            >
              {/* Enhanced left-side card design */}
              <div className={`bg-white dark:bg-gray-800/90 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${index % 2 === 0 ? 'lg:border-r-4 lg:border-r-blue-500' : 'lg:border-l-4 lg:border-l-purple-500'}`}>
                {/* Institution Header with Icon */}
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg ${index % 2 === 0 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'} mr-4`}>
                    <FiBook className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <Link
                      to={edu.link}
                      target="_blank"
                      className={`text-2xl font-bold ${index % 2 === 0 ? 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300' : 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300'} transition-colors flex items-center`}
                    >
                      {edu.title} <FiExternalLink className="ml-2 text-sm" />
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mt-1">
                      <FiCalendar className="inline mr-1" /> {edu.duration}
                    </p>
                  </div>
                </div>

                {/* Degree and Performance */}
                <div className="mb-6">
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-medium">
                      {edu.degree}
                    </span>
                    <div className="flex items-center">
                      <span className="text-lg font-bold mr-2">{edu.percentage}</span>
                      <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}
                          style={{ width: `${edu.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex justify-end items-end">
                    <FiAward className="inline text-start mr-1" /> {edu.location}
                  </p>
                </div>

                {/* Enhanced Coursework Section */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <span className={`inline-block w-3 h-4 rounded-full mr-2 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
                    Relevant Coursework
                  </h4>
                  <div className="flex justify-center items-center flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <div key={i} className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className={`p-1.5 rounded-md mr-2 ${index % 2 === 0 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}`}>
                          {course.icon}
                        </span>
                        <span className="text-sm">{course.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements Section (New) */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`inline-block w-2 h-2 mt-2 mr-2 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
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