import os
import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv

# 1. Load variables from the .env file
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY is missing from environment variables!")

# 2. Initialize the modern Google Gen AI Client
client = genai.Client(api_key=api_key)

# 3. Create the FastAPI App instance (Must be defined before using @app)
app = FastAPI(title="AI Code Reviewer Engine")

# 4. Allow Frontend to communicate safely with Backend (CORS policy)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. Define data schemas that the backend expects from your React frontend
class CodeReviewRequest(BaseModel):
    code: str
    language: str

class ExplanationRequest(BaseModel):
    code: str
    language: str
    style: str  # Can be: 'summary', 'line-by-line', or 'beginner'


# 6. API Endpoints
@app.post("/api/review")
async def review_code(request: CodeReviewRequest):
    # Try up to 3 times if Google's servers are busy with a 503 error
    for attempt in range(3):
        try:
            prompt = f"""
            You are a highly experienced Senior Software Engineer and Security Auditor. 
            Analyze the following {request.language} code block and provide a highly detailed review.
            
            Your response must be formatted as structured Markdown with these exact sections:
            
            # Overall Score
            [Give a score out of 100 based on Readability, Performance, Security, and Best Practices]
            
            # Review Summary
            [Provide a brief 2-3 sentence overview of the code quality]
            
            # 🐛 Bug Detection & Security
            [List any logic errors, vulnerabilities, or edge-case failures. If none, say "No bugs detected."]
            
            # ⚡ Performance & Complexity
            - **Time Complexity:** - **Space Complexity:** [Provide optimization recommendations if applicable]
            
            # 🧹 Best Practices & Clean Code
            [Note formatting, naming conventions, and standard style guidelines like PEP8 or clean code standards]
            
            # 🚀 Refactored Code
            Provide the complete improved version of the code inside a markdown code block.
            
            Here is the code to review:
            ```{request.language.lower()}
            {request.code}
            ```
            """
            
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
            )
            return {"analysis": response.text}
            
        except Exception as e:
            # If Google returns a 503 error, wait 2 seconds and try again
            if "503" in str(e) and attempt < 2:
                time.sleep(2)
                continue
            raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/explain")
async def explain_code(request: ExplanationRequest):
    # Try up to 3 times if Google's servers are busy
    for attempt in range(3):
        try:
            # Customize instructions based on what the user picked in the dropdown menu
            if request.style == "summary":
                style_instruction = """
                Provide a high-level, concise summary of what this code does. 
                Focus on the overall purpose and the final objective in 2-3 clear paragraphs. 
                Do not go into deep line-by-line analysis.
                """
            elif request.style == "line-by-line":
                style_instruction = """
                Provide a detailed, technical line-by-line or block-by-block breakdown of the code. 
                Explain what each specific statement, loop, variable assignment, and condition does.
                """
            else:  # beginner mode
                style_instruction = """
                Explain this code like I am a 10-year-old beginner. 
                Use simple real-world analogies, avoid overly complex jargon, and break down the logic step-by-step.
                """

            prompt = f"""
            You are an expert programming instructor. 
            Analyze the following {request.language} code block and explain it according to these instructions:
            {style_instruction}
            
            Code:
            ```{request.language.lower()}
            {request.code}
            ```
            """
            
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
            )
            return {"explanation": response.text}
            
        except Exception as e:
            if "503" in str(e) and attempt < 2:
                time.sleep(2)
                continue
            raise HTTPException(status_code=500, detail=str(e))