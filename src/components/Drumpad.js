import React from "react";
import Drum from "./Drum";

const Drumpad = ({ updateDisplay, soundBank, volume }) => {
  return (
    <div id="drum-machine">
      <div id="drum-container">
        {soundBank.map((drum) => {
          return (
            <Drum
              volume={volume}
              url={drum.url}
              key={drum.keyCode}
              keyCode={drum.keyCode}
              id={drum.id}
              keyTrigger={drum.keyTrigger}
              updateDisplay={updateDisplay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Drumpad;
