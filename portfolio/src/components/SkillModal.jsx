import { motion, AnimatePresence } from "framer-motion";

const SkillModal = ({ open, onClose, skill }) => {
    if (!skill) return null;

    const downloadUrl = `/notes/${skill.name.toLowerCase()}.pdf`;
    const projectUrl = skill.link;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg text-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold text-blue-700 mb-4">{skill.name}</h2>
                        <div className="flex justify-center gap-4">
                            <a
                                href={downloadUrl}
                                download
                                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                            >
                                📘 Download Notes
                            </a>
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300"
                            >
                                🚀 View Projects
                            </a>
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-6 text-sm text-gray-500 hover:underline"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SkillModal;
