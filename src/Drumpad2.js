import React, { Component } from "react";
import { bankOne } from "./bankOne";

class Drum extends Component {
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
    let keyTrigger = this.props.keyTrigger;
    if (event.keyCode === this.props.keyCode) {
      let audio = event.target.querySelector("audio" + "#" + keyTrigger);
      audio.play();
    }
  }

  playSound(event) {

    let audio = event.target.querySelector("audio");
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

export default class Drumpad2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(e) {
    // this.setState({display: e.target.id})
    this.setState({ display: e });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        {bankOne.map((drum) => {
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
    );
  }
}
