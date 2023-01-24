import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass the state variable values to a new movie object
    // add the new movie to the state variable "movies"
  };
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" name="title" value={title} />

        <label>Director: </label>
        <input type="text" name="director" value={director} />

        <label>IMDB Rating: </label>
        <input type="number" name="IMDBRating" value={IMDBRating} />

        <label>Won Oscars: </label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
