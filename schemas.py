from pydantic import BaseModel
from typing import Optional

class CodeReviewRequest(BaseModel):
    code: str
    language: str
    action: str = "review"  # Can be "review" or "explain"