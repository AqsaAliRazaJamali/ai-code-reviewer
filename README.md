#  VERTEX — Full-Stack AI Code Reviewer

<p align="center">

  <img src="https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/AI-Gemini%202.5%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Project-Full%20Stack-blueviolet?style=for-the-badge" />
<img src="https://img.shields.io/badge/Category-AI%20Developer%20Tool-purple?style=for-the-badge" />

</p>

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
