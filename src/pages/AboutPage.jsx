function AboutPage() {
  return (
    <div className="page">
      <h2>👥 About</h2>

      <div className="about-section">
        <h3>🎬 About the App</h3>
        <p>
          CineList is a movie tracker app where you can manage your watched and
          unwatched movies. Add new movies, edit existing ones, delete them, and
          keep track of what you have seen.
        </p>
      </div>

      <div className="about-section">
        <h3>👨‍💻 The Team</h3>

        <div className="team-card">
          <h4>João & Eugénie</h4>
          <p>Full Stack Developers in training 🚀</p>

          <div className="team-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;