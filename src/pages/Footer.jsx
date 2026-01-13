import { motion } from "framer-motion";
import { FiHeart, FiMail, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      icon: <FiMail />,
      href: "mailto:yranjana757@gmail.com",
      label: "Send email"
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      href: "https://github.com/Ranjana993",
      label: "GitHub profile"
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/ranjana-yadav-a157311a7/",
      label: "LinkedIn profile"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/Ranjana_Yadav/",
      label: "LeetCode profile"
    }
  ];

  return (
    <footer className="relative border-t border-gray-800 bg-gray-900">
      {/* Decorative gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              Ranjana Yadav
            </h3>
            <p className="text-gray-400">
              Full Stack Developer • AI Enthusiast
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright and made with */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4 text-gray-400">
              <FiCode className="mr-2" />
              <span>Built with React & Tailwind CSS</span>
            </div>

            <p className="text-gray-500 text-sm flex items-center justify-center">
              <span className="flex items-center mr-2">
                <FiHeart className="mr-1 text-red-500" />
                Made with passion
              </span>
              <span className="mx-2">•</span>
              <span>© {currentYear} Ranjana Yadav</span>
              <span className="mx-2">•</span>
              <span>All rights reserved</span>
            </p>
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center group"
              aria-label="Back to top"
            >
              <svg
                className="w-4 h-4 mr-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to top
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent :via-gray-700 to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;