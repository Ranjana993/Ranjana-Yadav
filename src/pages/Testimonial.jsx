import { motion, useInView } from 'framer-motion'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "CEO, Digital Solutions",
      content: "Ranjana transformed our web platform with incredible attention to detail. Her React skills are exceptional and she delivered ahead of schedule.",
      rating: 5,
      highlight: true
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UX Lead",
      content: "The most reliable developer I've worked with. She understands complex requirements quickly and implements them flawlessly.",
      rating: 4,
      highlight: false
    },
    {
      id: 3,
      name: "James Wilson",
      role: "CTO, TechStart",
      content: "We've hired Ranjana for three projects now. Each time, the code quality has been outstanding and maintenance is a breeze.",
      rating: 5,
      highlight: false
    },
    {
      id: 4,
      name: "Lisa Zhang",
      role: "Product Manager",
      content: "Her ability to translate designs into functional components is remarkable. Our team's productivity increased by 40% after her optimizations.",
      rating: 5,
      highlight: true
    }
  ]
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const starRating = (rating) => {
    return (
      <div
        ref={ref}
        style={{
          transform: isInView ? "rotateY(0deg)" : "rotateY(90deg)",
          transition: "transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        }}
        className="w-72 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-2xl p-6 text-white perspective-1000"
      >
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 px-5 sm:px-10 ">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className=" text-3xl lg:text-6xl text-center font-semibold md:text-[25px] font-playfair pb-14"
        >
          What People Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id}  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }} whileHover={{ y: -5 }}
              className={`p-8 rounded-xl ${testimonial.highlight ? 'bg-[#0c564a] text-white' : 'bg-gray-300 shadow-lg'}`}
            >
              <FontAwesomeIcon icon={faQuoteRight} className={`text-3xl mb-6 ${testimonial.highlight ? 'text-white opacity-20' : 'text-[#016958] opacity-10'}`}
              />
              <p className={`text-lg mb-6 ${testimonial.highlight ? '' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>
              <div>
                <h3 className={`font-bold text-xl ${testimonial.highlight ? 'text-white' : 'text-gray-800'}`}>
                  {testimonial.name}
                </h3>
                <p className={`mb-2 ${testimonial.highlight ? 'text-gray-200' : 'text-gray-500'}`}>
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial