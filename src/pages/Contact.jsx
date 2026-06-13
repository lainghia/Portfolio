import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, School, User, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          label="Liên hệ"
          title="Kết nối với tôi"
          subtitle="Nếu bạn có câu hỏi về các dự án hoặc muốn trao đổi về công nghệ, đừng ngần ngại liên hệ."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Info */}
          <div className="space-y-5">
            <h3 className="font-display font-bold text-xl text-white mb-6">Thông tin cá nhân</h3>

            {[
              {
                icon: <User size={18} className="text-forest-400" />,
                label: 'Họ và tên',
                value: 'Lại Như Hiếu Nghĩa',
              },
              {
                icon: <School size={18} className="text-forest-400" />,
                label: 'Mã sinh viên',
                value: '25021420',
              },
              {
                icon: <Mail size={18} className="text-forest-400" />,
                label: 'Email',
                value: '25021420@vnu.edu.vn',
                href: 'mailto:25021420@vnu.edu.vn',
              },
              {
                icon: <MapPin size={18} className="text-forest-400" />,
                label: 'Trường',
                value: 'Đại học Công nghệ - ĐHQGHN',
              },
            ].map(({ icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 glass rounded-xl p-4 border border-white/5"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-700/20 flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-forest-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="mt-6 p-4 glass-green rounded-xl border-glow">
              <p className="text-forest-300 text-sm font-medium mb-1">📚 Môn học</p>
              <p className="text-white text-sm">Nhập học Công nghệ số và Ứng dụng Trí tuệ nhân tạo</p>
              <p className="text-slate-500 text-xs mt-1">Khoa Cơ học kỹ thuật và Tự động hóa</p>
            </div>
          </div>

          {/* Drive links */}
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-6">Tài nguyên Google Drive</h3>
            <div className="space-y-3">
              {projects.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={p.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 glass rounded-xl p-4 border border-white/5 hover:border-forest-600/30 hover:bg-forest-600/5 transition-all group"
                >
                  <span className="text-xl shrink-0">{p.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate group-hover:text-forest-300 transition-colors">
                      {p.title}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">Dự án {String(p.id).padStart(2, '0')}</p>
                  </div>
                  <ExternalLink size={14} className="text-slate-600 group-hover:text-forest-400 shrink-0 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
