import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Summary from './pages/Summary';
import Contact from './pages/Contact';

function LoadingScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-forest-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full bg-forest-700/30 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <span className="font-display font-bold text-forest-400 text-xl">N</span>
        </motion.div>
      </div>
      <motion.p
        className="mt-6 font-mono text-forest-400 text-sm tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        LOADING...
      </motion.p>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}
