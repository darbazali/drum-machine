import React, { Component } from "react";
import { bankOne } from "./soundBank";

export class Drum extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    
    if (event.keyCode === this.props.keyCode) {
      this.playSound(event);
    }
  }

  playSound(event) {
    let keyTrigger = this.props.keyTrigger;
    let audio = event.target.querySelector("audio" + "#" + keyTrigger);
    audio.currentTime = 0;
    audio.play();
    this.props.updateDisplay(this.props.id.replace(/-/g, " "));
  }

  render() {
    return (
      <button
        autoFocus={false}
        onClick={this.playSound}
        className="drum-pad"
        id={this.props.id}
      >
        {this.props.keyTrigger}

        <audio
          id={this.props.keyTrigger}
          className="clip"
          src={this.props.url}
        ></audio>
      </button>
    );
  }
}


