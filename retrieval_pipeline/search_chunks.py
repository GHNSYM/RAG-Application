from supabase import create_client
from dotenv import load_dotenv
import os
import time

load_dotenv()
supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))


def search_chunks(embedding, match_count=8):
    for attempt in range(3):
        try:
            response = supabase.rpc("match_documents", {
                "query_embedding": embedding,
                "match_count": match_count
            }).execute()
            return response.data
        except Exception as e:
            if attempt < 2:
                print(f"Supabase error, retrying... ({attempt+1}/3)")
                time.sleep(2)
            else:
                raise