import { useState } from "react";

function AddMovie(props) {
  const { addNewMovie } = props;
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass the state variable values to a new movie object
    const newMovie = { title, director, IMDBRating, hasOscars };
    console.log("newMovie", newMovie);
    addNewMovie(newMovie);
    // add the new movie to the state variable "movies"
    // Reset the state

    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={(event) => setDirector(event.target.value)}
        />

        <label>IMDB Rating: </label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={(event) => setIMDBRating(event.target.value)}
        />

        <label>Won Oscars: </label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
          onChange={(event) => setHasOscars(!hasOscars)}
        />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
