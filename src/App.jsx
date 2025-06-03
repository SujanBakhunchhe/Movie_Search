import  { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FavoritesList from './components/FavoritesList';
import { fetchMoviesByTitle } from './services/omdbApi';
import { loadFavorites, saveFavorites } from './utils/localStorageHelpers';
import './styles/index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 //fetching saved movies from localStorage at initial render.
  useEffect(() => {
    saveFavorites(loadFavorites());
  }, [favorites]);

  //function to handle search query
  const handleSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);
    setError(null);

    try {
      const movies = await fetchMoviesByTitle(query);
      if (movies.length === 0) {
        setError('No results found.');
        setSearchResults([]);
      } else {
        setSearchResults(movies);
      }
    } catch (err) {
      setError(err);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };
  
  //function to toggle
  const toggleFavorite = (movie) => {
    const isAlreadyFav = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isAlreadyFav) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="App">
      <SearchBar 
        onSearch={handleSearch} 
        query={searchQuery} 
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <MovieList 
        movies={searchResults} 
        favorites={favorites} 
        onToggleFavorite={toggleFavorite} 
      />

      <FavoritesList 
        favorites={favorites} 
        onToggleFavorite={toggleFavorite} 
      />
    </div>
  );
}

export default App;
