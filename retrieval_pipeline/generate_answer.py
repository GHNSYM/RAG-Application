# from google import genai
# from dotenv import load_dotenv

# load_dotenv()
# client = genai.Client()

# def generate_answer(question: str, chunks: list):

#     response = client.models.generate_content(
#         model="gemini-3-flash-preview",
#         contents="Explain how AI works in a few words",
#     )
#     print(response.text)
#     return response.text

from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_answer(question: str, chunks: list):
    context = ""
    for i, chunk in enumerate(chunks):
        context += f"[{i+1}] (Source: {chunk['doc_name']}, Page {chunk['page']})\n{chunk['text']}\n\n"

    prompt = f"""You are a helpful assistant. Answer the user's question using ONLY the context provided below.If the answer is not found in the context, say "I don't have enough information to answer this."

    CONTEXT:
    {context}

    QUESTION:
    {question}

    ANSWER:"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    
    print(prompt)
    return response.text