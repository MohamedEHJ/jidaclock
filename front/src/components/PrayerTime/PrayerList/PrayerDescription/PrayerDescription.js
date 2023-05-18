import React from "react";
import styles from "./PrayerDescription.module.css";

export default function PrayerDescription({ prayer, prayerName, color }) {
  // Create a style object with the background color based on the color prop value
  let divStyle = {
    backgroundColor: color,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let textStyle = {
    backgroundColor: (color === "#f4fff8") ? "#4d4847" : "#f4fff8",
    color: (color === "#f4fff8") ? "#f4fff8" : "#4d4847",
  }

  // Append the color prop value to the divStyle object
  if (color === "#f4fff8") {
    divStyle = { ...divStyle, color: "#4d4847" };
  } else {
    divStyle = { ...divStyle, filter: "grayscale(1)" };
  }

  return (
    <div
      className={`${styles.background} flex-grow flex-shrink-0`}
      style={divStyle}
    >
      <h1 style={textStyle} className="tracking-tighter px-5 rounded-full">{capitalizeFirstLetter(prayerName)}</h1>
      <div>{prayer}</div>
    </div>
  );
}
