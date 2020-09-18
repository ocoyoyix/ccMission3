import React, { Component } from "react";

import "./App.css";
import Easel from "./components/Easel";
import canvas from "./img/canvas.jpg";
import mountain from "./img/mountain.jpg";
import skyline from "./img/skyline.jpg";
import space from "./img/space.jpg";
import horse from "./img/horse.png";
import helicopter from "./img/helicopter.png";
import ufo from "./img/ufo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      process: "loading",
      currState: -1,
      img1: "",
      img2: "",
      transitionMatrix: [
        [0, 0, 0, 0, 0.75, 0.05, 0.1, 0.1],
        [0, 0, 0, 0, 0, 0.6, 0.2, 0.2],
        [0, 0, 0, 0, 0, 0.2, 0.5, 0.3],
        [0, 0, 0, 0, 0, 0.1, 0.1, 0.8],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0.1, 0.7, 0.1, 0.1, 0, 0, 0, 0],
        [0.1, 0.2, 0.6, 0.1, 0, 0, 0, 0],
        [0.1, 0.2, 0.5, 0.2, 0, 0, 0, 0],
      ],
    };
    this.calcNextStep = this.calcNextStep.bind(this);
  }

  componentDidMount() {
    //Randomly chooses the very first element
    var firstStep = Math.floor(Math.random() * (0 - 8) + 8);
    //When mounted, will calculate the second eliment to Render
    this.calcNextStep(firstStep);
  }

  //This function decides which is the next step in the markov chain
  calcNextStep(curr) {
    //Get the index of the next step
    let newState = this.probSimulate(this.state.transitionMatrix[curr]);
    //Save the next step as the current step
    this.setState({ currState: newState });
    //Checks if canvas is needed as it is current or next element
    if (curr === 4 || newState === 4) {
      this.setState({
        process: "easel",
        img1: curr,
        img2: newState,
      });
    }
    //Needed for image layering. Index 0-3 are meant to be background
    else if (curr <= 3) {
      this.setState({
        process: "image-layers",
        img1: curr,
        img2: newState,
      });
    } else {
      //Needed for image layering. Index 0-4 are meant to be foreground objects{
      this.setState({
        process: "image-layers",
        img2: curr,
        img1: newState,
      });
    }
  }

  //Simulates the "dice roll" - uses the probabilities stored in the matrix to choose what the next step should be
  probSimulate(chances) {
    var rand = Math.random();
    var chance = 0;
    for (var i = 0; i < chances.length; i++) {
      chance += chances[i];
      if (rand < chance) {
        return i;
      }
    }
  }

  render() {
    //Each image has a unique index, index 4 is null because it is not an image, it is a canvas
    let imageList = [
      canvas,
      mountain,
      skyline,
      space,
      null,
      horse,
      helicopter,
      ufo,
    ];
    //Pre-Mount
    if (this.state.process === "loading") {
      return <p>loading</p>;
    }
    //If a canvas is needed, Will use a Easel Component found in src/components/Easel.js
    else if (this.state.process === "easel") {
      return (
        <React.Fragment>
          <h3>Draw On Me!!!!</h3>
          <div className="image-cont">
            <button
              type="button"
              className="next-state"
              onClick={(e) => this.calcNextStep(this.state.currState)}
            >
              Next State
            </button>
            <Easel />
          </div>
        </React.Fragment>
      );
    }
    //Renders non-canvas images
    else {
      return (
        <React.Fragment>
          <div className="image-cont">
            <button
              type="button"
              className="next-state"
              onClick={(e) => this.calcNextStep(this.state.currState)}
            >
              Next State
            </button>
            <img
              className="image-1"
              src={imageList[this.state.img1]}
              alt="background"
            />
            <img
              className="image-2"
              src={imageList[this.state.img2]}
              alt="foreground"
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
