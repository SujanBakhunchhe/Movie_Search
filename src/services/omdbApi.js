const API_KEY = '3edf6dec';
const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198';

export async function fetchMoviesByTitle(title) {
  const response = await fetch(`${BASE_URL}&apikey=${API_KEY}&s=${title}`);
  const data = await response.json();
  if (data.Response === 'False') {
    return [];
  }
  return data.Search;
}
