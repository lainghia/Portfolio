import React from 'react';
import { motion } from 'framer-motion';
import { Star, AlertTriangle, Heart, TrendingUp } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const skills = [
  { emoji: '🔍', label: 'Tìm kiếm thông tin', level: 90, desc: 'Sử dụng thành thạo Google Scholar, Semantic Scholar và các cơ sở dữ liệu học thuật' },
  { emoji: '⚖️', label: 'Đánh giá nguồn dữ liệu', level: 85, desc: 'Áp dụng tiêu chí CRAAP để đánh giá độ tin cậy và tính xác thực của thông tin' },
  { emoji: '🤖', label: 'Sử dụng AI hiệu quả', level: 88, desc: 'Làm việc thành thạo với ChatGPT, Claude, Gemini và các mô hình AI đa dạng' },
  { emoji: '✨', label: 'Viết Prompt', level: 82, desc: 'Nắm vững kỹ thuật Prompt Engineering: Chain-of-Thought, Role Prompting, Few-shot' },
  { emoji: '🤝', label: 'Làm việc nhóm online', level: 87, desc: 'Sử dụng Trello, Notion, Google Workspace để quản lý dự án nhóm hiệu quả' },
  { emoji: '🎨', label: 'Sáng tạo nội dung số', level: 80, desc: 'Tạo nội dung đa dạng với Midjourney, DALL-E, Canva AI và các công cụ AI sáng tạo' },
];

const challenges = [
  {
    icon: <AlertTriangle size={18} className="text-amber-400" />,
    title: 'Làm quen công cụ mới',
    desc: 'Ban đầu khó tiếp cận vì mỗi công cụ có giao diện và cách hoạt động riêng. Giải pháp là dành thời gian đọc tài liệu và thực hành từng bước nhỏ.',
  },
  {
    icon: <AlertTriangle size={18} className="text-amber-400" />,
    title: 'Chọn lọc thông tin',
    desc: 'Lượng thông tin trên internet quá lớn, khó phân biệt nguồn tin đáng tin cậy. Học được cách sử dụng tiêu chí đánh giá và cross-check nhiều nguồn.',
  },
  {
    icon: <AlertTriangle size={18} className="text-amber-400" />,
    title: 'Tối ưu cách sử dụng AI',
    desc: 'AI không phải lúc nào cũng cho kết quả mong muốn ngay lần đầu. Cần học cách viết Prompt chi tiết, rõ ràng và lặp lại cải thiện nhiều lần.',
  },
];

export default function Summary() {
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
        <SectionTitle
          label="Tổng kết"
          title="Hành trình học tập"
          subtitle="Nhìn lại quá trình học môn Nhập học Công nghệ số và Ứng dụng Trí tuệ nhân tạo."
        />

        {/* Overall stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-16"
        >
          {[
            { num: '6', label: 'Dự án hoàn thành', icon: '✅' },
            { num: '6', label: 'Kỹ năng đạt được', icon: '🎯' },
            { num: '10+', label: 'Công cụ đã học', icon: '🛠️' },
            { num: '1', label: 'Học kỳ', icon: '📅' },
          ].map(({ num, label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass rounded-2xl p-5 border border-white/5 text-center"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-display font-black text-3xl text-gradient">{num}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-forest-700/30 flex items-center justify-center">
              <Star size={16} className="text-forest-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Kỹ năng đạt được</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-forest-600/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{skill.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-semibold text-white text-sm">{skill.label}</h3>
                      <span className="text-xs font-mono text-forest-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full mb-3 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-forest-600 to-forest-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-amber-700/20 flex items-center justify-center">
              <TrendingUp size={16} className="text-amber-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Khó khăn & Giải pháp</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {challenges.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-amber-500/10 hover:border-amber-500/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  {ch.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-2">{ch.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{ch.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal reflection */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-rose-700/20 flex items-center justify-center">
              <Heart size={16} className="text-rose-400" />
            </div>
            <h2 className="font-display font-bold text-2xl text-white">Cảm nhận cá nhân</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-green rounded-3xl p-8 md:p-10 border-glow"
          >
            <div className="max-w-3xl">
              <p className="text-slate-300 leading-relaxed text-base mb-5">
                Môn học "Nhập học Công nghệ số và Ứng dụng Trí tuệ nhân tạo" đã mở ra cho tôi một góc nhìn hoàn toàn mới về cách học tập và làm việc trong thời đại số. Khi bước vào đại học với nền tảng từ phổ thông, tôi nhận ra rằng công nghệ không chỉ là công cụ — đó là ngôn ngữ của tương lai.
              </p>
              <p className="text-slate-300 leading-relaxed text-base mb-5">
                Thông qua 6 dự án thực hành, tôi đã học được cách tổ chức thông tin có hệ thống, đánh giá nguồn dữ liệu với tư duy phê phán, và đặc biệt là cách làm việc hiệu quả cùng các công cụ AI. Kỹ năng viết Prompt không chỉ là gõ câu hỏi vào máy — đó là một nghệ thuật đòi hỏi sự rõ ràng, logic và hiểu biết về cách AI tư duy.
              </p>
              <p className="text-slate-300 leading-relaxed text-base mb-5">
                Điều tôi trân trọng nhất là môn học này dạy tôi trách nhiệm khi sử dụng AI. Trong bối cảnh thông tin bùng nổ, việc biết kiểm chứng, biết giới hạn và biết bảo vệ quyền riêng tư là những kỹ năng thiết yếu mà mọi công dân số cần có.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Tôi rời môn học này không chỉ với các kỹ năng kỹ thuật, mà với tư duy của một người học suốt đời — luôn tò mò, luôn đặt câu hỏi và luôn sẵn sàng thích nghi với công nghệ mới. Đây sẽ là nền tảng vững chắc để tôi tiếp tục hành trình nghiên cứu cơ điện tử và phát triển các hệ thống thông minh trong tương lai.
              </p>

              <div className="mt-8 pt-6 border-t border-forest-600/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center font-display font-bold text-forest-200">
                  N
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">Lại Như Hiếu Nghĩa</div>
                  <div className="text-forest-400 text-xs font-mono">MSSV: 25021420 — Cơ điện tử K70</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
