import React, { Component } from "react";

class Counter extends Component {
  // MODEL
  constructor(props) {
    super(props);

    this.state = { ticks: props.init };
  }

  // UPDATE
  incrementTicks = () => {
    this.setState((state) => ({ ...state, ticks: state.ticks + 1 }));
  };

  // VIEW
  render() {
    const { ticks } = this.state;
    return (
      <div>
        <button onClick={this.incrementTicks} disabled={ticks >= 10}>
          {ticks}
        </button>
      </div>
    );
  }
}

export default Counter;
