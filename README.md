# VERTEX - Full-Stack AI Code Reviewer 🚀

VERTEX is a modern, developer-focused full-stack web application designed to act as an automated senior engineer. By integrating an advanced language model engine with a clean, IDE-inspired workspace, the platform provides deep structural analysis, bug tracking, vulnerability scanning, and multi-format logic explanations for code blocks across multiple programming languages.



## 🎯 Platform Features
- **Comprehensive Auditing:** Automatically estimates execution complexity, evaluates readability, checks security compliance, and generates optimal refactored alternatives.
- **Multi-Mode Explanation Engine:** Tailors logic break-downs to your specific needs, supporting high-level summaries, detailed technical line-by-line tracing, or beginner-friendly conceptual analogies.
- **IDE Aesthetic:** Equipped with an ultra-responsive dark-themed split dashboard utilizing clean modern layouts, copy utilities, and error diagnostic panels.
- **Language Adaptability:** Built to review and parse code across Python, JavaScript, TypeScript, Java, Go, Rust, C++, C#, C, and PHP.

---

## 🛠️ Technical Architecture & Ecosystem

### Frontend Client
- **Core Library:** React 19 with TypeScript
- **Build Engine:** Vite
- **Styling Architecture:** Tailwind CSS v4
- **Icon Suite:** Lucide React

### Backend Server Engine
- **Framework:** FastAPI (Python 3.12)
- **ASGI Server:** Uvicorn (With hot-reloading active)
- **AI Integration Core:** New Official `google-genai` SDK
- **Model Engine:** Gemini 2.5 Flash

---

## 📂 Repository Layout Blueprint
```text
ai-code-reviewer/
├── .gitignore
├── README.md
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
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.ts
    ├── index.html
    └── src/
        ├── App.tsx
        ├── index.css
        ├── assets/
        └── components/
