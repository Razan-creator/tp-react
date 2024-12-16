import React from "react";

function MovieDetails({ movie }) {  // kaydi props "movie" li fiha les infos dial l'film
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Réalisateur : {movie.director}</p>
      <p>Genre : {movie.genre}</p>
      <p>Année : {movie.releaseYear}</p>
      <p>Note : {movie.rating}</p>
    </div>
  );
}

export default MovieDetails;
