import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiMapPin, FiLinkedin, FiGithub, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiGmail } from "react-icons/si";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // In production, replace with actual API call
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        message: ""
      });

      // Show success message
      alert("Thank you for your message. I'll get back to you within 24 hours.");
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <SiGmail />,
      label: "Email",
      value: "yranjana757@gmail.com",
      href: "mailto:yranjana757@gmail.com",
      displayText: "yranjana757@gmail.com"
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/ranjana-yadav",
      href: "https://www.linkedin.com/in/ranjana-yadav-a157311a7/",
      displayText: "Ranjana Yadav"
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "github.com/Ranjana993",
      href: "https://github.com/Ranjana993",
      displayText: "Ranjana993"
    },
    // {
    //   icon: <SiLeetcode />,
    //   label: "LeetCode",
    //   value: "leetcode.com/Ranjana_Yadav",
    //   href: "https://leetcode.com/u/Ranjana_Yadav/",
    //   displayText: "Ranjana_Yadav"
    // },
  ];

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Interested in collaboration, have questions about my work, or want to discuss opportunities?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-10">
                {/* Location */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                    <FiMapPin className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="font-medium text-white">Delhi, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-900/20 rounded-lg flex items-center justify-center mr-4">
                    <SiGmail className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:yranjana757@gmail.com"
                      className="font-medium text-white hover:text-blue-400 transition-colors flex items-center group"
                    >
                      yranjana757@gmail.com
                      <FiExternalLink className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-6">
                  Connect with me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {contactInfo.slice(1).map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 border border-gray-700 rounded-xl hover:border-blue-600 hover:bg-gray-800 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                        <div className="text-gray-300 group-hover:text-blue-400">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-400 truncate">{info.label}</p>
                        <div className="flex items-center">
                          <p className="font-medium text-white text-sm truncate">
                            {info.displayText}
                          </p>
                          <FiExternalLink className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-10 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium text-white mb-3">
                  Availability
                </h4>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <p className="text-gray-300">
                    Available for freelance opportunities and full-time roles
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="fullName" className="block mb-2.5 text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 text-gray-900 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:border-blue-500 transition-all duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block mb-2.5 text-sm font-medium text-gray-300">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FiMessageSquare className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="pl-10 w-full px-4 py-1 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3  hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>

              </form>
            </div>
          </motion.div>
        </div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 rounded-xl p-6 border border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-semibold text-blue-400 mb-2">24h</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-green-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-purple-400 mb-2">Open</div>
                <div className="text-sm text-gray-300">To Opportunities</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}