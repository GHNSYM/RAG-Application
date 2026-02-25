import os
from ingestion_pipeline.extract_text import extract_pages
from ingestion_pipeline.chunk_pages import chunk_pages
from ingestion_pipeline.embed_and_store import embed_and_store

PDF_FOLDER = "../assets/"  # all pdfs in this folder will get processed

#Extract all PDFs
all_chunks = []
pdf_files = [f for f in os.listdir(PDF_FOLDER) if f.endswith(".pdf")]

#Extract text and chunk pages
for pdf_file in pdf_files:
    pdf_path = os.path.join(PDF_FOLDER, pdf_file)
    print(f"Extracting: {pdf_file}")
    pages = extract_pages(pdf_path, pdf_file)
    chunks = chunk_pages(pages)
    all_chunks.extend(chunks)
    print(f"  → {len(pages)} pages, {len(chunks)} chunks")

print(f"\nTotal chunks across all PDFs: {len(all_chunks)}")

#Embed chunks with local model and store in supabase vectordb
embed_and_store(all_chunks)                 

