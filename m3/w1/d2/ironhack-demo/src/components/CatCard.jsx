function CatCard(props) {
  const { cat } = props;
  return (
    <div>
      <h5>{cat.name}</h5>
      <img
        src={cat.imageUrl}
        alt={"catImage"}
        style={{ width: "50px", borderRadius: "75%" }}
      />
    </div>
  );
}

export default CatCard;
