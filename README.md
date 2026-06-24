#  VERTEX — Full-Stack AI Code Reviewer

![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-499848?logo=gunicorn&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?logo=tailwind-css&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_2.5_Flash-4285F4?logo=google&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-f97316?logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-green)


> An intelligent, full-stack code review platform that acts as your AI-powered senior engineer. VERTEX analyzes source code, detects potential issues, explains logic, suggests improvements, and helps developers write cleaner, safer, and more maintainable software.

Built with **React, TypeScript, FastAPI, and Gemini AI**, VERTEX delivers a modern IDE-inspired experience for automated code auditing and explanation.

---

## ═════════════════ FEATURES ═════════════════

###  Intelligent Code Analysis
Analyze code across multiple dimensions:

- Bug detection
- Security vulnerability scanning
- Performance analysis
- Code quality assessment
- Readability evaluation
- Best practice recommendations

###  AI-Powered Explanations

Understand code faster with multiple explanation modes:

- **Quick Summary** — High-level overview
- **Detailed Analysis** — In-depth technical explanation
- **Line-by-Line Breakdown** — Step-by-step logic tracing
- **Beginner Mode** — Simplified conceptual explanations

###  Automated Refactoring Suggestions

Receive AI-generated recommendations for:

- Cleaner architecture
- Improved readability
- Better naming conventions
- Reduced code duplication
- Enhanced maintainability

###  Modern Developer Experience

- Premium dark-mode interface
- IDE-inspired split-screen layout
- Responsive design
- Real-time feedback panels
- Copy-to-clipboard utilities
- Smooth and intuitive user interactions

---

## ═══════════════ Supported Languages ═══════════════

VERTEX supports reviewing code written in:

- Python
- JavaScript
- TypeScript
- Java
- Go
- Rust
- C++
- C#
- C
- PHP

---

## ═══════════════ TECH STACK ═══════════════

### Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | UI Development |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |

### Backend

| Technology | Purpose |
|------------|---------|
| FastAPI | API Framework |
| Python 3.12 | Backend Runtime |
| Uvicorn | ASGI Server |
| Google GenAI SDK | AI Integration |
| Gemini 2.5 Flash | Large Language Model |

---

## ═════════ SYSTEM ARCHITECTURE ═════════

```text
User Interface (React + TypeScript)
                │
                ▼
        FastAPI REST API
                │
                ▼
       Gemini AI Integration
                │
                ▼
      Structured Review Report
```

---

## 📂 Project Structure

```plaintext
ai-code-reviewer/
│
├── backend/
│   ├── requirements.txt
│   └── app/
│       ├── __init__.py
│       ├── config.py
│       ├── main.py
│       ├── schemas.py
│       └── services/
│           ├── __init__.py
│           └── ai_service.py
│
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── index.html
│   └── src/
│       ├── App.tsx
│       ├── index.css
│       ├── assets/
│       └── components/
│
├── .gitignore
└── README.md
```

---

## ⚙️ Local Development Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AqsaAliRazaJamali/ai-code-reviewer.git
cd ai-code-reviewer
```

Or download the repository as a ZIP file from GitHub and extract it locally.

---

### 2️⃣ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a `.env` file inside the `backend/` directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Install backend dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
cd app
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

Backend will be available at:

```text
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Launch the development server:

```bash
npm run dev
```

Frontend will be available at:

```text
http://localhost:5173
```

---

## 🔒 Security & Privacy

VERTEX follows a privacy-first approach.

### Security Measures

- API keys are securely managed using environment variables.
- No source code is permanently stored.
- User submissions are processed as temporary stateless requests.
- Sensitive credentials remain isolated from frontend exposure.
- Cross-Origin Resource Sharing (CORS) is configured to enable secure communication between client and server.

---

##  ═════════════════ Screenshots ═════════════════
<img width="912" height="439" alt="DashboardAi" src="https://github.com/user-attachments/assets/d1b5a906-9f7a-4ab4-9df5-2a4988dd459c" />
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full-Stack Development
- AI Integration
- Prompt Engineering
- REST API Design
- State Management
- TypeScript Development
- Secure Environment Configuration
- Modern UI/UX Design
- Error Handling
- Software Engineering Principles

---

## ═════════ FUTURE ROADMAP ═════════

- GitHub Repository Review
- Multi-File Analysis
- Downloadable Review Reports
- Code History
- Authentication & User Accounts
- AI Chat Assistant
- Streaming Responses
- Docker Deployment

---

## 👩‍💻 Author

**Aqsa Jamali**

Computer Science Student | Frontend Developer | Aspiring AI & Machine Learning Engineer

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

Built with ❤️ using React, FastAPI, and Gemini AI.

</div>
