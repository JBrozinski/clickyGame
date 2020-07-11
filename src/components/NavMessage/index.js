import React, { Component } from "react";
import "./style.css";



class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  componentDidUpdate({ score, topScore }, prevState) {
    const newState = { animating: true };

    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
      case "correct":
        return "Good Job!";
      case "incorrect":
        return "Nope! You already clicked that Samuel L. Jackson!";
      default:
        return "Click a Samuel L. Jackson to begin!";
    }
  };

  render() {
    return (
      <li
        className={this.state.animating ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
