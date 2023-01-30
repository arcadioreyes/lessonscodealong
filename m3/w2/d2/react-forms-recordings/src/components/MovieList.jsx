import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [showForm, setShowForm] = useState(false);
  const [moviesData, setMoviesData] = useState(moviesDataJSON); //this state variable will only be updated to add movies

  const addNewMovie = (newMovie) => {
    //create a new array
    const updatedMovies = [...movies, newMovie];
    const updatedMoviesData = [...moviesData, newMovie];

    setMovies(updatedMovies);
    setMoviesData(updatedMoviesData);
  };

  const filterMovieList = (str) => {
    let filteredMovies;

    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }

    setMovies(filteredMovies);
  };
  return (
    <div>
      <FilterMovies filterMovieList={filterMovieList} />
      <h2>Movie List</h2>

      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Add Movie Form" : "Display Add Movie form"}
      </button>
      {showForm && <AddMovie addNewMovie={addNewMovie} />}
    </div>
  );
}

export default MovieList;
