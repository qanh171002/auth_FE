# Auth Frontend - Dự án Frontend Authentication

Dự án frontend authentication được xây dựng với React, TypeScript, Vite và các công nghệ hiện đại.

## 🚀 Công nghệ sử dụng

- **React** - Framework UI
- **TypeScript** - Ngôn ngữ lập trình
- **Vite** - Build tool và dev server
- **Tailwind CSS** - Framework CSS
- **shadcn/ui** - Component library
- **Redux Toolkit** - State management
- **React Query** - Data fetching
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icon library

## 📋 Yêu cầu hệ thống

- Node.js (phiên bản 18.0.0 trở lên)
- npm hoặc yarn hoặc pnpm

## 🛠️ Cài đặt và chạy dự án

### 1. Clone dự án

```bash
git clone https://github.com/qanh171002/auth_FE
cd auth_FE
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### 3. Chạy dự án ở môi trường development

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Dự án sẽ chạy tại: `http://localhost:5173`

### 4. Build dự án cho production

```bash
npm run build
# hoặc
yarn build
# hoặc
pnpm build
```

## 📁 Cấu trúc dự án

```
src/
├── components/     # React components
│   └── ui/        # shadcn/ui components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── services/      # API services
├── store/         # Redux store
├── assets/        # Static assets
├── App.tsx        # Main App component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## 🔧 Cấu hình

### Environment Variables

Tạo file `.env.local` trong thư mục gốc:

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Deployment

Dự án đã được deploy tại: [https://auth-fe-livid.vercel.app](https://auth-fe-livid.vercel.app)
