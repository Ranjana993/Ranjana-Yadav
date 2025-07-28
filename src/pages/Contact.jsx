import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCode, FiLayers } from "react-icons/fi";

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
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        message: ""
      });

      formRef.current.classList.add("animate-pulse");
      setTimeout(() => {
        formRef.current.classList.remove("animate-pulse");
      }, 1000);

      alert("Thank you for your message! I'll get back to you soon.");
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className=" min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-8xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden relative border border-gray-100 dark:border-gray-700"
      >
        {/* Left Side - Form */}
        <motion.div
          ref={formRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 p-8 sm:p-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-gray-600 dark:text-gray-300"
          >
            Interested in working together or have questions about my work? Drop me a message!
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <FiUser className="mr-2" /> Your Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Your name"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <FiMail className="mr-2" /> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="your@email.com"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <FiMessageSquare className="mr-2" /> Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Tell me about your project..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <FiSend className="mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Right Side - Custom Portfolio Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-900"
        >
          {/* Custom Abstract Pattern */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 800"
              preserveAspectRatio="xMidYMid slice"
              className="text-blue-400 dark:text-purple-500"
            >
              {/* Abstract interconnected nodes pattern */}
              <circle cx="100" cy="100" r="8" fill="currentColor">
                <animate attributeName="r" values="8;12;8" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="300" r="10" fill="currentColor">
                <animate attributeName="r" values="10;14;10" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="150" r="6" fill="currentColor">
                <animate attributeName="r" values="6;10;6" dur="7s" repeatCount="indefinite" />
              </circle>
              <circle cx="550" cy="400" r="8" fill="currentColor">
                <animate attributeName="r" values="8;12;8" dur="6.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="700" cy="250" r="12" fill="currentColor">
                <animate attributeName="r" values="12;16;12" dur="5.5s" repeatCount="indefinite" />
              </circle>

              {/* Connecting lines */}
              <line x1="100" y1="100" x2="250" y2="300" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="250" y1="300" x2="400" y2="150" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="150" x2="550" y2="400" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="550" y1="400" x2="700" y2="250" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4">
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="4.5s" repeatCount="indefinite" />
              </line>

              {/* Additional floating elements */}
              <rect x="200" y="500" width="40" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3">
                <animateTransform attributeName="transform" type="rotate" from="0 220 520" to="360 220 520" dur="20s" repeatCount="indefinite" />
              </rect>
              <polygon points="600,600 650,650 600,700 550,650" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" />
              </polygon>
            </svg>
          </div>

          {/* Portfolio-specific floating elements */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative z-10 p-8 space-y-8 text-center max-w-xs"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <div className="flex justify-center mb-3">
                <FiCode className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Developer Ready</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Looking for technical collaboration or code review?</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <div className="flex justify-center mb-3">
                <FiLayers className="text-3xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Design Focused</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Need UI/UX expertise or design thinking?</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}