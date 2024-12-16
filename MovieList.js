import React from "react";
// kaydi props : movies (liste dial l'aflam), onSelectMovie (bach n'affichiw détails), onAddToFavorites (bach n'ajoutiw f'favoris)
function MovieList({ movies, onSelectMovie, onAddToFavorites }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.title}>
          <h3>{movie.title}</h3>
          <p>{movie.genre} ({movie.releaseYear})</p>
          <div className="buttons">
            <button onClick={() => onSelectMovie(movie)}>Détails</button>
            <button onClick={() => onAddToFavorites(movie)}>Favoris</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
