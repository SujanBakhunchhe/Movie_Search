import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ query, onSearch }) {
  const [localQuery, setLocalQuery] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      onSearch(localQuery.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
