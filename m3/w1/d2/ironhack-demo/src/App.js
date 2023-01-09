import { v4 as uuidv4 } from "uuid";

import CatCard from "./components/CatCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

const navigationLinks = ["Home", "About", "Contact", "Team"];

const catsList = [
  {
    name: "leo",
    imageUrl:
      "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description: "",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar navigationLinks={navigationLinks} />
      <br />
      {catsList.map((cat) => (
        <CatCard key={uuidv4()} cat={cat} />
      ))}

      <h1>React Lecture</h1>
      <br />

      <Footer />
    </div>
  );
}

export default App;
