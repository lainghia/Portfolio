import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Mail, BookOpen, Target, Rocket,
  Cpu, Code, Brain, Zap, Star
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const goals = [
  {
    icon: <BookOpen size={22} className="text-forest-400" />,
    title: 'Mục tiêu học tập',
    desc: 'Nắm vững các công cụ số và AI để ứng dụng hiệu quả trong học tập kỹ thuật cơ điện tử, xây dựng nền tảng vững chắc cho sự nghiệp công nghệ.',
  },
  {
    icon: <Target size={22} className="text-forest-400" />,
    title: 'Định hướng phát triển',
    desc: 'Kết hợp kiến thức cơ điện tử với AI và tự động hóa thông minh, hướng tới phát triển các hệ thống robot và sản phẩm IoT thế hệ mới.',
  },
  {
    icon: <Rocket size={22} className="text-forest-400" />,
    title: 'Mục đích Portfolio',
    desc: 'Trình bày hành trình học tập môn "Nhập học Công nghệ số & AI", ghi lại quá trình phát triển kỹ năng số và ứng dụng AI vào thực tế.',
  },
];

const skills = [
  { icon: <Brain size={18} />, label: 'Trí tuệ nhân tạo' },
  { icon: <Code size={18} />, label: 'Lập trình' },
  { icon: <Cpu size={18} />, label: 'Tự động hóa' },
  { icon: <Zap size={18} />, label: 'Công nghệ số' },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-forest-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-forest-800/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-700/20 border border-forest-600/30 mb-6"
            >
              <Star size={12} className="text-forest-400" fill="currentColor" />
              <span className="text-forest-300 text-xs font-mono tracking-wider">
                MSSV: 25021420
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4"
            >
              Lại Như
              <br />
              <span className="text-gradient">Hiếu Nghĩa</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="flex flex-wrap gap-3 mb-6"
            >
              {skills.map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-sm text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="text-forest-400">{icon}</span>
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Xin chào, tôi là Lại Như Hiếu Nghĩa. Tôi đang theo học ngành{' '}
              <span className="text-white font-medium">Công nghệ kỹ thuật cơ điện tử</span>,
              yêu thích công nghệ, AI và phát triển các sản phẩm số.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary">
                Xem dự án
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                <Mail size={16} />
                Liên hệ
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-8 flex items-center gap-4"
            >
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-white">6</div>
                <div className="text-xs text-slate-500 mt-0.5">Dự án</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-white">5+</div>
                <div className="text-xs text-slate-500 mt-0.5">Công cụ AI</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="font-display font-bold text-2xl text-white">1</div>
                <div className="text-xs text-slate-500 mt-0.5">Học kỳ</div>
              </div>
            </motion.div>
          </div>

          {/* Avatar + floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow ring */}
            <div className="absolute inset-4 rounded-full bg-forest-600/20 blur-3xl animate-pulse-slow" />

            {/* Avatar container */}
            <div className="relative animate-float">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-glow shadow-2xl">
                {/* Avatar placeholder with initials */}
                <div className="w-full h-full bg-gradient-to-br from-forest-900 via-forest-800 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-display font-black text-gradient leading-none mb-2">
                      NHN
                    </div>
                    <p className="text-forest-400 text-xs font-mono">Thay bằng ảnh của bạn</p>
                    <p className="text-slate-600 text-xs mt-1">src/assets/avatar.jpg</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                className="absolute -top-4 -right-4 glass-green rounded-xl px-3 py-2 border-glow"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
                  <span className="text-xs font-mono text-forest-300">AI Enthusiast</span>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-white/10"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <div>
                    <div className="text-xs text-white font-medium">Cơ điện tử</div>
                    <div className="text-xs text-slate-500">ĐHCN - ĐHQGHN</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Về tôi"
            title="Định hướng & Mục tiêu"
            subtitle="Hành trình học tập và phát triển trong lĩnh vực công nghệ số và trí tuệ nhân tạo."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {goals.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-forest-600/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-700/20 border border-forest-600/20 flex items-center justify-center mb-4 group-hover:bg-forest-600/20 transition-colors">
                  {g.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{g.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Thông tin cá nhân"
                title="Sinh viên kỹ thuật yêu công nghệ"
              />
              <p className="text-slate-400 leading-relaxed mt-4 mb-6">
                Tôi là sinh viên năm nhất ngành Công nghệ kỹ thuật cơ điện tử tại Đại học Công nghệ, ĐHQGHN. 
                Với niềm đam mê công nghệ và AI, tôi luôn tìm cách ứng dụng kiến thức vào thực tế.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Trường', value: 'Đại học Công nghệ - ĐHQGHN' },
                  { label: 'Khoa', value: 'Cơ học kỹ thuật và Tự động hóa' },
                  { label: 'Ngành', value: 'Công nghệ kỹ thuật cơ điện tử' },
                  { label: 'Mã sinh viên', value: '25021420' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3 py-3 border-b border-white/5">
                    <span className="text-slate-600 text-sm w-32 shrink-0">{label}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-semibold text-white text-lg mb-4">Sở thích & Đam mê</h3>
              {[
                { emoji: '💻', label: 'Lập trình', desc: 'Học code để hiểu cách máy tính tư duy' },
                { emoji: '🤖', label: 'Trí tuệ nhân tạo', desc: 'Nghiên cứu và ứng dụng AI trong cuộc sống' },
                { emoji: '⚙️', label: 'Tự động hóa', desc: 'Xây dựng hệ thống thông minh tự vận hành' },
                { emoji: '🚀', label: 'Phát triển sản phẩm số', desc: 'Biến ý tưởng thành sản phẩm thực tế' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <div className="text-white font-medium text-sm">{item.label}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-green rounded-3xl p-10 border-glow"
          >
            <h2 className="font-display font-bold text-3xl text-white mb-3">
              Khám phá hành trình học tập
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Xem 6 dự án thực hành trong môn Nhập học Công nghệ số và Ứng dụng AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                Xem tất cả dự án
                <ArrowRight size={16} />
              </Link>
              <Link to="/summary" className="btn-outline">
                Tổng kết khóa học
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
