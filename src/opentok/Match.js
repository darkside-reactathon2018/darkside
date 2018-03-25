import React, { Component } from "react";
import Video from "./opentok";

export default class Match extends Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          "justify-content": "center",
          "flex-direction": "row"
        }}
      >
        <Video />
      </div>
    );
  }
}
