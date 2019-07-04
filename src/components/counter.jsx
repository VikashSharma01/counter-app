/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
// import Counters from "./counters";

class Counter extends Component {
  state = {
    count: this.props.counter.value
  };

  render() {
    let classes = this.getAllBadgeStyle();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2 "
        >
          Delete
        </button>
      </div>
    );
  }

  getAllBadgeStyle() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }
}

export default Counter;
