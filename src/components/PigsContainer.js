import React from "react";
import Pig from "./Pig";

function PigsContainer({ hogs, filterGrease, sortPigs }) {
  const hogsList = hogs.map((hog) => {
    return <Pig key={hog.name} hog={hog} />;
  });

  const greaseHogsList = hogs.map((hog) => {
    if (hog.greased) {
      return <Pig key={hog.name} hog={hog} />;
    } else {
      return null;
    }
  });

  if (filterGrease) {
    return <div className="ui grid container cards">{greaseHogsList}</div>;
  }

  if (sortPigs) {
    const hogsCopy = [...hogs];
    const sortedHogs = hogsCopy.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    const sortHogsList = sortedHogs.map((hog) => {
      return <Pig key={hog.name} hog={hog} />;
    });

    return <div className="ui grid container cards">{sortHogsList}</div>;
  }

  return <div className="ui grid container cards">{hogsList}</div>;
}

export default PigsContainer;
