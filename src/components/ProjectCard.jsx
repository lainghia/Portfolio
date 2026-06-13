import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={`group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl`}>
        {/* Top color bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl" role="img" aria-label={project.title}>{project.emoji}</span>
              <div>
                <p className="text-xs font-mono text-slate-500 mb-0.5">
                  Dự án {String(project.id).padStart(2, '0')}
                </p>
                <p className="text-xs text-slate-500">{project.subtitle}</p>
              </div>
            </div>
            <Link
              to={`/projects/${project.slug}`}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-forest-300 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <Link
              to={`/projects/${project.slug}`}
              className="flex-1 text-center py-2 px-4 rounded-xl bg-forest-700/20 border border-forest-600/30 text-forest-300 text-sm font-medium hover:bg-forest-600 hover:text-white transition-all duration-200"
            >
              Xem chi tiết
            </Link>
            <a
              href={project.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              title="Xem file Drive"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
