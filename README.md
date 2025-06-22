# CineSeek – ALX Project 0x14

A modern movie discovery application using the [MoviesDatabase API](https://rapidapi.com/SAdrian/api/moviesdatabase/). This project aims to demonstrate the ability to read, interpret, and implement data from an external API within a modern frontend framework using TypeScript and Next.js.

---

## API Overview

The MoviesDatabase API provides a rich collection of movie, series, and episode data with over **9 million titles** and **11 million actors, directors, and crew members**. It includes:

- Titles (movies, series, episodes)
- Ratings and votes
- Actor biographies and professions
- Awards, genres, and revenue data
- Episode and season structures
- Trailers and media content

It supports keyword and title-based searches, detailed filters (year, genre, titleType), and sorted responses. Developers can use optional query parameters to customize the detail level of responses.

---

## Version

- **API Version**: Not explicitly versioned, but stable and updated regularly
- **Data Refresh Rate**:
  - Ratings/Episodes: Daily
  - Titles: Weekly

---

## Available Endpoints

### Titles
- `GET /titles` – Fetch titles with optional filters (genre, year, sort, etc.)
- `GET /titles/{id}` – Get full details for a title by IMDb ID
- `GET /titles/{id}/ratings` – Get rating and vote count for a title

### Search
- `GET /titles/search/keyword/{keyword}` – Search titles by keyword
- `GET /titles/search/title/{title}` – Search titles by exact or partial title
- `GET /titles/search/akas/{aka}` – Search by alternative title (exact match only)

### Lists
- `GET /title/utils/lists` – Retrieve available predefined title lists (e.g., most_pop_movies)

### Episodes & Series
- `GET /titles/series/{id}` – Get list of episodes by series ID
- `GET /titles/seasons/{id}` – Get number of seasons for a series
- `GET /titles/series/{id}/{season}` – Get episodes for a specific season

### Actors
- `GET /actors` – Fetch list of actors with filters
- `GET /actors/{id}` – Get detailed information about an actor by IMDb ID

### Upcoming & Featured
- `GET /titles/x/upcoming` – List of upcoming titles
- `GET /x/titles-by-ids` – Get multiple titles by an array of IMDb IDs

---

## Request and Response Format

### Sample Request
```http
GET /titles?genre=Action&year=2023&limit=5
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

### Sample Response
```http
{
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Example Movie" },
      "releaseDate": { "year": 2023 },
      "primaryImage": { "url": "https://..." },
      "genres": { "genres": [{ "text": "Action" }] }
    }
  ],
  "page": 1,
  "next": 2,
  "entries": 5
}
```

The root object often includes:

- *results* (array)

- *page*, *next*, and *entries* (for pagination)

## Authentification
All requests must include an API key passed via headers:

Headers:

  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

To protect your API key:

- Store it in *.env.local*

- Use server-side API routes in Next.js to proxy requests

## Error Handling

Common error responses:

**401 Unauthorized** – Missing or invalid API key

**403 Forbidden** – Access to the resource is denied

**429 Too Many Requests** – Rate limit exceeded

**500 Internal Server Error** – API-side failure

Always wrap fetch calls in *try/catch* and check for *response.ok*:

```http
if (!response.ok) throw new Error("API request failed");
```

Use fallback UI with a *Loading* and *Error* component.

## Usage Limits and Best Practices

### Rate Limiting

- Subject to RapidAPI's usage policies (based on your subscription tier)

- Limit large requests using pagination (*limit*, *page*)

- caching to avoid unnecessary repeated calls

### Best Practices

- Always use server-side fetching to keep API keys secure

- Filter by year or genre to narrow result set

- Use *info* query param to reduce response size

- Handle missing/null fields gracefully (e.g., image or rating may be missing)

- Create reusable API utility functions with TypeScript typings

For full API access and examples, visit: [MoviesDatabase API on RapidAPI](https://rapidapi.com/SAdrian/api/moviesdatabase/)
