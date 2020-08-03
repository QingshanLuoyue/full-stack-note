import React, {Component} from "react";
import {Redirect, Prompt} from "../k-react-router-dom/";

export default class HomePage extends Component {
  render() {
    console.log("props", this.props); //sy-log
    // return (
    //   <Redirect
    //     to={{
    //       pathname: "/welcome"
    //     }}
    //   />
    // );
    return (
      <div>
        <Prompt when={true} message={'确定离开吗'}></Prompt>
        <h3>HomePage</h3>
      </div>
    );
  }
}
