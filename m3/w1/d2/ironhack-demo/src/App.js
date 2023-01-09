import NavBar from "./components/NavBar";
import CatList from "./components/CatList";
import Footer from "./components/Footer";
import "./App.css";

import catImageOne from "./images/cat1.jpg";
import catImageTwo from "./images/cat2.jpg";
import catImageThree from "./images/cat3.jpg";

const navigationLinks = ["Home", "About", "Contact", "Team"];

const catsList = [
  {
    name: "Leo",
    imageUrl: catImageOne,
    description: "nice cat",
    showsAffection: true,
  },

  {
    name: "Libra",
    imageUrl: catImageTwo,
    description: "nice cat",
    showsAffection: false,
  },

  {
    name: "Gemini",
    imageUrl: catImageThree,
    description: "cool cat",
    showsAffection: true,
  },
];

function App() {
  return (
    <div className="App">
      <NavBar navigationLinks={navigationLinks} />

      <h1>React Lecture</h1>

      <CatList catsList={catsList} />

      <Footer />
    </div>
  );
}

export default App;
