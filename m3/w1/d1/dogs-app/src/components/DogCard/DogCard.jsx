function DogCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="dogImage" width={"300px"} />
      <p>{props.description}</p>
    </div>
  );
}

export default DogCard;
