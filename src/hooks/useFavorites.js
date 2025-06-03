import { useState, useEffect } from 'react';
import { loadFavorites, saveFavorites } from '../utils/localStorageHelpers';

export default function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites());

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return [favorites, setFavorites];
}
