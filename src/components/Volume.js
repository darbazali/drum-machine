import React from "react";

const Volume = ({ volume, adjustVolume }) => {
  return (
    <div>
      <label htmlFor="volume">Volume</label>
      <br />
      <input
        id="volume"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={adjustVolume}
      />
    </div>
  );
};

export default Volume;
