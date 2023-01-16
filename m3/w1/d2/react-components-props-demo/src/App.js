import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import BikeCard from "./components/BikeCard";
import StudentCard from "./components/StudentCard";
import imageGravel from "./images/gravel.jpg";
import imagePista from "./images/pista.jpg";
import imageRoad from "./images/road.jpg";

import "./App.css";

const bikeList = [
  {
    bikeType: "Road",
    src: imageRoad,
    description: "This is a Road Bike",
  },
  {
    bikeType: "Pista",
    src: imagePista,
    description: "This is a Pista Bike",
  },
  {
    bikeType: "Gravel",
    src: imageGravel,
    description: "This is a Gravel Bike",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName={"Harper"} />
      <hr />

      <Greeting firstName={"Michelle"} />
      <hr />

      <StudentCard
        name={"Eva"}
        week={7}
        info={{ city: "BCN", course: "Web" }}
      />
      <hr />
      <StudentCard
        name={"Mat"}
        week={8}
        info={{ city: "MIA", course: "Data" }}
      />
      <hr />

      <h2> Bike Types</h2>
      <div className="bike-container">
        {bikeList
          .sort((a, b) => a.bikeType.localeCompare(b.bikeType))
          .map((bike) => {
            return (
              <BikeCard
                bikeType={bike.bikeType}
                src={bike.src}
                description={bike.description}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
