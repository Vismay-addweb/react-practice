import React from "react";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonVisible: false,
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.showButton = this.showButton.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  showButton() {
    this.setState({ isButtonVisible: !this.state.isButtonVisible });
  }
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.state.isButtonVisible}
          onChange={this.showButton}
        />{" "}
        show button
        {this.state.isButtonVisible && (
          <button onClick={this.increment}>{this.state.counter}</button>
        )}
      </>
    );
  }
}

export default Practice;