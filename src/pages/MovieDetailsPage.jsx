import { useParams, Link } from "react-router-dom";
import moviesData from "../data/movies.json";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const movie = moviesData.find((m) => m.id === parseInt(movieId));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="page">
      <Link to="/dashboard">← Back</Link>
      <div className="movie-details">
        <img src={movie.image} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.genre} • {movie.year}</p>
          <p>⭐ {movie.rating}</p>
          <p>{movie.watched ? "✔️ Watched" : "❌ Not watched"}</p>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;