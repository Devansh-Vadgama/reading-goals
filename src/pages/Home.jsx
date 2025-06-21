import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(stored);
  }, []);

  const toggleRead = (index) => {
    const updated = [...books];
    updated[index].read = !updated[index].read;
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
  };

  const removeBook = (indexToRemove) => {
    const updated = books.filter((_, index) => index !== indexToRemove);
    setBooks(updated);
    localStorage.setItem("books", JSON.stringify(updated));
  };

  const readBooks = books.filter((book) => book.read);
  const unreadBooks = books.filter((book) => !book.read);

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-bold">Your Reading List</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">Unread Books</h2>
        {unreadBooks.length === 0 ? (
          <p className="text-gray-400">No unread books.</p>
        ) : (
          unreadBooks.map((book, i) => (
            <BookCard
              key={`unread-${i}`}
              book={book}
              onToggle={() => toggleRead(books.indexOf(book))}
              onRemove={() => removeBook(books.indexOf(book))}
            />
          ))
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Already Read</h2>
        {readBooks.length === 0 ? (
          <p className="text-gray-400">You haven’t read any books yet.</p>
        ) : (
          readBooks.map((book, i) => (
            <BookCard
              key={`read-${i}`}
              book={book}
              onToggle={() => toggleRead(books.indexOf(book))}
              onRemove={() => removeBook(books.indexOf(book))}
            />
          ))
        )}
      </section>
    </div>
  );
}
