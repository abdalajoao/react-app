import { useState } from "react";

function AddMovieForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    year: "",
    rating: "",
    watched: false,
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.genre || !form.year) return;

    const newMovie = {
      ...form,
      id: Date.now(),
      year: parseInt(form.year),
      rating: parseFloat(form.rating) || 0,
    };

    onAdd(newMovie);

    setForm({
      title: "",
      genre: "",
      year: "",
      rating: "",
      watched: false,
      image: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <h3>➕ Add New Movie</h3>
      <input name="title" placeholder="Title *" value={form.title} onChange={handleChange} required />
      <input name="genre" placeholder="Genre *" value={form.genre} onChange={handleChange} required />
      <input name="year" placeholder="Year *" type="number" value={form.year} onChange={handleChange} required />
      <input name="rating" placeholder="Rating (0-10)" type="number" step="0.1" value={form.rating} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <label>
        <input name="watched" type="checkbox" checked={form.watched} onChange={handleChange} />
        {" "}Already watched
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;