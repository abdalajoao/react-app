import { Link } from "react-router-dom";

function MovieCard({ movie, onDelete }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre} • {movie.year}</p>
        <p>⭐ {movie.rating}</p>
        <p>{movie.watched ? "✔️ Watched" : "❌ Not watched"}</p>
        <Link to={`/movies/${movie.id}`}>View Details</Link>
        <button onClick={() => onDelete(movie.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;