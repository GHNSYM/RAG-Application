from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()
supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

def search_chunks(embedding, match_count=5):
    response = supabase.rpc("match_documents", {
        "query_embedding": embedding,
        "match_count": match_count
    }).execute()
    
    return response.data