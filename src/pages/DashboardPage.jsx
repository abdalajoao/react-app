import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import AddMovieForm from "../components/AddMovieForm";
import moviesData from "../data/movies.json";


function DashboardPage() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : moviesData;
  });

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState(""); 

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

  
  const filteredMovies = (() => {
    if (search.trim() === "") {
      return movies;
    }
    return movies?.filter((movie) => {
      const movieTitle = movie.title || "";
      return movieTitle.toLowerCase().includes(search.toLowerCase());
    });
  })();

  return (
    <div className="page">
      <h2>🎥 My Movie List</h2>

      <button onClick={() => setShowForm((prev) => !prev)} className="btn-toggle-form">
        {showForm ? "✖ Cancel" : "➕ Add Movie"}
      </button>

      {showForm && <AddMovieForm onAdd={handleAdd} />}

      <SearchBar search={search} setSearch={setSearch} />

      
      <MovieList movies={filteredMovies} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default DashboardPage;