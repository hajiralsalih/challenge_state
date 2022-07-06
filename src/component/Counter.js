import "../App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
  state = {
    counter2: 0,
  };
  count = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
    });
  };
  count1 = () => {
    this.setState({
      counter2: this.state.counter2 - 1,
    });
  };
  reset = () => {
    this.setState({
      counter2: 0,
    });
  };

  render() {
    return (
    <div className="reset">
        <div class="btn-gr">
  <button type="button" class="btn btn-secondary" onClick={this.count}>+</button>
  <h3>{this.state.counter2}</h3>
  <button type="button" class="btn btn-secondary"
  onClick={this.state.counter2 > 0 ? this.count1 : null}>-</button>{" "}
</div>

 <button type="button" class="btn btn-success" onClick={this.reset}>
        reset
   </button>{" "}
   

</div>

    );
  }
}
export default Counter;