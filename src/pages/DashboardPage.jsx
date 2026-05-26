import { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
import MovieList from "../components/MovieList";
import AddMovieForm from "../components/AddMovieForm";

function DashboardPage() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : moviesData;
  });

  const [showForm, setShowForm] = useState(false);

  // useEffect — saves movies to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

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