import React from 'react';
import MovieCard from './MovieCard';
import '../styles/FavoritesList.css';

function FavoritesList({ favorites, onToggleFavorite }) {
  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div className="favorites-list">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={true}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;
