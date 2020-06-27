import React, { Component } from "react";
import { soundBank } from "./soundBank";
import { Drum } from "./Drum";

export default class Drumpad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(clipID) {
    this.setState({ display: clipID });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-container">
          {soundBank.map((drum) => {
            return (
              <Drum
                content={drum.id.replace(/_/g, " ")}
                url={drum.url}
                key={drum.keyCode}
                keyCode={drum.keyCode}
                id={drum.id}
                keyTrigger={drum.keyTrigger}
                updateDisplay={this.updateDisplay}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
