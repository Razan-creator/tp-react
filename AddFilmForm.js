import React, { useState } from "react";

function AddFilmForm({ onAddMovie }) {
// State bach ndiro suivi dial l'input dial l'utilisateur
  const [newMovie, setNewMovie] = useState({ title: "", director: "", releaseYear: "", genre: "", rating: "" });
// Fonction dial soumission formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
// Vérification wach kolchi 3amar
    if (!newMovie.title || !newMovie.director || !newMovie.releaseYear || !newMovie.genre || !newMovie.rating) {
      alert("Tous les champs sont obligatoires !");
      return;
    }
// N3ayto l'fonction li jat mn props
    onAddMovie(newMovie);
    setNewMovie({ title: "", director: "", releaseYear: "", genre: "", rating: "" }); 
  };
// Fonction bach n3mlo réinitialisation
  const handleReset = () => {
    setNewMovie({ title: "", director: "", releaseYear: "", genre: "", rating: "" }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Réalisateur"
        value={newMovie.director}
        onChange={(e) => setNewMovie({ ...newMovie, director: e.target.value })}
      />
      <input
        type="number"
        placeholder="Année"
        value={newMovie.releaseYear}
        onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
      />
      <select
        value={newMovie.genre}
        onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
      >
        <option value="">Sélectionnez un genre</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <input
        type="number"
        placeholder="Note (0-10)"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
      />
      <button type="submit">Ajouter</button>
      
      <button type="button" onClick={handleReset}>Réinitialiser</button>
    </form>
  );
}

export default AddFilmForm;
