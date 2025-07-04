import { motion } from "framer-motion";
import { projects } from "../constants";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const Projects = () => {
    return (
        <motion.section
            className="min-h-screen px-6 py-24 bg-gradient-to-b from-blue-50 to-white text-gray-800"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-14">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-4">
                        💡 My Projects
                    </h2>
                    <p className="text-center text-lg text-gray-700">
                        <ReactTyped
                            strings={[
                                "Showcasing my best builds.",
                                "Turning vision into code.",
                                "Powering ideas into interactive platforms",
                            ]}
                            typeSpeed={40}
                            backSpeed={30}
                            loop
                        />
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariant}
                            className="group bg-white/80 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:ring-2 hover:ring-blue-300 flex flex-col"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-t-3xl group-hover:scale-[1.02] transition-transform duration-300"
                            />

                            {/* Card Content */}
                            <div className="flex flex-col justify-between flex-grow p-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-700 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    {project.tech && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* CTA Buttons - Always At Bottom */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all w-full text-center"
                                    >
                                        🚀 Live <FaExternalLinkAlt size={12} />
                                    </a>
                                    {project.code && (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-gray-300 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-all w-full text-center"
                                        >
                                            💻 Code <FaCode size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
