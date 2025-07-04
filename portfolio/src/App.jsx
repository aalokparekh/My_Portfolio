
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Page transition animation
const pageAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageAnimation}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div {...pageAnimation}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div {...pageAnimation}>
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/skills"
            element={
              <motion.div {...pageAnimation}>
                <Skills />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div {...pageAnimation}>
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
