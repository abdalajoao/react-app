import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>🎬 CineList</h1>
      </Link>
    </nav>
  );
}

export default Navbar;