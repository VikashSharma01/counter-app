import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = items => {
    console.log("Items Reset" + items);
    const counters = this.state.counters.map(v => {
        v.value =0;
        return v;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Deleted Counter id=" + counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2 "
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement = {this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
