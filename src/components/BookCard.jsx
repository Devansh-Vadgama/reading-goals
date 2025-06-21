export default function BookCard({ book, onToggle, onRemove }) {
  return (
    <div className="bg-white/10 backdrop-blur p-4 rounded-xl shadow border border-white/20 mb-3">
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-gray-300">by {book.author}</p>
      <p className="text-sm text-gray-400 mt-2">
        Status: <span className="font-semibold">{book.read ? "Read" : "Unread"}</span>
      </p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={onToggle}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded transition"
        >
          Mark as {book.read ? "Unread" : "Read"}
        </button>
        <button
          onClick={onRemove}
          className="bg-red-500/30 hover:bg-red-500/50 text-white px-3 py-1 rounded transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
