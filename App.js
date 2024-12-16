import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SortButtons from './SortButtons';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import AddFilmForm from './AddFilmForm';
import Footer from './Footer'; 
import moviesData from './movies.json';
import '../index.css';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);  // state bach n7fdo film li t5tar w n affichiw details dyalo
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);// State dial pagination (page actuelle)
  const filmsPerPage = 5; // Nombre dial l'aflam f'kol page

// Filtrage des films selon l'input f'search bar (titre ola genre)
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

// nhsb pagination
  const indexOfLastMovie = currentPage * filmsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - filmsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

// ytajoutta film n favories ila makanshi deja 
  const handleAddToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.title === movie.title)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

// Fonction bach nzid film jdid n list dial l'aflam 
  const handleAddMovie = (newMovie) => {
    const { title, genre, releaseYear, rating } = newMovie;
// Vérification wach kolchi 3amar
    if (title && genre && releaseYear && rating) {
      setMovies((prevMovies) => [
        ...prevMovies,
        {
          ...newMovie,
          releaseYear: parseInt(releaseYear), // Convertir releaseYear l'nombre
          rating: parseFloat(rating),// Convertir rating l'float
        },
      ]);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  // page limoraha
  const nextPage = () => {
    if (currentPage * filmsPerPage < filteredMovies.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // bach yrja3 n page kdima
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // bach nhsb nombre de page
  const totalPages = Math.ceil(filteredMovies.length / filmsPerPage);

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <SortButtons
          onSortByRating={() => setMovies([...movies].sort((a, b) => b.rating - a.rating))}
          onSortByYear={() => setMovies([...movies].sort((a, b) => a.releaseYear - b.releaseYear))}
        />
      </div>
      <MovieList
        movies={currentMovies}
        onSelectMovie={setSelectedMovie}
        onAddToFavorites={handleAddToFavorites}
      />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <AddFilmForm onAddMovie={handleAddMovie} />

      <div>
        <h2>Films favoris</h2>
        <ul>
          {favorites.length > 0 ? (
            favorites.map((fav, index) => (
              <li key={index}>
                {fav.title} - {fav.genre} ({fav.releaseYear})
              </li>
            ))
          ) : (
            <p>Aucun film se trouve dans les favoris  !!!</p>
          )}
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            cursor: 'pointer',
            backgroundColor: '#28A745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Précédent
        </button>
        <span style={{ fontSize: '18px' }}>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            cursor: 'pointer',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Suivant
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
