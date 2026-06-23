import google.generativeai as genai
from app.config import settings

# Initialize the Gemini client configuration
genai.configure(api_key=settings.GEMINI_API_KEY)

# Simplistic single-line prompts to prevent multi-line copy-paste format breaking
REVIEW_SYSTEM_PROMPT = "You are an expert Senior Full-Stack Developer and Security Auditor. Review the following code. Provide an Overall Score (Readability, Performance, Security, Maintainability out of 100), a concise Review Summary, identify Bugs & Logic Errors, detect Security Vulnerabilities, analyze Time & Space Complexity using Big O notation, and finally provide a complete Refactored Code Suggestion in a standard markdown block."

EXPLAIN_SYSTEM_PROMPT = "You are a patient, brilliant mentor. Explain the overall purpose of the provided code block, break down the core algorithmic logic section-by-section in a beginner-friendly way, and explain its Time and Space Complexity conceptually."

def generate_ai_response(code: str, language: str, action: str) -> str:
    try:
        # Utilizing gemini-1.5-flash for rapid, performant code analysis
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        if action == "explain":
            prompt = f"Language: {language}\n\nCode to explain:\n```\n{code}\n```"
            system_prompt = EXPLAIN_SYSTEM_PROMPT
        else:
            prompt = f"Language: {language}\n\nCode to review:\n```\n{code}\n```"
            system_prompt = REVIEW_SYSTEM_PROMPT
            
        response = model.generate_content(
            contents=[system_prompt, prompt]
        )
        return response.text
        
    except Exception as e:
        return f"### ❌ Error generating review\nFailed to communicate with AI Service: {str(e)}"