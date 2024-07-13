// import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "../constant/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {

  return (
    <section id="skills" className="mb-28  scroll-mt-28 text-center sm:mb-40 ">
      <h2 className="text-5xl font-playfair py-12">My skills</h2>
      <ul className="flex flex-wrap justify-center items-center gap-2 text-lg ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 bg-white/10  hover:text-white hover:bg-white/20"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once: true,}}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}