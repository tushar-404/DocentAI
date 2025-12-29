# Docent AI - Architecture

## Core Stack
- **Frontend:** Next.js, Tailwind, Framer Motion
- **Backend:** FastAPI, Python 3.10+
- **AI:** Groq (Llama 3), Pinecone (Vector DB)
- **Crawling:** Crawl4AI + Playwright

## Data Pipeline
1. User submits URL -> Backend Crawl Endpoint.
2. Crawler scrapes content -> Generates Embeddings.
3. Vectors stored in Pinecone.
4. Chat Query -> Vector Search -> LLM Response.