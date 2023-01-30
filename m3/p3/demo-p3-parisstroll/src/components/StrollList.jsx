import { useState } from "react";
import strollsDataJSON from "../strolls-data.json";
import StrollCard from "./StrollCard";
import AddStroll from "./AddStroll";
import FilterStrolls from "./FilterStrolls";
import FilterQuartierStrolls from "./FilterQuartierStrolls";

function StrollList() {
  const [strolls, setStrolls] = useState(strollsDataJSON);
  const [showForm, setShowForm] = useState(false);
  const [strollsData, setStrollsData] = useState(strollsDataJSON); //this state variable will only be updated to add strolls
  const [strollsQuartierData, setStrollsQuartierData] =
    useState(strollsDataJSON);

  const addNewStroll = (newStroll) => {
    const updatedStrolls = [...strolls, newStroll];
    const updatedStrollsData = [...strollsData, newStroll];
    const updatedStrollsQuartierData = [...strollsQuartierData, newStroll];

    setStrolls(updatedStrolls);
    setStrollsData(updatedStrollsData);
    setStrollsQuartierData(updatedStrollsQuartierData);
  };

  // filter by letter
  const filterStrollList = (str) => {
    let filteredStrolls;

    if (str === "All") {
      filteredStrolls = strollsData;
    } else {
      filteredStrolls = strollsData.filter((stroll) => {
        return stroll.title[0].toLowerCase() === str.toLowerCase();
      });
    }

    setStrolls(filteredStrolls);
  };

  // filter by quartier
  const filterStrollQuartierList = (string) => {
    let filteredQuartierStrolls;

    if (string === "All") {
      filteredQuartierStrolls = strollsQuartierData;
    } else {
      filteredQuartierStrolls = strollsQuartierData.filter((stroll) => {
        return stroll.quartier === string;
      });
    }

    setStrollsQuartierData(filteredQuartierStrolls);
  };

  return (
    <div>
      <h1>Welcome to Paris Stroll</h1>
      <h2>Discover Paris by bicycle!</h2>
      <div className="Filters">
        <FilterStrolls filterStrollList={filterStrollList} />
        <FilterQuartierStrolls
          filterStrollQuartierList={filterStrollQuartierList}
        />
      </div>
      <h2>Strolls List</h2>
      <div className="StrollList">
        {strolls
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((stroll) => {
            return <StrollCard key={stroll._id} stroll={stroll} />;
          })}
      </div>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Add Stroll Form" : "Display Add Stroll form"}
      </button>
      {showForm && <AddStroll addNewStroll={addNewStroll} />}
    </div>
  );
}

export default StrollList;
