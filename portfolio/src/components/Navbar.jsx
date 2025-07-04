import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <motion.nav
            layout
            className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md px-6 py-4"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo with animation */}
                <motion.div
                    layout
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Link
                        to="/"
                        className="text-2xl font-bold text-blue-600 tracking-wide"
                        onClick={closeMenu}
                    >
                        MyPortfolio
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.ul layout className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <motion.li layout key={link}>
                            <NavLink
                                to={link === "home" ? "/" : `/${link}`}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    isActive || location.pathname === `/${link}`
                                        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                                        : "text-gray-700 hover:text-blue-500 transition duration-300"
                                }
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile Toggle */}
                <motion.button
                    layout
                    onClick={toggleMenu}
                    className="md:hidden text-blue-600 text-2xl"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <FaTimes className="rotate-180 transition-transform duration-300" />
                    ) : (
                        <FaBars />
                    )}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <motion.li layout key={link}>
                                <NavLink
                                    to={link === "home" ? "/" : `/${link}`}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        isActive || location.pathname === `/${link}`
                                            ? "block text-blue-600 font-semibold"
                                            : "block text-gray-700 hover:text-blue-500 transition duration-300"
                                    }
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </NavLink>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
