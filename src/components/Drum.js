/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from "react";

const Drum = (props) => {
  const { keyTrigger, volume, id, url, keyCode, updateDisplay } = props;

  let audio = useRef();
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  const playSound = (e) => {
    // let keyTrigger = keyTrigger;
    let audio = e.target.querySelector("audio" + "#" + keyTrigger);
    audio.currentTime = 0;
    audio.play();
    audio.volume = volume;
    updateDisplay(id.replace(/-/g, " "));
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) playSound(e);
  };
  return (
    <button onClick={playSound} className="drum-pad" id={id}>
      {keyTrigger}

      <audio id={keyTrigger} className="clip" src={url}></audio>
    </button>
  );
};

export default Drum;
