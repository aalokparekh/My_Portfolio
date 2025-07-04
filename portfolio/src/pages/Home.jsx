import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";

const Home = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-pink-100 text-center px-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mb-4">
                Hi, I'm Aalok
            </h1>

            <ReactTyped
                className="text-xl md:text-2xl text-gray-800 mb-6"
                strings={[
                    "Full Stack Web Developer 💻",
                    "React & Node.js Enthusiast ⚛️",
                    "Building Modern Web Experiences 🌐",
                ]}
                typeSpeed={40}
                backSpeed={30}
                loop
            />

            <div className="flex gap-4 mt-6">
                <motion.a
                    href="/projects"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                >
                    View My Work
                </motion.a>

                <motion.a
                    href="/resume.pdf"
                    download="AalokParekh_Resume.pdf"
                    className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
                    whileHover={{ scale: 1.05 }}
                >
                    Download Resume
                </motion.a>
            </div>
        </motion.section>
    );
};

export default Home;
