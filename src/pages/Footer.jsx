import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-white/5 py-24 text-center">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating triangles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`triangle-${i}`}
            className="absolute w-16 h-16 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M50 15L85 85H15Z'/%3E%3C/svg%3E")`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating squares */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute w-12 h-12 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23ffffff' width='100' height='100'/%3E%3C/svg%3E")`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{
              y: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.p
        className="relative z-10 text-xl font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Made with <span className="inline-block text-red-500 animate-heartbeat">💓</span> by Ranjana Yadav
      </motion.p>

      {/* Animated border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        viewport={{ once: true }}
      />
    </div>
  )
}

export default Footer