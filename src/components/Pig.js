import React, { useState } from "react";

function Pig({ hog }) {
  const [showDetail, setShowDetail] = useState(false);
  const [hideHog, setHideHog] = useState(false);

  const { name, image, greased, specialty, weight } = hog;
  const highestMedalAchieved = hog["highest medal achieved"];

  const handleClickDetail = () => {
    setShowDetail((showDetail) => !showDetail);
  };

  const pigDetail = (
    <ul>
      <li>Specialty: {specialty}</li>
      <li>Weight: {weight}</li>
      <li>Highest Medal Achieved: {highestMedalAchieved}</li>
      <li>Greased: {greased ? "yes" : "no"}</li>
    </ul>
  );

  const handleHideHog = () => {
    setHideHog((hideHog) => !hideHog);
  };

  const pigInfo = (
    <>
      <h3 className="hoggyText">{name}</h3>
      <img src={image} alt={name} onClick={handleClickDetail} />
      <button onClick={handleHideHog}>Hide Hog</button>
      {showDetail ? pigDetail : null}
    </>
  );

  const showHogBtn = <button onClick={handleHideHog}>Show Hog</button>;

  return (
    <div className="pigTile normalText ui eight wide column card">
      {hideHog ? showHogBtn : pigInfo}
    </div>
  );
}

export default Pig;
