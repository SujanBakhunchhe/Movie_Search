import React from 'react';
import '../styles/Card.css';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const { Title, Year, Poster } = movie;

  return (
    <div className="card">
      <img src={Poster === 'N/A' ? '/no-image.png' : Poster} alt={Title} />
      <div className="card-details">
        <h3>{Title}</h3>
        <p>{Year}</p>
        <button onClick={() => onToggleFavorite(movie)}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
