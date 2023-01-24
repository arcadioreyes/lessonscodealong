import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2>Movie List</h2>

      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Add Movie Form" : "Display Add Movie form"}
      </button>
      {showForm && <AddMovie />}
    </div>
  );
}

export default MovieList;
