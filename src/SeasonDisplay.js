import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  //   console.log("sd props", props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Burr, it is chilly" : "Let's hit the beach";
  return <h1>{text}</h1>;
};

export default SeasonDisplay;
