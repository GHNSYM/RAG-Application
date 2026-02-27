import ollama

def embed_query(question: str):
    response = ollama.embeddings(
        model="nomic-embed-text",
        prompt="search_query: " + question
    )
    embedding = response["embedding"]
        
    print(embedding)
    return embedding