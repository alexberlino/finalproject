import React from "react";

export default function DrawerToggleButton(props) {
  console.log("THISPROPSDRAWER", props);
  return (
    <a>
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line"> </div>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
      </button>
    </a>
  );
}
