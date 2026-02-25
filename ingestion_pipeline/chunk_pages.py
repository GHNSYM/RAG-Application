from langchain_text_splitters import RecursiveCharacterTextSplitter

def chunk_pages(pages, chunk_size=600, chunk_overlap=80):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\n\n", "\n", ".", " "]
    )
    chunks = []
    for page in pages:
        page_chunks = splitter.split_text(page["text"])
        for j, chunk in enumerate(page_chunks):
            chunks.append({
                "doc_name": page["doc_name"],
                "page": page["page"],
                "chunk_index": j,
                "text": chunk.strip()
            })
    return chunks