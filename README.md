# Anime-API

Simple REST API for fetching anime data, details, and streaming sources.  
Built for personal projects, frontend apps, and self-hosted anime services.

---

## Overview

Anime-API provides structured JSON responses for:

- Anime list
- Search
- Detail information
- Streaming sources

Designed to be lightweight, fast, and easy to integrate with any frontend or mobile app.

---

## Tech Stack

- Node.js
- Express
- Axios
- Cheerio / Scraping tools

---

## Installation

Clone repository:

```bash
git clone https://github.com/Fxrize/Anime-API.git
```

Go to project folder:

cd Anime-API


Install dependencies:

npm install


Run server:

npm start


Development mode (auto-reload):

npm run dev

API Endpoints

Base URL:

http://localhost:3000

Get Anime List
GET /anime

Search Anime
GET /search?query=naruto

Get Anime Detail
GET /anime/:id

Get Streaming Sources
GET /anime/:id/stream

Example Response
{
  "status": true,
  "data": {
    "title": "Naruto",
    "episodes": 220,
    "genre": ["Action", "Adventure"]
  }
}

Project Structure
src/
 ├─ routes/
 ├─ controllers/
 ├─ extractors/
 ├─ utils/
 └─ app.js

Requirements

Node.js 18+

npm or yarn

Internet connection (for scraping sources)

Notes

This project is not affiliated with any official anime provider.

Data is collected from publicly available sources.

For educational and personal use only.

Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

License

MIT License
