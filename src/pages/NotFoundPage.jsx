import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <h2>404 🎬</h2>
      <p>This page doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;