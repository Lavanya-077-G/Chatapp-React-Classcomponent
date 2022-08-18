import { Component } from "react";
import Container from "./container";

export default class App extends Component {
  constructor() {
    super();
    this.state = { person1Message: [], person2Message: [] };
    this.person1 = {
      name: "Nandhini",
      id: "person1",
    };
    this.person2 = {
      name: "Usha K V",
      id: "person2",
    };
  }
  
  messagearrupdate = (message1, message2) => {
    this.setState({...this.state,person1Message:[...this.state.person1Message,JSON.parse(JSON.stringify(message1))],person2Message:[...this.state.person2Message,JSON.parse(JSON.stringify(message2))]});
    console.log(this.state);
  };

  render() {
  
    return (
      <div className="user">
        <Container val={this.person1} messages={this.state.person1Message}  func={this.messagearrupdate} />
        <Container val={this.person2}  messages={this.state.person2Message} func={this.messagearrupdate} />
      </div>);
  }
}
