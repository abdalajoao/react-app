import { useState } from "react";

function EditMovieForm({ movie, onSave, onCancel }) {
  const [form, setForm] = useState({ ...movie });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      year: parseInt(form.year),
      rating: parseFloat(form.rating),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <h3>✏️ Edit Movie</h3>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} />
      <input name="year" placeholder="Year" type="number" value={form.year} onChange={handleChange} />
      <input name="rating" placeholder="Rating" type="number" step="0.1" value={form.rating} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <label>
        <input name="watched" type="checkbox" checked={form.watched} onChange={handleChange} />
        {" "}Already watched
      </label>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditMovieForm;