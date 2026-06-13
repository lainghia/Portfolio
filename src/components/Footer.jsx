import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink, Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-forest-700 rounded-lg flex items-center justify-center">
                <Code2 size={16} className="text-forest-200" />
              </div>
              <span className="font-display font-bold text-white">Lại Như Hiếu Nghĩa</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sinh viên Công nghệ kỹ thuật cơ điện tử — ĐHCN Hà Nội. Đam mê công nghệ, AI và tự động hóa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Điều hướng</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Trang chủ' },
                { to: '/projects', label: 'Dự án' },
                { to: '/summary', label: 'Tổng kết' },
                { to: '/contact', label: 'Liên hệ' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-500 hover:text-forest-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">Liên hệ</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:25021420@vnu.edu.vn"
                  className="flex items-center gap-2 text-slate-500 hover:text-forest-400 text-sm transition-colors"
                >
                  <Mail size={14} />
                  25021420@vnu.edu.vn
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1O4Lo6m6eROXeZmDZk0cq68lA9RbxN7kh?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-forest-400 text-sm transition-colors"
                >
                  <ExternalLink size={14} />
                  Google Drive
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2025 Lại Như Hiếu Nghĩa — MSSV: 25021420
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Nhập học Công nghệ số & Ứng dụng AI
            <Heart size={10} className="text-forest-600 ml-1" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
}
