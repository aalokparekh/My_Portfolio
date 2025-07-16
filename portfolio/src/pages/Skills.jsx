import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiFramer, SiExpress, SiC, SiCplusplus
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "C", icon: <SiC className="text-blue-800" /> },
  { name: "C++", icon: <SiCplusplus className="text-purple-700" /> },
  { name: "AI", icon: <GiArtificialIntelligence className="text-indigo-500" /> },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💼 My Tech Stack
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          The technologies I use to build beautiful, performant, and scalable web apps.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.07, rotate: 1 }}
              className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center cursor-pointer transform duration-300"
            >
              <div className="text-4xl md:text-5xl">{skill.icon}</div>
              <p className="text-base font-semibold text-blue-700 tracking-wide">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
