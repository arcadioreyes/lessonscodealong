import dogImageOne from "../../assets/dog1.jpg";
import dogImageTwo from "../../assets/dog2.jpg";
import dogImageThree from "../../assets/dog3.jpg";
import dogImageFour from "../../assets/dog4.jpg";
import DogCard from "../DogCard/DogCard";
import "./MainSection.css";

const dogList = [
  { name: "Jason", src: dogImageOne, description: "Nice dog" },
  { name: "Leonardo", src: dogImageTwo, description: "Fierce" },
  { name: "Bosuano", src: dogImageThree, description: "Smart" },
  { name: "Jeffrey", src: dogImageFour, description: "Strong" },
];

function MainSection() {
  return (
    <div className="main">
      <h1>Welcome to my React Dog</h1>
      <br />

      <div className="dogs-container">
        {dogList.map((dog) => {
          return (
            <DogCard
              name={dog.name}
              src={dog.src}
              description={dog.description}
            />
          );
        })}
      </div>

      {/* <DogCard
        name={"Jason"}
        src={dogImageOne}
        description={"Looks scary but os the nicest dog"}
      />
      <br />

      <DogCard
        name={"Leonardo"}
        src={dogImageTwo}
        description={"The most majestic dog"}
      />
      <br />

      <DogCard
        name={"Jeffrey"}
        src={dogImageThree}
        description={"The most beautiful dog"}
      />
      <br />

      <DogCard
        name={"Tito"}
        src={dogImageFour}
        description={"The most lovely dog"}
      /> */}

      <br />
    </div>
  );
}

export default MainSection;
