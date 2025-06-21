import { useState } from "react";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author) {
      alert("Please fill in all fields.");
      return;
    }

    const newBook = {
      title,
      author,
      read: false,
    };

    const stored = JSON.parse(localStorage.getItem("books")) || [];
    localStorage.setItem("books", JSON.stringify([...stored, newBook]));

    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold mb-4">Add Book</h1>

      <input
        className="w-full px-4 py-2 rounded bg-white/10 backdrop-blur text-white placeholder-gray-400"
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full px-4 py-2 rounded bg-white/10 backdrop-blur text-white placeholder-gray-400"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded transition"
      >
        Add to List
      </button>
    </form>
  );
}
