import "./SeasonDisplay.css";
import React from "react";

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

let seasonConfig = {
  summer: {
    text: "Let's hit the beach!!",
    iconName: "sun",
  },

  winter: {
    text: "Whoa! It is chilly!!",
    iconName: "snowflake",
  },
};

const SeasonDisplay = props => {
  let season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-card ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
