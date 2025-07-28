import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "../constant/data";

export default function Experience() {
  return (
    <section
      id='work'
      className="scroll-mt-28 min-h-screen flex flex-col justify-center py-12 lg:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-16"
        >
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center font-playfair'>
            Professional Journey
            <span className="block mt-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto"></span>
          </h1>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 sm:left-10 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-400 transform -translate-x-1/2"></div>

          {/* Experience cards */}
          <div className="pl-20 sm:pl-24 md:pl-0">
            {experiencesData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: idx * 0.1
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${idx % 2 === 0 ? 'md:pr-[45%] lg:pr-[40%]' : 'md:pl-[45%] lg:pl-[40%]'} ${idx !== experiencesData.length - 1 ? 'pb-12' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-teal-400 transform -translate-x-8 sm:-translate-x-9 translate-y-5 md:left-1/2 md:-translate-x-2 shadow-lg shadow-teal-400/30"></div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative w-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-blue-600 to-teal-600 shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm sm:text-sm lg:text-base text-teal-300 md:ml-4 md:text-right flex-shrink-0">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-sm lg:text-base mb-2">{item.location}</p>
                      <p className="text-gray-400 text-sm sm:text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector line for mobile */}
                  {idx !== experiencesData.length - 1 && (
                    <div className="absolute -bottom-12 left-0 w-px h-12 bg-gradient-to-b from-teal-400 to-blue-500 md:hidden"></div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}