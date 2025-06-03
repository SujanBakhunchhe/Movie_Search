# Movie Search & Favorites

A small React application that allows users to:

- Search for movies by title (via the OMDb API)
- View search results (poster, title, release year)
- Add or remove movies from a favorites list
- Persist favorites locally in the browser (using `localStorage`)

## Prerequisites

- **Node.js** (v14 or newer) and **npm** installed globally.  
- An **OMDb API Key**:  
  1. Sign up at https://www.omdbapi.com/apikey.aspx  
  2. Copy your API key (a string like `abcd1234`).

---

## Installation

1. **Clone this repository**  
   ```bash
   git clone <your-git-url>
   cd movie-search
   npm install
# Configuration
- const API_KEY = 'YOUR_REAL_OMDB_API_KEY'; // ← replace this value
# Script
- npm run dev
