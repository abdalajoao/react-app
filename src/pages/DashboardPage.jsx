import { useState } from "react";
import MovieList from "../components/MovieList";
import AddMovieForm from "../components/AddMovieForm";

function DashboardPage({ movies, setMovies }) {
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAdd = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
    setShowForm(false);
  };

  const handleEdit = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
  };

  return (
    <div className="page">
      <h2>🎥 My Movie List</h2>

      <button onClick={() => setShowForm((prev) => !prev)} className="btn-toggle-form">
        {showForm ? "✖ Cancel" : "➕ Add Movie"}
      </button>

      {showForm && <AddMovieForm onAdd={handleAdd} />}

      <MovieList movies={movies} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default DashboardPage;