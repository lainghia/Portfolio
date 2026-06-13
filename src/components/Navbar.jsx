import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/projects', label: 'Dự án' },
  { to: '/summary', label: 'Tổng kết' },
  { to: '/contact', label: 'Liên hệ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-forest-700 rounded-lg flex items-center justify-center group-hover:bg-forest-600 transition-colors">
            <Code2 size={16} className="text-forest-200" />
          </div>
          <span className="font-display font-bold text-white text-sm hidden sm:block">
            Hiếu Nghĩa
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-forest-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-forest-700/20 rounded-lg border border-forest-700/30"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/drive/folders/1O4Lo6m6eROXeZmDZk0cq68lA9RbxN7kh?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-forest-700/30 border border-forest-600/40 text-forest-300 text-sm font-medium rounded-lg hover:bg-forest-600 hover:text-white transition-all duration-200"
          >
            Drive
          </a>

          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-forest-700/20 text-forest-400 border border-forest-700/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
