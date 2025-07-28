import { motion, useInView } from 'framer-motion'
import { faQuoteRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const testimonials = [
    {
      id: 1,
      name: "𝐓𝐚𝐫𝐮𝐧 𝐌𝐢𝐬𝐫𝐚 ",
      role: "Vrindavan Jeev Seva 🛕 Yamuna Cleaning | Community Service | Skill Development & Health Care for Adolescent Girls",
      content: "We want to extend our deepest appreciation to Ranjana for her exceptional work as our website developer for the Soul of Braj Federation's new website. Her dedication, talent, and hard work have truly brought our vision to life. Ranjana's commitment to this project was evident in every detail, and we're incredibly grateful for her efforts in making our online presence a success.",
      highlight: true
    },
    {
      id: 2,
      name: "Rahul Kumar Mandal",
      role: "MERN Stack Developer | Front End Developer at Curious Business Solution | NSEC Graduate",
      content: "It has been a pleasure working with Kumari Ranjana Yadav. She consistently demonstrated a strong grasp of frontend and backend technologies, including HTML, CSS, TailwindCSS, JavaScript, React.js, Node.js, Express.js and MongoDB. What sets Ranjana apart is her commitment to writing clean, maintainable code and her eagerness to continuously learn.She has shown great initiative in solving complex problems and collaborating with the team effectively.Whether it's building intuitive UIs or optimizing backend logic, she handles tasks with professionalism and a solution- oriented mindset.I highly recommend Ranjana for any opportunity that values skill, dedication, and a collaborative spirit.She will be a valuable asset to any organization she joins.",
      highlight: false
    },
    {
      id: 3,
      name: "Mukesh Kumar",
      role: "Engineer • Backend Developer • FreelancerEngineer • Backend Developer • Freelancer",
      content: "I wholeheartedly endorse Ranjana, an exceptional software engineer with a strong proficiency in frontend technologies and data structures and algorithms(DSA) problem - solving.Her expertise spans HTML, CSS, JavaScript, and frameworks such as React, Next, Node.js, and MongoDB, consistently delivering intuitive and visually stunning interfaces. Ranjana's analytical mindset and innovative approach enable her to excel in overcoming complex technical challenges. Her collaborative nature and positive attitude make her a valuable asset to any team, fostering a productive and inclusive work environment.I highly recommend Ranjana for any frontend engineering or full - stack development roles, as her skills and work ethic will undoubtedly make her a valuable contributor to any organization.",
      highlight: false
    },
    {
      id: 4,
      name: "Vikash Rahii",
      role: "Software Developer @Grey Chain || Node.js & NestJS || SQL / NoSQL || API Design || Scalable Systems || AI Nerd",
      content: "I highly recommend Ranjana, a talented software engineer with exceptional skills in frontend technologies and DSA problem - solving.She excels in HTML, CSS, JavaScript, and frameworks like React, Next, Nodejs, MongoDB consistently delivering user - friendly and visually appealing interfaces.Ranjana's analytical mindset and innovative approach make her a standout in overcoming technical challenges. Her collaborative nature and positive attitude make her a valuable asset to any team",
      highlight: true
    }
  ]

  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  const truncateContent = (content, wordCount = 15) => {
    const words = content.split(' ');
    if (words.length <= wordCount) return content;
    return words.slice(0, wordCount).join(' ') + '...';
  };

  return (
    <section id="testimonials" className="py-20 px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Testimonials
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-xl cursor-pointer ${testimonial.highlight ? 'bg-gray-800/60 text-white' : 'bg-gray-800/60 shadow-lg text-white'}`}
              onClick={() => openModal(testimonial)}
            >
              <FontAwesomeIcon
                icon={faQuoteRight}
                className={`text-3xl mb-6 ${testimonial.highlight ? 'text-white opacity-20' : 'text-[#016958] opacity-10'}`}
              />
              <p className={`text-lg mb-6 ${testimonial.highlight ? '' : 'text-white'}`}>
                "{truncateContent(testimonial.content)}"
              </p>
              <div>
                <h3 className={`font-bold text-xl ${testimonial.highlight ? 'text-white' : 'text-white'}`}>
                  {testimonial.name}
                </h3>
                <p className={`mb-2 text-sm font-semibold ${testimonial.highlight ? 'text-gray-200' : 'text-white'}`}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`relative max-w-2xl w-full rounded-xl p-8 ${selectedTestimonial.highlight ? 'bg-[#0c564a] text-white' : 'bg-white shadow-xl'}`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>

            <FontAwesomeIcon
              icon={faQuoteRight}
              className={`text-3xl mb-6 ${selectedTestimonial.highlight ? 'text-white opacity-20' : 'text-[#016958] opacity-10'}`}
            />
            <p className={`text-lg mb-6 ${selectedTestimonial.highlight ? '' : 'text-gray-600'}`}>
              "{selectedTestimonial.content}"
            </p>
            <div>
              <h3 className={`font-bold text-xl ${selectedTestimonial.highlight ? 'text-white' : 'text-gray-800'}`}>
                {selectedTestimonial.name}
              </h3>
              <p className={`mb-2 ${selectedTestimonial.highlight ? 'text-gray-200' : 'text-gray-500'}`}>
                {selectedTestimonial.role}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Testimonial