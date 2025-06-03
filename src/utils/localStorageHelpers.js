
export function loadFavorites() {
    const stored = localStorage.getItem('favoriteMovies');
    return stored ? JSON.parse(stored) : [];
 
}

export function saveFavorites(favoritesArray) {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoritesArray));
}
