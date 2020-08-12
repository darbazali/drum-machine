import React, { useState } from "react";
import { render } from "react-dom";
import Drumpad from "./components/Drumpad";
import { soundBank } from "./soundBank";
import Display from "./components/Display";
import Volume from "./components/Volume";

const App = () => {
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

      <Drumpad
        soundBank={soundBank}
        updateDisplay={updateDisplay}
        volume={volume}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
