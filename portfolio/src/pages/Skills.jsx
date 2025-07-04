import { motion } from "framer-motion";
import { useState } from "react";
import SkillModal from "../components/SkillModal";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiExpress,
  SiC, SiCplusplus
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, link: "/projects/html" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, link: "/projects/css" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, link: "/projects/javascript" },
  { name: "React", icon: <FaReact className="text-blue-400" />, link: "/projects/react" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, link: "/projects/node" },
  { name: "Express", icon: <SiExpress className="text-gray-800" />, link: "/projects/express" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, link: "/projects/mongodb" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" />, link: "/projects/tailwind" },
  { name: "C", icon: <SiC className="text-blue-800" />, link: "/projects/c" },
  { name: "C++", icon: <SiCplusplus className="text-purple-700" />, link: "/projects/cpp" },
  { name: "Java", icon: <FaJava className="text-red-700" />, link: "/projects/java" },
  { name: "AI", icon: <GiArtificialIntelligence className="text-indigo-600" />, link: "/projects/ai" },
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
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  return (
    <motion.section
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-white to-blue-50 text-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💼 My Tech Stack
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Click a skill to download notes or see related projects!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.button
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center gap-3 text-center hover:shadow-xl transition-all hover:-translate-y-1"
              onClick={() => handleSkillClick(skill)}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-sm font-semibold text-blue-700">{skill.name}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <SkillModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        skill={selectedSkill}
      />
    </motion.section>
  );
};

export default Skills;
