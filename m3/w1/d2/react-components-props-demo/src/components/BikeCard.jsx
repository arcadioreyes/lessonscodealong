function BikeCard(props) {
  return (
    <div>
      <h3> {props.bikeType}</h3>
      <p>Hi user, this is a {props.bikeType} bike.</p>
      <img src={props.src} alt="imageBike" width={"300px"} />
    </div>
  );
}

export default BikeCard;
