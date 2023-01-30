import { useState } from "react";

function AddStroll(props) {
  const { addNewStroll } = props;
  const [title, setTitle] = useState("");
  const [quartier, setQuartier] = useState("");
  const [guide, setGuide] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState("");
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass the state variable values to a new stroll object
    const newStroll = {
      title,
      quartier,
      guide,
      description,
      fee,
      availability,
      rating,
    };
    console.log("newStroll", newStroll);
    addNewStroll(newStroll);
    // add the new stroll to the state variable "strolls"

    // Reset the state
    setTitle("");
    setQuartier("");
    setGuide("");
    setDescription("");
    setFee(10);
    setAvailability();
    setRating()(0);
  };

  return (
    <div className="AddStroll">
      <h4>Add a Stroll</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Quartier: </label>
        <input
          type="number"
          name="quartier"
          value={quartier}
          onChange={(event) => setQuartier(event.target.value)}
        />

        <label>Guide: </label>
        <input
          type="text"
          name="guide"
          value={guide}
          onChange={(event) => setGuide(event.target.value)}
        />

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label>Fee: </label>
        <input
          type="number"
          name="fee"
          value={fee}
          onChange={(event) => setFee(event.target.value)}
        />

        <label>Rating: </label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />

        <button type="submit">Add a Stroll</button>
      </form>
    </div>
  );
}

export default AddStroll;
