import dogImage1 from "../assets/dog1.jpg";
function MainSection() {
  return (
    <div className="main">
      <h1>Welcome to my React Dog</h1>
      <br />

      <img src={dogImage1} alt="dog1" width={"300px"} />
    </div>
  );
}

export default MainSection;
