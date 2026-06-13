import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Wrench, Target, Trophy, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
          <ChevronRight size={14} />
          <Link to="/projects" className="hover:text-white transition-colors">Dự án</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">{project.title}</span>
        </div>

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách
        </Link>

        {/* Hero card */}
        <div className={`relative glass rounded-3xl overflow-hidden border border-white/5 mb-8`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 pointer-events-none`} />
          <div className="relative p-8 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl" role="img">{project.emoji}</span>
                <div>
                  <p className="font-mono text-xs text-slate-500 mb-1">
                    Dự án {String(project.id).padStart(2, '0')} — {project.subtitle}
                  </p>
                  <h1 className="font-display font-black text-3xl md:text-4xl text-white leading-tight">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full glass-green text-forest-300 border border-forest-600/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Objective */}
          <div className="md:col-span-2 glass rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-forest-700/30 flex items-center justify-center">
                <Target size={16} className="text-forest-400" />
              </div>
              <h2 className="font-display font-bold text-lg text-white">Mục tiêu dự án</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">{project.objective}</p>
          </div>

          {/* Tools */}
          <div className="glass rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-forest-700/30 flex items-center justify-center">
                <Wrench size={16} className="text-forest-400" />
              </div>
              <h2 className="font-display font-bold text-lg text-white">Công cụ</h2>
            </div>
            <ul className="space-y-2">
              {project.tools.map((tool) => (
                <li key={tool} className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest-500 shrink-0" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 mb-6">
          <h2 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-forest-700/30 flex items-center justify-center">
              <CheckCircle2 size={16} className="text-forest-400" />
            </div>
            Các bước thực hiện
          </h2>
          <ol className="space-y-4">
            {project.steps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-forest-700/20 border border-forest-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-mono font-bold text-forest-400">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="pt-1.5">
                  <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Result */}
        <div className="glass-green rounded-2xl p-6 md:p-8 border-glow mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-forest-600/30 flex items-center justify-center">
              <Trophy size={16} className="text-forest-300" />
            </div>
            <h2 className="font-display font-bold text-xl text-white">Kết quả đạt được</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">{project.result}</p>
        </div>

        {/* Drive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a
            href={project.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            <ExternalLink size={18} />
            Xem file dự án trên Google Drive
          </a>
        </motion.div>

        {/* Prev / Next */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all group"
            >
              <p className="text-xs text-slate-500 mb-1">← Dự án trước</p>
              <p className="text-sm font-medium text-white group-hover:text-forest-300 transition-colors line-clamp-2">
                {prev.emoji} {prev.title}
              </p>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all group text-right"
            >
              <p className="text-xs text-slate-500 mb-1">Dự án sau →</p>
              <p className="text-sm font-medium text-white group-hover:text-forest-300 transition-colors line-clamp-2">
                {next.emoji} {next.title}
              </p>
            </Link>
          ) : <div />}
        </div>
      </div>
    </motion.div>
  );
}
