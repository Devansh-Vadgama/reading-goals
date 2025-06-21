import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-8">
      <div className="max-w-3xl mx-auto glass rounded-xl p-6">
        <nav className="flex justify-between mb-6 font-semibold">
          <Link to="/">Books</Link>
          <Link to="/add">Add</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </div>
  );
}
