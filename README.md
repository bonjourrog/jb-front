# 🚀 Job Board Frontend

A modern job search platform built with React, designed to efficiently and intuitively connect candidates with companies.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

### 👤 For Candidates (Seekers)
- **Authentication**: Login and registration for job seekers
- **Job Search**: Complete listing with advanced filters
- **Smart Filters**: By text, job type, and work schedule
- **Application Management**: Apply to offers and track application status
- **Personal Dashboard**: View all submitted applications with details

### 🏢 For Companies
- **Control Panel**: Dashboard for job offer management
- **Full CRUD**: Create, edit, and delete job postings
- **Candidate Management**: View applicants for each job offer *(in development)*
- **Publication Control**: Activate/deactivate job offer visibility
- **Application Status**: Change candidate status (received → under review → hired/rejected) *(in development)*

## 🛠️ Technologies

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS + Material-UI (MUI)
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **State Management**: React Hooks + Zustand
- **Icons**: React Icons + MUI Icons

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bonjourrog/jb-front.git
   cd jb-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   create an `.env` file
   
   Edit the `.env` file with your API URL:
   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/         # Reusable components
├── data/               # Mock data for local development and default constants
├── entity/             # Bussines domain models
├── hooks/              # Custom hooks
│   layout/             # Layout components
├── pages/              # Main pages
├── services/           # API services (Axios)
├── store/              # Zustand configuration
└── types/              # TypeScript definitions
├── utils/              # Utilities and helpers
```

## 🎯 Roadmap

### 🚧 In Development
- [ ] Candidate management system for companies
- [ ] Application status management (received, under review, hired, rejected)
- [ ] Detailed candidate profiles

### 📋 Future Features
- [ ] Real-time chat between companies and candidates
- [ ] Recommendation system
- [ ] Notification system
- [ ] Analytics for companies
- [ ] PDF data export
- [ ] Social media integration

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Backend API**: [Backend Repo](https://github.com/bonjourrog/jb-back)

---

⭐ **Like the project? Give it a star on GitHub!**
