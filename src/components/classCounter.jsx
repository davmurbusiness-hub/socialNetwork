import React from "react";
import Counter from "./Counter";

class classCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({likes: this.state.likes + 1});
  }

  decrement() {
    if (this.state.likes) this.setState({likes: this.state.likes - 1});
    console.log(this.state.likes);
  }


  render() {
    return (
      <div>
        <h1>{this.state.likes} likes</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }

}

export default classCounter;