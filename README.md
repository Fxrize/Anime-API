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

Designed to be lightweight, fast, and easy to integrate with any frontend or mobile applications.

---

## Tech Stack

- Node.js
- Express
- Axios
- Cheerio (Web scraping)

---

## Installation

### Clone repository
```bash
git clone https://github.com/Fxrize/Anime-API.git
cd Anime-API
```

### Install dependencies
```bash
npm install
```

### Run server
```bash
npm start
```

### Development mode (auto reload)
```bash
npm run dev
```

---

## API Endpoints

Base URL:
```
http://localhost:3000
```

### Get anime list
```http
GET /anime
```

### Search anime
```http
GET /search?query=naruto
```

### Get anime detail
```http
GET /anime/:id
```

### Get streaming sources
```http
GET /anime/:id/stream
```

---

## Example Response

```json
{
  "status": true,
  "data": {
    "title": "Naruto",
    "episodes": 220,
    "genre": ["Action", "Adventure"]
  }
}
```

---

## Project Structure

```
src/
 ├─ routes/
 ├─ controllers/
 ├─ extractors/
 ├─ utils/
 └─ app.js
```

---

## Requirements

- Node.js 18+
- npm or yarn
- Internet connection (required for scraping)

---

## Notes

- Not affiliated with any official anime provider
- Data is collected from publicly available sources
- For educational and personal use only

---

## Contributing

Pull requests are welcome.  
Please open an issue first for major changes.

---

## License

MIT License

---
