import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

export default function Projects() {
  const [search, setSearch] = useState('');

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <SectionTitle
            label="Dự án thực hành"
            title="Các bài tập đã hoàn thành"
            subtitle="6 dự án thực hành trong môn Nhập học Công nghệ số và Ứng dụng Trí tuệ nhân tạo."
          />

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4 max-w-md"
          >
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Tìm dự án..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-forest-600/50 focus:bg-white/8 transition-all"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-10 max-w-sm"
        >
          {[
            { num: '6', label: 'Dự án' },
            { num: '15+', label: 'Công cụ' },
            { num: '100%', label: 'Hoàn thành' },
          ].map(({ num, label }) => (
            <div key={label} className="glass rounded-xl p-4 text-center border border-white/5">
              <div className="font-display font-bold text-xl text-forest-400">{num}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Project Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-slate-400">Không tìm thấy dự án phù hợp</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
