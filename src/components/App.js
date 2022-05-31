import React, { useState } from "react";
import Nav from "./Nav";
import PigsContainer from "./PigsContainer";
import NewHogForm from "./NewHogForm";
import hogs from "../porkers_data";

function App() {
  const [filterGrease, setFilterGrease] = useState(false);
  const [sortPigs, setSortPigs] = useState(false);

  console.log(hogs);

  const handleFilterGrease = () => {
    setFilterGrease((filterGrease) => !filterGrease);
  };

  const handleSort = () => {
    setSortPigs((sortPigs) => !sortPigs);
  };

  const addHog = (newHog) => {
    hogs.push(newHog);
  };

  return (
    <div className="App">
      <Nav />
      <NewHogForm addHog={addHog} />
      <button onClick={handleFilterGrease} className="filterWrapper normalText">
        {filterGrease ? "Remove Filter" : "Filter Greased Hogs"}
      </button>
      <button onClick={handleSort} className="filterWrapper normalText">
        {sortPigs ? "Remove Sorting" : "Sort Hogs By Name"}
      </button>
      <PigsContainer
        sortPigs={sortPigs}
        filterGrease={filterGrease}
        hogs={hogs}
      />
    </div>
  );
}

export default App;
