import ollama
from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()
supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

def embed_and_store(chunks):
    total = len(chunks)
    for i, chunk in enumerate(chunks):
        response = ollama.embeddings(
            model="nomic-embed-text", 
            prompt="search_document: " + chunk["text"]  
        )
        embedding = response["embedding"]
        
        supabase.table("documents").insert({
            "doc_name": chunk["doc_name"],
            "page": chunk["page"],
            "chunk_index": chunk["chunk_index"],
            "text": chunk["text"],
            "embedding": embedding
        }).execute()
        
        print(f"[{i+1}/{total}] Stored: {chunk['doc_name']} | page {chunk['page']} | chunk {chunk['chunk_index']}")
