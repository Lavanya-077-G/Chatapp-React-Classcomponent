import React from "react";
import Header from "./header.js";
import Messagebody from "./messagebody.js";
import Footer from "./footer.js";
import "./App.css";
export default class Container extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const {val, messages, func} = this.props;
    // console.log(this.props);
    return (
      <div className="sender" id={val.name}>
        <Header val={val} />
        <Messagebody messagearr={messages}/>
        <Footer val={val} func={func} />
      </div>
    );
  }
}
