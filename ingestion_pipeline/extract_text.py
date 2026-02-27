import fitz
import re

def extract_pages(pdf_path, doc_name):
    doc = fitz.open(pdf_path)
    pages = []
    for i, page in enumerate(doc):
        text = page.get_text("text")
        text = re.sub(r'\u200b', '', text)
        text = re.sub(r'[ \t]+', ' ', text)
        text = re.sub(r'\n{3,}', '\n\n', text)
        pages.append({
            "doc_name": doc_name,
            "page": i + 1,
            "text": text.strip()
        })
    return pages