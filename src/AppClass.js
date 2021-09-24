import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreament = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>React Class Component</h1>
        <h3>Creating a plus and - Button</h3>
        <p>Value of counter is : {this.state.count}</p>
        <button onClick={this.increament}>+</button>
        <button onClick={this.decreament}>-</button>
      </div>
    );
  }
}
