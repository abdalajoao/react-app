import { useState } from "react";
import moviesData from "../data/movies.json";
import MovieList from "../components/MovieList";

function DashboardPage() {
  const [movies, setMovies] = useState(moviesData);

  const handleDelete = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="page">
      <h2>🎥 My Movie List</h2>
      <MovieList movies={movies} onDelete={handleDelete} />
    </div>
  );
}

export default DashboardPage;