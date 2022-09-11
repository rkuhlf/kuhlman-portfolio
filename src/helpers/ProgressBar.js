import React from "react";

export default function ProgressBar(props) {
  const fillHolderStyle = {
    width: props.percentage + "%",
    position: "absolute",
    left: "0",
    height: "100%"
  };

  const fillStyle = {
    backgroundColor: props.fill || "#54d665"
  };

  return (
    <div className="progress-bar-parent">
      <div className="progress-bar-background" />
      <div className="progresss-bar-fill-holder" style={fillHolderStyle}>
        <div className="progress-bar-fill" style={fillStyle}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
