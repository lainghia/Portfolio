# Portfolio — Lại Như Hiếu Nghĩa
**MSSV: 25021420 | Công nghệ kỹ thuật cơ điện tử**  
Môn: Nhập học Công nghệ số và Ứng dụng Trí tuệ nhân tạo

---

## 🚀 Cài đặt và chạy

```bash
# 1. Cài dependencies
npm install

# 2. Chạy development server
npm run dev

# 3. Truy cập tại
http://localhost:5173
```

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Navbar.jsx       # Thanh điều hướng cố định
│   ├── Footer.jsx       # Footer
│   ├── ProjectCard.jsx  # Card dự án
│   └── SectionTitle.jsx # Tiêu đề section
├── pages/
│   ├── Home.jsx         # Trang chủ + Hero
│   ├── Projects.jsx     # Danh sách 6 dự án
│   ├── ProjectDetail.jsx# Chi tiết dự án
│   ├── Summary.jsx      # Tổng kết + Kỹ năng
│   └── Contact.jsx      # Trang liên hệ
├── data/
│   └── projects.js      # Dữ liệu 6 dự án
├── App.jsx              # Router + Loading screen
└── index.css            # Global styles + Tailwind
```

## 🖼️ Thêm ảnh avatar

1. Đặt ảnh cá nhân vào thư mục `src/assets/avatar.jpg`
2. Mở `src/pages/Home.jsx`
3. Import ảnh: `import avatar from '../assets/avatar.jpg'`
4. Thay thế đoạn comment trong hero section:

```jsx
// Tìm đoạn này trong Home.jsx - trong div avatar placeholder
// Thay đổi nội dung bên trong div "w-full h-full bg-gradient-to-br..."

<img
  src={avatar}
  alt="Lại Như Hiếu Nghĩa"
  className="w-full h-full object-cover object-center"
/>
```

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **TailwindCSS 3**
- **Framer Motion** — animations
- **React Router v6** — routing
- **Lucide React** — icons
- **Google Fonts** — Syne, Inter, JetBrains Mono

## 📦 Build production

```bash
npm run build
# Output: dist/
```
