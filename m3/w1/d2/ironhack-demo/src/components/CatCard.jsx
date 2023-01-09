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
      {/* {cat.showsAffection === true && <p>A caring Cat</p>}
      {cat.showsAffection === false && <p>Not a caring Cat</p>} */}

      {cat.showsAffection ? <p>A caring Cat</p> : <p>Not a caring Cat</p>}
    </div>
  );
}

export default CatCard;
