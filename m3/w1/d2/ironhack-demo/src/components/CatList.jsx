import { v4 as uuidv4 } from "uuid";
import CatCard from "./CatCard";

function CatList(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {props.catsList.map((cat) => (
        <CatCard key={uuidv4()} cat={cat} />
      ))}
    </div>
  );
}

export default CatList;
