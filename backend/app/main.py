from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from .config import get_env_vars

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    text: str
    
@app.get("/")
def read_root():
    return {"message": "Hello FastAPI!",
            "environment": os.getenv("ENVIRONMENT"),
            "api_base_url": os.getenv("API_BASE_URL"),
            "debug": os.getenv("DEBUG")
           }

@app.post("/echo")
async def echo_message(msg: Message) -> dict:
    return {
        "received": msg.text,
        "length": len(msg.text),
    }
    