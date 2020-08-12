import React, { useState } from "react";

import { soundBank } from "../soundBank";
import { Drum } from "../Drum";
import Volume from "./Volume";
import Display from "./Display";

const Drumpad = () => {
  const [display, setDisplay] = useState("Drum Machine");
  const [volume, setVolume] = useState(0.5);

  const updateDisplay = (clipID) => {
    setDisplay(clipID);
  };

  const adjustVolume = (e) => {
    setVolume(e.target.value);
    setDisplay("Volume: " + Math.floor(e.target.value * 100));
  };

  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>

      <Display text={display} />
      <Volume volume={volume} adjustVolume={adjustVolume} />

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
