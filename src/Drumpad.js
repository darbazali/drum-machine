import React, { Component } from "react";
import { soundBank } from "./soundBank";
import { Drum } from "./Drum";
import Volume from "./components/Volume";

export default class Drumpad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "Drum Machine",
      volume: 0.5
    };

    this.updateDisplay = this.updateDisplay.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this)
  }

  updateDisplay(clipID) {
    this.setState({ display: clipID });
  }

  adjustVolume(e) {
    this.setState({
        volume: e.target.value,
        display: 'Volume: ' + Math.floor(e.target.value * 100)
    })
  }

  render() {
    return (
      <div id="drum-machine">
          <h1>Drum Machine</h1>
        <div id="display">{this.state.display}</div>
      
        <Volume 
          volume={this.state.volume}
          adjustVolume={this.adjustVolume}
        />

        <div id="drum-container">
          {
            soundBank.map((drum) => {
              return (
                <Drum
                  volume={this.state.volume}
                  url={drum.url}
                  key={drum.keyCode}
                  keyCode={drum.keyCode}
                  id={drum.id}
                  keyTrigger={drum.keyTrigger}
                  updateDisplay={this.updateDisplay}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}
