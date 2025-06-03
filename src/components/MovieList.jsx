import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

function MovieList({ movies, favorites, onToggleFavorite }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some((f) => f.imdbID === movie.imdbID)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
