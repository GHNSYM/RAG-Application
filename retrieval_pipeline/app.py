from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from embed_query import embed_query
from search_chunks import search_chunks
from generate_answer import generate_answer

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten this in production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API is live"}

class QuestionRequest(BaseModel):
    question: str

@app.post("/ask")
def ask(request: QuestionRequest):
    embedding = embed_query(request.question)
    chunks = search_chunks(embedding)
    answer = generate_answer(request.question, chunks)
    return {"answer": answer, "sources": chunks}