import { motion } from "framer-motion";
import { skillsData } from "../constant/data";

export default function Skills() {
  return (
    <section id="skills" className="mb-28 scroll-mt-28 text-center sm:mb-40">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h1>

      {/* Convert object to flat array for original style */}
      <ul className="flex flex-wrap justify-center items-center gap-2 text-xl">
        {skillsData.map((skill, index) => (
          <motion.li
            className={`
              bg-white borderBlack rounded-xl px-3 py-3 
              bg-white/10 hover:text-white hover:bg-white/20 transition-all duration-300
              ${typeof skill === 'string' && (skill.includes("AI") || skill.includes("RAG") || skill.includes("LLM") || skill.includes("Gemini") || skill.includes("OpenAI"))
                ? "border-2 border-orange-500/30 dark:border-orange-500/50 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                : ""
              }
            `}
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 * index,
            }}
          >
            {skill}
            {typeof skill === 'string' && (skill.includes("AI") || skill.includes("RAG") || skill.includes("LLM")) && (
              <span className="ml-2 text-xs px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                AI
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}