import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, subtitle, center = false, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {label && (
        <p className="section-label mb-3">{label}</p>
      )}
      <h2 className={`font-display font-bold text-3xl md:text-4xl leading-tight ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
