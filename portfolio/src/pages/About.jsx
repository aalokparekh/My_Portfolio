// import { motion } from "framer-motion";

// const About = () => {
//     return (
//         <motion.section
//             className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-blue-50 text-gray-800"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//         >
//             <div className="max-w-4xl mx-auto text-center">
//                 {/* Section Title */}
//                 <motion.h2
//                     className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6"
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     👨‍💻 About Me
//                 </motion.h2>

//                 {/* Intro Text */}
//                 <motion.p
//                     className="text-lg md:text-xl text-gray-700 mb-10"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.2, duration: 0.6 }}
//                 >
//                     I'm <span className="text-blue-600 font-semibold">Aalok Parekh</span>, a passionate full stack developer who loves building smooth, scalable, and secure web applications using modern technologies like <span className="font-semibold">React, Node.js, MongoDB, and Tailwind CSS</span>.
//                 </motion.p>

//                 {/* Highlights */}
//                 <motion.div
//                     className="grid gap-6 text-left text-gray-700"
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.3, duration: 0.7 }}
//                 >
//                     <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
//                         <p>
//                             🚀 Built real-world projects like <strong>NariBazaar</strong>, <strong>Ujas Trust Website</strong>, <strong>College Attendance System</strong>, and a full-featured <strong>Football Tournament Web App</strong>.
//                         </p>
//                     </div>

//                     <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
//                         <p>
//                             💻 I focus on clean code, interactive UI, and powerful backend logic using technologies like <strong>JWT, Firebase, REST APIs</strong> & <strong>Framer Motion</strong>.
//                         </p>
//                     </div>

//                     <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
//                         <p>
//                             🌱 Currently exploring <strong>GraphQL</strong>, <strong>Docker</strong>, and <strong>Next.js 14</strong> while aiming to build my own startup — <span className="text-blue-600 font-semibold">AutoFundAI</span>.
//                         </p>
//                     </div>
//                 </motion.div>

//                 {/* Resume Button */}
//                 <motion.a
//                     href="/resume.pdf"
//                     download="AalokParekh_Resume.pdf"
//                     className="inline-block mt-10 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition hover:scale-105"
//                     whileTap={{ scale: 0.97 }}
//                 >
//                     📥 Download Resume
//                 </motion.a>
//             </div>
//         </motion.section>
//     );
// };

// export default About;
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-blue-50 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    👨‍💻 About Me
                </motion.h2>

                {/* Intro Text */}
                <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    I'm <span className="text-blue-600 font-semibold">Aalok Parekh</span>, a passionate Full Stack Developer with a background in <strong>Computer Engineering & Cyber Security</strong>. I specialize in building modern, scalable, and user-focused applications using the <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js.
                </motion.p>

                {/* Highlights */}
                <motion.div
                    className="grid gap-6 text-left text-gray-700"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                        <p>
                            🚀 <strong>Real-World Projects:</strong> I've built and deployed fully responsive applications like:
                            <ul className="list-disc list-inside mt-2">
                                <li><strong>NariBazaar</strong> – India’s first WhatsApp mall for women entrepreneurs</li>
                                <li><strong>College Attendance System</strong> – Face/manual based entry using MongoDB</li>
                                <li><strong>Ujas Charitable Trust Website</strong> – A fully animated NGO platform</li>
                                <li><strong>Football Tournament App</strong> – Match, stats, and player management portal</li>
                            </ul>
                        </p>
                    </div>

                    <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                        <p>
                            🛠️ <strong>My Tech Stack:</strong> React.js, Tailwind CSS, Framer Motion, Node.js, Express, MongoDB, JWT, Firebase, REST APIs, Git, Multer, and more.
                            <br />
                            I love writing clean, maintainable code and bringing ideas to life with smooth UI/UX.
                        </p>
                    </div>

                    <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                        <p>
                            🌱 <strong>Currently Exploring:</strong> GraphQL, Docker, Next.js 14, Stripe integration, and building PWA (Progressive Web Apps) to expand my product development skills.
                        </p>
                    </div>

                    <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                        <p>
                            🌍 <strong>Vision:</strong> I’m on a journey to build <span className="text-blue-600 font-semibold">AutoFundAI</span> — an AI-powered investment co-pilot designed for Gen Z to make smarter crypto & DeFi investments.
                        </p>
                    </div>

                    <div className="bg-white/80 p-5 rounded-xl shadow-md border-l-4 border-blue-600">
                        <p>
                            🎯 <strong>Fun Facts:</strong> I enjoy playing football ⚽, listening to deep house & chill music 🎧, and always dreaming up the next startup idea 💡.
                        </p>
                    </div>
                </motion.div>

                {/* Resume Button */}
                <motion.a
                    href="/resume.pdf"
                    download="AalokParekh_Resume.pdf"
                    className="inline-block mt-10 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition hover:scale-105"
                    whileTap={{ scale: 0.97 }}
                >
                    📥 Download Resume
                </motion.a>
            </div>
        </motion.section>
    );
};

export default About;
