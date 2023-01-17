import "./App.css";
import MovieList from "./components/MovieList";
import ImprovedMovieList from "./components/ImprovedMovieList";

import Spinner from "./components/Spinner"; // <-- add

import { useState } from "react"; // <-- add

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        {/* <MovieList /> */}
        <ImprovedMovieList />;
      </div>
    );
  }
}

export default App;
