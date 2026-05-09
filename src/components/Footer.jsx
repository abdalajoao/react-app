import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/dashboard">🎥 Movies</Link></li>
        <li><Link to="/about">👥 About</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;