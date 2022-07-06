import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import React from "react";
import Counter from "./component/Counter";
class App extends React.Component {

  state = {
    show: false,
  };

  handleshow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="show">

          <Button variant="primary" onClick={this.handleshow}>
          {this.state.show === true ? "Hide" : "shwo"}
        </Button>{" "}
        <p> COUNTER</p> 
        {this.state.show === true ? <Counter /> : null}

        
      </div>
      </div>
    
    );
  }
}

export default App;