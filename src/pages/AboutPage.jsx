function AboutPage() {
  return (
    <div className="page">
      <h2>About CineList</h2>
      <p>CineList is a movie tracking app built with React.</p>
      <h3>Team</h3>
      <ul>
        <li>
          <strong>Teu Nome</strong> —{" "}
          <a href="https://github.com/teu-usuario" target="_blank" rel="noreferrer">GitHub</a>{" "}|{" "}
          <a href="https://linkedin.com/in/teu-usuario" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;