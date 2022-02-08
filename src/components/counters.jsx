import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, counters, onDecrement } =
      this.props;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1">
              <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                Reset
              </button>
            </div>
          </div>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
