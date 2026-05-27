import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar"
import { useState } from "react";
import moviesData from "./data/movies.json";

function App() {
    const [movies] = useState(moviesData || []);
    const [search, setSearch] = useState("");
    
    const filteredMovies = (()=> {
      if (search.trim() === "") {
        return [];
      }
    return movies?.filter((movie) => {
      const movieTitle = movie.title || "";
      return movieTitle.toLowerCase().includes(search.toLowerCase());
  }) 
 })();

 

  return (
    <div className="app-layout">
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
      
      
      <MovieList movies={filteredMovies} />
      
    </div>
  );
}

export default App;